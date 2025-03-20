'use strict';

import logger from '../utils/logger.js';
import JsonStore from './functions.js';

const cats = {

  store: new JsonStore('./models/mycollection.json', { catBreeds: [] }),
  collection: 'catBreeds',
  array: 'cats',

  // Function to get all cats from the 'catBreeds' collection
  getAllCats() {
    return this.store.findAll(this.collection);
  },
// Function to get a specific cat by its ID from the 'catBreeds' collection
  getCat(id) {
    // Finds a specific cat where the 'id' matches the provided id
    return this.store.findOneBy(this.collection, (catBreeds => catBreeds.id === id));
},
  
  
  getcatBreed(breed) {
   return this.store.findBy(this.collection,
      (catBreeds => catBreeds.breed === breed)
   );
},
  
 addCat(id, cats) {
    const arrayName = this.array || "cats";  
    this.store.addItem(this.collection, id, this.array, cats); 
},



};

export default cats;
