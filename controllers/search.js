'use strict';

import logger from "../utils/logger.js";
import cats from "../models/mycollection.js";
import accounts from './accounts.js';

const getcatBreeds = (loggedInUser) => {
  const breed = [];
  const allCats = cats.getUserCatBreeds(loggedInUser.id);
  allCats.forEach(element => {
    if (!breed.includes(element.breed)) {
      breed.push(element.breed);
    }
  });
  return breed;
}

const search = {
  createView(request, response) {
     const loggedInUser = accounts.getCurrentUser(request);
    logger.info("Search page loading!");
	 if (loggedInUser) {
    const viewData = {
      title: "CatBreed Search",
      catBreeds: getcatBreeds(loggedInUser),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
    };
    
    logger.debug(viewData.catBreeds);
    
    response.render('search', viewData);
      }
    else response.redirect('/'); 
  },
  
findResult(request, response) {
  const loggedInUser = accounts.getCurrentUser(request);
    const breed = request.body.catBreed;
    logger.debug('Cat Breed = ' + breed);

    const viewData = {
      title: 'CatBreeds',
      foundCatBreeds: cats.getcatBreed(breed, loggedInUser.id),
      catBreeds: getcatBreeds(loggedInUser),
      catBreedTitle: breed,
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
       picture: loggedInUser.picture,
    };
    
    logger.debug(viewData.foundCatBreeds);
    
    response.render('search', viewData);
},


  
};

export default search;
