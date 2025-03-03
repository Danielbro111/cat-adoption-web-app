
'use strict';

import logger from '../utils/logger.js';
import Functions from './functions.js';
 

const meetTheTeam = {
  
  
  store: new Functions('./models/meetTeam.json', {team: [] }), 
  collection: 'team',
  

  getTeamInfo() {
    return this.store.findAll(this.collection);
  },

  
  
};

export default meetTheTeam;
