package edu.miu.waa_final_project.service.impl;

import edu.miu.waa_final_project.domain.Property;
import edu.miu.waa_final_project.repository.PropertyRepo;
import edu.miu.waa_final_project.repository.UserRepo;
import edu.miu.waa_final_project.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyServiceImpl implements PropertyService {


    @Autowired
    private PropertyRepo propertyRepo;

    @Autowired
    private UserRepo userRepo;


    @Override
    public List<Property> getAllProperty() {
        return propertyRepo.findAll();
    }

    @Override
    public Property getPropertyById(long id) {
        return propertyRepo.findById(id).orElse(null);
    }

        @Override
    public void saveProperty(Property property) {
        propertyRepo.save(property);

    }

    @Override
    public void deleteProperty(long id) {
        var property = propertyRepo.findById(id).get();
        propertyRepo.deleteById(id);

    }

    @Override
    public Property updateProperty(Property property, long userId) {
        var user = userRepo.findById(userId).get();
        property.setUser(user);

        return property;
    }



}
