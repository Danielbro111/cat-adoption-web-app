
'use strict';

import logger from '../utils/logger.js';
import Functions from './functions.js';
 

const meetTheTeam = {
  
  
  store: new Functions('./models/meetTeam.json', {teaminfo: {}}), 
  collection: 'teaminfo',
  array: 'team',

  getTeamInfo() {
    return this.store.findAll(this.collection);
  },

  
  
};

export default meetTheTeam;
