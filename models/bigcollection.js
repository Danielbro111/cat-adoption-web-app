'use strict';

import logger from '../utils/logger.js';
import JsonStore from './functions.js';

const cats = {

  store: new JsonStore('./models/bigcollection.json', { catBreeds: [] }),
  collection: 'catBreeds',
  array: 'cats',

  getAllCats() {
    return this.store.findAll(this.collection);
  },

  getCat(id) {
    return this.store.findOneBy(this.collection, (catBreeds => catBreeds.id === id));
},

};

export default cats;
