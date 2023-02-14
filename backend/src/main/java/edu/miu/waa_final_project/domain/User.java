package edu.miu.waa_final_project.domain;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   private String firstName;
    private String lastName;
    private String email;
    private String password;
    private boolean isActive =Boolean.TRUE;
    private String resetPassword;
    private boolean isDeleted=Boolean.FALSE;



    @ManyToMany(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Role> roles;
  @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<Property> properties;

    public User(String firstName, String lastName, String email, boolean isActive,  List<Role> roles, List<Property> properties) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isActive = isActive;
        this.roles = roles;
        this.properties = properties;

    }
}
