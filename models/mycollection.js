'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const catadoption = {

  store: new JsonStore('./models/mycollection.json', { catBreeds: [] }),
  collection: 'catBreeds',
  array: 'cats',

  getAllCats() {
    return this.store.findAll(this.collection);
  },

  getCat(id) {
    return this.store.findOneBy(this.collection, (catBreeds => catBreeds.id === id));
},

};

export default catadoption;
