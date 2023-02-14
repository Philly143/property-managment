package edu.miu.waa_final_project.repository;

import edu.miu.waa_final_project.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role,Long> {
    Role findByRole(String role);
}
