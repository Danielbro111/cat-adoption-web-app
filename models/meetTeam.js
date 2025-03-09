
'use strict';

import logger from '../utils/logger.js';
import Functions from './functions.js';
 

const meetTheTeam = {
  
  
  store: new Functions('./models/meetTeam.json', {team: [] }), 
  collection: 'team',
  
// Function to get team information from the 'team' collection
  getTeamInfo() {
    // Fetches data from the 'team' collection
    return this.store.findAll(this.collection);
  },

  
  
};

export default meetTheTeam;
