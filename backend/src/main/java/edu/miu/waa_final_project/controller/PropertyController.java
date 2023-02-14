package edu.miu.waa_final_project.controller;

import edu.miu.waa_final_project.domain.Property;
import edu.miu.waa_final_project.domain.User;
import edu.miu.waa_final_project.service.PropertyService;
import edu.miu.waa_final_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/properties")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @Autowired
    private UserService userService;


    @GetMapping
    public List<Property> displayAllProperties(){
        return propertyService.getAllProperty();
    }

    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable long id){
        return propertyService.getPropertyById(id);
    }

    @PostMapping
    public void save(@RequestBody Property property){
        propertyService.saveProperty(property);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProperty(@PathVariable long id){
        propertyService.deleteProperty(id);
    }

    @PutMapping("/create/{id}")
    public Property updatePropertyUser(@PathVariable long userid, @RequestBody Property property){
        User user = userService.getCustomerById(userid);
        property.setUser(user);
        return property;
    }

}
