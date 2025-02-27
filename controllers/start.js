'use strict';

import logger from "../utils/logger.js";
import functions from "../models/functions.js";
import catAdoption from "../models/catAdoption.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "CA1 Starter App",
      info: catAdoption.getCatInfo()
    };
    logger.info(viewData.info)
    response.render('start', viewData);   
  },
};

export default start;
