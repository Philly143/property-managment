package edu.miu.waa_final_project.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class Property  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private String street;
    private String zip;
    private String city;
    private String imageUrl;


    private String type;
    private String propertyName;
    private String description;
    private Integer numberOfRooms;
    private Integer numberOfBathRooms;
    private BigDecimal amount;
    private boolean status;
    private LocalDateTime postedDate;




    @JoinColumn(name = "owner_id")
    @JsonBackReference
    @ManyToOne
    private User user;

    public Property(String street, String zip, String city, String type, String propertyName, String description, Integer numberOfRooms, Integer numberOfBathRooms, BigDecimal amount, boolean status, LocalDateTime postedDate, User user, String imageUrl) {
        this.street = street;
        this.zip = zip;
        this.city = city;
        this.type = type;
        this.propertyName = propertyName;
        this.description = description;
        this.numberOfRooms = numberOfRooms;
        this.numberOfBathRooms = numberOfBathRooms;
        this.amount = amount;
        this.status = status;
        this.postedDate = postedDate;
        this.user = user;
        this.imageUrl=imageUrl;
    }
}
