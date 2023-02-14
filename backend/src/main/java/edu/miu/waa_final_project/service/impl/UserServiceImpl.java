package edu.miu.waa_final_project.service.impl;

import edu.miu.waa_final_project.domain.Role;
import edu.miu.waa_final_project.domain.User;
import edu.miu.waa_final_project.dto.UserDto;
import edu.miu.waa_final_project.dto.request.LoginRequest;
import edu.miu.waa_final_project.dto.response.LoginResponse;
import edu.miu.waa_final_project.exceptions.EmailException;
import edu.miu.waa_final_project.service.UserService;
import edu.miu.waa_final_project.repository.RoleRepo;
import edu.miu.waa_final_project.repository.UserRepo;
import edu.miu.waa_final_project.util.EmailService;
import edu.miu.waa_final_project.util.JwtUtil;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.security.auth.login.CredentialException;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class UserServiceImpl implements UserService {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    MyUserDetailService myUserDetailService;

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    EmailService emailService;

    @Autowired
    RoleRepo roleRepository;

    List<String> tableList = new ArrayList<>();




    @Override
    public User getCustomerById(long id) {
        return userRepo.findAll().stream().filter(c->c.getId()==id)
                .filter(user -> user.getRoles().contains(new Role("customer")))
                .collect(Collectors.toList()).stream().findAny().get();
    }

    @Override
    public User getOwnerById(long id) {
        return userRepo.findAll().stream().filter(o->o.getId()==id)
                .filter(user -> user.getRoles().contains(new Role("owner")))
                .collect(Collectors.toList()).stream().findAny().get();
    }



    @Override
    public void update(User user, long id) {
        user.setId(id);
        userRepo.save(user);

    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public List<User> getAllCustomers() {
        return userRepo.findAll().stream()
                .filter(c->c.getRoles().stream().anyMatch(n->n.getRole().equals("customer"))).collect(Collectors.toList());
    }

    @Override
    public List<User> getAllOwners() {
        return userRepo.findAll().stream()
                .filter(c->c.getRoles().stream().anyMatch(n->n.getRole().equals("owner"))).filter(user -> user.isDeleted()==false).collect(Collectors.toList());
    }

    @Override
    public List<User> getAdmin() {
        return userRepo.findAll().stream()
                .filter(c->c.getRoles().stream().anyMatch(n->n.getRole().equals("admin"))).collect(Collectors.toList());
    }

    @Override
    public boolean isEmailExist(String email) {
        if(userRepo.findByEmail(email)!=null)
            return true;

        return false;
    }

    @Override
    public void deleteCustomer(long id) {
        User u = userRepo.findAll()
                .stream()
                .filter(s->s.getId()==id)
                .filter(user->user.getRoles()
                        .contains( new Role("customer")))

                .collect(Collectors.toList()).stream().findAny().get();


    }

    @Override
    public void addUser(User user) {
        userRepo.save(user);
    }

    @Override
    public void deleteUser(long id) {
        userRepo.deleteById(id);
    }

    @Override
    public LoginResponse login(LoginRequest request) {

            System.out.println(request.getPassword());
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            UserDetails userDetail = myUserDetailService.loadUserByUsername(request.getEmail());
            String jwtToken = jwtUtil.generateToken(userDetail);
            String refreshToken = jwtUtil.generateRefereshToken(request.getEmail());
            return new LoginResponse(jwtToken,refreshToken);
        }


    @Override
    public LoginRequest signup(UserDto userDTO) throws EmailException{

            if (isEmailExist(userDTO.getEmail()))
                throw new EmailException(" Email is taken");
            User user = mapper.map(userDTO, User.class);
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRoles(List.of(new Role(1, "owner")));
            userRepo.save(user);
            return new LoginRequest(userDTO.getEmail(), userDTO.getPassword());


        }




    @Override
    public String updateResetPasswordToken(String token, String email, HttpServletRequest request) throws CredentialException {
        if(isEmailExist(email)){
            User user = userRepo.findByEmail(email);
            user.setResetPassword(token);
            userRepo.save(user);
            String resetURL = "http://localhost:3000/reset_pwd?token="+token;
            emailService.sendEmail(user.getEmail(),"Password reset Link",resetURL);
            return resetURL;
        }else{
            throw new CredentialException("Unable to find user");
        }
    }

//    @Override
//    public User getUserFromResetToken(String resetPasswordToken) {
//        return userRepo.resetPasswordToken(resetPasswordToken);
//    }

    @Override
    public String logout(String request) {
        String token = request.split(" ")[1].trim();
        tableList.add(token);
        return "logged out";
    }



    @Override
    public User getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public User updateUserById(User user, long id) {
        user.setId(id);
        return userRepo.save(user);
    }
}

