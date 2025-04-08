'use strict';

import logger from "../utils/logger.js";
import meetTeam from '../models/meetTeam.js';
import accounts from './accounts.js';

const about = {
   // Creates and renders the About page
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    
    // Log that the page is loading
    logger.info("About page loading!");

    // If the user is not logged in, redirect to the homepage
    if (!loggedInUser) {
      return response.redirect('/');
    }

    // Data passed to the view for rendering
    const viewData = {
      title: "Cat Adoption Center",
      team: meetTeam.getTeamInfo(),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
    };
    
    // Log team data for debugging (be cautious with logging too much user data)
    logger.debug('Team info:', viewData.team);

    // Render the view with the data
    response.render('about', viewData);
  },
};

export default about;
