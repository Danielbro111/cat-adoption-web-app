'use strict';

import logger from "../utils/logger.js";
import catDetails from '../models/bigcollection.js';
import accounts from './accounts.js';


const catdetails  = {
  //creates and renders page 
  createView(request, response) {
     const loggedInUser = accounts.getCurrentUser(request);
    //logs when the page is loading
    logger.info("Cat page loading!");
    
    //Data is passed to the view 
    const viewData = {
      title: "Our Feline Friends  ",
      BigCats: catDetails.getAllCats(),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture
      
      
    };
     //logs the data for debugging reasons 
    logger.debug(viewData.BigCats);
    
    //renders the view with the data 
    response.render("catdetails", viewData);
  },
};

export default catdetails;