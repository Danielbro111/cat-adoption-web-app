'use strict';

import logger from "../utils/logger.js";
import mycollection from '../models/mycollection.js';
import { v4 as uuidv4 } from 'uuid';



const dashboard = {
   //creates and renders page 
  createView(request, response) {
    //logs when the page is loading
    logger.info("Dashboard page loading!");
    
    
    addCatBreed(request, response) {
    const newCatBreed = {
      id: uuidv4(),
      breed: request.body.breed,
	    name: request.body.name,
      age: request.body.age,
      Lifespan
      Size
      Weight
      Colour
      songs: [],
    };
    myCollection.addCatBreed(newCatBreed);
    response.redirect('/dashboard');
},

    //Data is passed to the view 
    const viewData = {
      title: "Cat Adoption Center Dashboard",
      catBreeds: mycollection.getAllCats()

    };
    
    //Data is passed to the view 
     logger.debug(viewData.catBreeds);
    
    //renders the view with the data 
    response.render('dashboard', viewData);
  },
  
  

};

export default dashboard;
