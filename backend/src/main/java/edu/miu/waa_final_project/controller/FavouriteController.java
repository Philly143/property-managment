package edu.miu.waa_final_project.controller;

import edu.miu.waa_final_project.domain.Property;
import edu.miu.waa_final_project.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/favourites")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class FavouriteController {
     @Autowired
       private FavouriteService favoriteService;

        @GetMapping
        public List<Property> findAll(){
            return favoriteService.findAll();
       }

        @GetMapping("/{id}")
        public List<Property> getFavoriteById(@PathVariable long id){
            return favoriteService.getFavoriteById(id);
        }

        @PostMapping
        public void addFavorite(@RequestParam int user_id, @RequestParam int property_id){
             favoriteService.addFavorite(user_id, property_id);
        }



        @DeleteMapping()
        public void removeFavouriteByUserIdAndPropertyId(@RequestParam int user_id, @RequestParam int property_id){
           favoriteService.deleteFavouriteByUserIdAndPropertyId(user_id,property_id);
        }
}
