'use strict';

import logger from "../utils/logger.js";
import cats from "../models/mycollection.js";

const getcatBreeds = () => {
  const breed = [];
  const allCats = cats.getAllCats();
  allCats.forEach(element => {
    if (!breed.includes(element.breed)) {
      breed.push(element.breed);
    }
  });
  return breed;
}

const search = {
  createView(request, response) {
    logger.info("Search page loading!");
	
    const viewData = {
      title: "CatBreed Search",
      catBreeds: getcatBreeds()
    };
    
    logger.debug(viewData.catBreeds);
    
    response.render('search', viewData);
  },
  
findResult(request, response) {
    const breed = request.body.catBreed;
    logger.debug('Cat Breed = ' + breed);

    const viewData = {
      title: 'CatBreeds',
      foundCatBreeds: cats.getcatBreed(breed),
      catBreeds: getcatBreeds(),
      catBreedTitle: breed
    };
    
    logger.debug(viewData.foundCatBreeds);
    
    response.render('search', viewData);
},


  
};

export default search;
