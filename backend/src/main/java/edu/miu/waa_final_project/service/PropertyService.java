package edu.miu.waa_final_project.service;

import edu.miu.waa_final_project.domain.Property;

import java.util.List;

public interface PropertyService {

    List<Property> getAllProperty();

    Property getPropertyById(long id);

    void saveProperty(Property property);
    void deleteProperty(long id);
    Property updateProperty(Property property, long userId);
}

