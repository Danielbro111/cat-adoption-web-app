
'use strict';

import logger from '../utils/logger.js';
import Functions from './functions.js';
 

const meetTheTeam = {
  
  
  store: new Functions('./models/meetTeam.json', {info: {}}), 
  collection: 'info',
  array: 'featuredCats',

  getTeamInfo() {
    return this.store.findAll(this.collection);
  },

  getFeaturedCats() {
    return this.store.findAll(this.array);
  }
  
};

export default meetTheTeam;
