'use strict';

import logger from "../utils/logger.js";
import cats from "../models/mycollection.js";

const getcatBreeds = () => {
  const catBreeds = [];
  const cats = cats.getAllCats();
  cats.forEach(element => {
    if (!catBreeds.includes(element.catBreed)) {
      catBreeds.push(element.catBreed);
    }
  });
  return catBreeds;
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
    const catBreed = request.body.catBreed;
    logger.debug('Cat Breed = ' + catBreed);

    const viewData = {
      title: 'CatBreeds',
      foundCatBreeds: cats.getCatBreed(catBreed),
      categories: getcatBreeds(),
      catBreedTitle: catBreed
    };
    
    logger.debug(viewData.foundCatBreeds);
    
    response.render('search', viewData);
},

  
};

export default search;
