'use strict';

import logger from "../utils/logger.js";
import meetTeam from '../models/meetTeam.js';

const about = {
   //creates and renders page 
  createView(request, response) {
     //logs when the page is loading
    logger.info("About page loading!");
    
    
    //Data is passed to the view 
    const viewData = {
      title: "Cat Adoption Center ",
      team: meetTeam.getTeamInfo()
      
    };
    //logs the data for debugging reasons 
    logger.debug(viewData.team);
    
    //renders the view with the data 
    response.render("about", viewData);
  },
};

export default about;