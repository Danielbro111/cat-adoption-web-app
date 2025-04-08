'use strict';

import logger from "../utils/logger.js";
import mycollection from '../models/mycollection.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';


const dashboard = {
  // Creates and renders page
  createView(request, response) {
    // Logs when the page is loading
    logger.info("Dashboard page loading!");
const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    // Data is passed to the view
    const viewData = {
      title: "Cat Adoption Center Dashboard",
      catBreeds: mycollection.getUserCatBreeds(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture
    };
    
    // Data is passed to the view
      logger.info('about to render' + viewData.catBreeds);
    logger.debug(viewData.catBreeds);

    // Renders the view with the data
    response.render('dashboard', viewData);
  }
    else response.redirect('/');

   },
  
  
  // Adds a new cat breed
  addCatBreed(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.debug(loggedInUser.id);
    const timestamp = new Date();
    
    
    const newCatBreed = {
      id: uuidv4(),
      breed: request.body.breed,
      name: request.body.name,
      age: request.body.age,
      lifespan: request.body.lifespan,
      size: request.body.size,
      weight: request.body.weight,
      colour: request.body.colour,
      personality: request.body.personality,
      cats: [],
      date: timestamp,
      picture: request.files.picture
    };

    mycollection.addCatBreed(newCatBreed, function() {
    response.redirect("/dashboard");
});
  
    },

  
  deleteCatBreed(request, response) {
    const catBreedId = request.params.id;
    logger.debug(`Removing ${catBreedId} from the shelter`);
    mycollection.removeCatBreed(catBreedId);
    response.redirect("/dashboard");
},

};

export default dashboard;
