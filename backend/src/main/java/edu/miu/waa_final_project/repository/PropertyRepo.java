package edu.miu.waa_final_project.repository;

import edu.miu.waa_final_project.domain.Property;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PropertyRepo extends JpaRepository<Property, Long> {

}
