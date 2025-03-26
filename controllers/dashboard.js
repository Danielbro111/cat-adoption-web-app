'use strict';

import logger from "../utils/logger.js";
import mycollection from '../models/mycollection.js';
import { v4 as uuidv4 } from 'uuid';

const dashboard = {
  // Creates and renders page
  createView(request, response) {
    // Logs when the page is loading
    logger.info("Dashboard page loading!");

    // Data is passed to the view
    const viewData = {
      title: "Cat Adoption Center Dashboard",
      catBreeds: mycollection.getAllCats()
    };
    
    // Data is passed to the view
    logger.debug(viewData.catBreeds);

    // Renders the view with the data
    response.render('dashboard', viewData);
  },

  // Adds a new cat breed
  addCatBreed(request, response) {
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
    };

    mycollection.addCatBreed(newCatBreed);
    response.redirect('/dashboard');
  }
};

export default dashboard;
