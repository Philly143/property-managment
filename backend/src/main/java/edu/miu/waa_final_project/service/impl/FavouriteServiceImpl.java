package edu.miu.waa_final_project.service.impl;

import edu.miu.waa_final_project.domain.FavouriteList;
import edu.miu.waa_final_project.domain.Property;
import edu.miu.waa_final_project.domain.User;
import edu.miu.waa_final_project.repository.FavouriteRepo;
import edu.miu.waa_final_project.repository.PropertyRepo;
import edu.miu.waa_final_project.repository.UserRepo;
import edu.miu.waa_final_project.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Service;



import java.util.List;

import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class FavouriteServiceImpl implements FavouriteService {

    @Autowired
    private FavouriteRepo favouriteRepo;

    @Autowired
    private UserRepo userRepo;


    @Autowired
    private PropertyRepo propertyRepo;




    @Override
    public List<Property> findAll() {
        return favouriteRepo.findAll().stream().map(p->p.getProperty()).collect(Collectors.toList());
    }

    @Override
    public List<Property> getFavoriteById(long id) {
        return favouriteRepo.findFavouriteListByUser(id).stream()
                .map(FavouriteList::getProperty).collect(Collectors.toList());
    }

    @Override
    public void addFavorite(long userId, long pId) {
   Optional<User> user = userRepo.findById(userId);
  Optional< Property> property = propertyRepo.findById(pId);
  favouriteRepo.save(new FavouriteList(user.get(),property.get()));





    }


    @Override
    public void deleteFavouriteByUserIdAndPropertyId(long uId, long pId) {
        var fav = favouriteRepo.findFavouriteListByPropertyAndUser(uId,pId);
        long favId = fav.get(0).getId();
        favouriteRepo.deleteById(favId);
    }
}
