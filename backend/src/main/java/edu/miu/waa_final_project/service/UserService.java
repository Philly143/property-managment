package edu.miu.waa_final_project.service;



import edu.miu.waa_final_project.domain.User;
import edu.miu.waa_final_project.dto.UserDto;
import edu.miu.waa_final_project.dto.request.LoginRequest;
import edu.miu.waa_final_project.dto.response.LoginResponse;

import javax.security.auth.login.CredentialException;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserService {

 // cruds

 User getCustomerById(long id);
 User getOwnerById(long id);
 void update(User user, long id);
 List<User>getAllUsers();
 List<User>getAllCustomers();
 List<User>getAllOwners();
 List<User>getAdmin();
 boolean isEmailExist(String email);
 void deleteCustomer(long id);
 void addUser(User user);
 void deleteUser(long id);


 // security allowed properties

 public LoginResponse login(LoginRequest request);

 LoginRequest signup(UserDto userDTO);

 String updateResetPasswordToken(String token, String email, HttpServletRequest request) throws CredentialException;

 //User getUserFromResetToken(String resetPasswordToken);

 String logout(String request);

 User getUserByEmail(String email);
 User updateUserById(User user, long id);



}
