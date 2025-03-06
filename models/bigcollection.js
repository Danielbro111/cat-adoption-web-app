'use strict';

import logger from '../utils/logger.js';
import JsonStore from './functions.js';

const cats = {

  store: new JsonStore('./models/bigcollection.json', { BigCats: [] }),
  collection: 'BigCats',
  array: 'cats',

  getAllCats() {
    return this.store.findAll(this.collection);
  },

  

};

export default cats;
