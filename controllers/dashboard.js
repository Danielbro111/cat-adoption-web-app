'use strict';

import logger from "../utils/logger.js";
import mycollection from '../models/mycollection.js';



const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Cat Adoption Center Dashboard",
      catBreeds: mycollection.getAllPlaylists()

    };
    
    
     logger.debug(viewData.playlists);
    
    
    response.render('dashboard', viewData);
  },
  
  

};

export default dashboard;
