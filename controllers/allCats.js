'use strict';

import logger from "../utils/logger.js";
import catDetails from '../models/bigcollection.js';

const catdetails  = {
  createView(request, response) {
    logger.info("Cat page loading!");
    
    const viewData = {
      title: "Our Feline Friends  ",
      BigCats: catDetails.getAllCats() 
      
    };
    logger.debug(viewData.BigCats);
    
    response.render("catdetails", viewData);
  },
};

export default catdetails;