'use strict';

import logger from "../utils/logger.js";
import functions from "../models/functions.js";
import catAdoption from "../models/catAdoption.js";
import accounts from './accounts.js';


const start = {
   //creates and renders page 
  
  createView(request, response) {
    //logs when the page is loading
     const loggedInUser = accounts.getCurrentUser(request);
    logger.info("Start page loading!");
    
    //Data is passed to the view 
    if (loggedInUser) {
    const viewData = {
      title: "CA1 Starter App",
      info: catAdoption.getCatInfo(),
       fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
     //Data is passed to the view 
    logger.info(viewData.info)
    
    //renders the view with the data 
    response.render('start', viewData);   
   }
    else response.redirect('/');    
},

};


export default start;
