

'use strict';

import logger from '../utils/logger.js';
import Functions from './functions.js';

const catAdoption = {
  
  
  store: new catAdoption('./models/catAdoption.json', {info : {} }),
   collection: 'info',
  array: 'featuredCats',
  
  
  getCatInfo() {
    return this.store.findAll(this.collection);
  },

  
  };

export default catAdoption;