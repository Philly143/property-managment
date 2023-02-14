package edu.miu.waa_final_project.service;

import edu.miu.waa_final_project.domain.Property;

import java.util.List;

public interface FavouriteService {

    List<Property> findAll();

    List<Property> getFavoriteById(long id);

    void addFavorite(long user_id, long property_id);

    void deleteFavouriteByUserIdAndPropertyId(long uId, long pId);
}
