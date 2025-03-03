'use strict';

import logger from "../utils/logger.js";
import meetTeam from '../models/meetTeam.js';

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "Cat Adoption Center ",
      team: meetTeam.getTeamInfo()
      
    };
    
    response.render("about", viewData);
  },
};

export default about;