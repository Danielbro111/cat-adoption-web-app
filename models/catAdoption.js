
'use strict';

import logger from '../utils/logger.js';
import Functions from './functions.js';
 

const catAdoption = {
  
  
  store: new Functions('./models/catAdoption.json', {info: {}}), 
  collection: 'info',
  array: 'featuredCats',

  
  // Function to get general cat information from the collection
  getCatInfo() {
    return this.store.findAll(this.collection);
  },

    // Function to get featured cats from the 'featuredCats' array
  getFeaturedCats() {
    return this.store.findAll(this.array);
  }
  
};

export default catAdoption;
