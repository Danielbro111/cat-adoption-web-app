'use strict';

import logger from "../utils/logger.js";
import functions from "../models/functions.js";
import catAdoption from "../models/catAdoption.js";

const start = {
   //creates and renders page 
  
  createView(request, response) {
    //logs when the page is loading
    logger.info("Start page loading!");
    
    //Data is passed to the view 
    const viewData = {
      title: "CA1 Starter App",
      info: catAdoption.getCatInfo()
    };
     //Data is passed to the view 
    logger.info(viewData.info)
    
    //renders the view with the data 
    response.render('start', viewData);   
  },
};

export default start;
