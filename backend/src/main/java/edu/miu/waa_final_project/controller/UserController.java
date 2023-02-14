package edu.miu.waa_final_project.controller;

import edu.miu.waa_final_project.domain.User;
import edu.miu.waa_final_project.dto.UserDto;
import edu.miu.waa_final_project.dto.request.LoginRequest;
import edu.miu.waa_final_project.dto.response.LoginResponse;
import edu.miu.waa_final_project.exceptions.EmailException;
import edu.miu.waa_final_project.exceptions.TokenException;
import edu.miu.waa_final_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;


    // Getting CRUDS
    @GetMapping
    public List<User> displayAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @GetMapping("/customers")
    public List<User> displayAllCustomers(){
        return userService.getAllCustomers();
    }

    @GetMapping("/owners")
    public List<User> displayAllOwners(){
        return userService.getAllOwners();
    }

    @GetMapping("/admin")
    public List<User> displayAllAdmin(){
        return userService.getAdmin();
    }

    @GetMapping("/customers/{id}")
    public User displayAllCustomersById(@PathVariable long id){
        return userService.getCustomerById(id);
    }

    @GetMapping("/owners/{id}")
    public User displayOwnersById(@PathVariable long id){
        return userService.getOwnerById(id);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomersById(@PathVariable long id){
        userService.deleteCustomer(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable long id){
        userService.deleteUser(id);
    }

    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email){
        User user = userService.getUserByEmail(email);
        return user;
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable long id){
        return ResponseEntity.ok().body(userService.updateUserById(user,id));
    }

    // Security Based requests

    @PostMapping("/signup")
    public LoginRequest signupUser(@RequestBody UserDto userDto)throws EmailException{
        return userService.signup(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        LoginResponse loginResponse = userService.login(loginRequest);
        return ResponseEntity.ok().body(loginResponse);
    }

//    @GetMapping("/reset")
//    public String validation (@Param(value = "token") String token , HttpServletResponse httpServletResponse){
//        if(userService.getUserFromResetToken(token)==null)
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"token not found",new TokenException("not verified"));
//        return "accepted";
//    }
  @PostMapping("/logout")
    public String logout(HttpServletRequest httpServletRequest){
        userService.logout(httpServletRequest.getHeader("Authorization"));
        return null;
  }


}
