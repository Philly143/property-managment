package edu.miu.waa_final_project.repository;

import edu.miu.waa_final_project.domain.FavouriteList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteRepo extends JpaRepository<FavouriteList,Long> {


   List<FavouriteList> findFavouriteListByUser(long id);
    List<FavouriteList> findFavouriteListByPropertyAndUser(long uId , long pId);
}
