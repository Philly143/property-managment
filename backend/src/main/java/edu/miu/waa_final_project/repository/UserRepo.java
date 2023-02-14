package edu.miu.waa_final_project.repository;



import edu.miu.waa_final_project.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
  User findByEmail(String email);
//   User resetPasswordToken(String resetPassword);

}
