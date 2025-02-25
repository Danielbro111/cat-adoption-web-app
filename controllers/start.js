'use strict';

import logger from "../utils/logger.js";
import functions from "../models/functions.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "CA1 Starter App",
      info: functions.getAppInfo()
    };
    
    response.render('start', viewData);   
  },
};

export default start;
