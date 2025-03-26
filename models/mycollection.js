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
  
  
  getcatBreed(id) {
   return this.store.findBy(this.collection,
      (catBreeds => catBreeds.id === id)
   );
},
  
 addCat(id, cat) {
    console.log("=== Debugging addCat ===");
    console.log("Collection:", this.collection);
    console.log("ID:", id);
    console.log("Array:", this.array);
    console.log("Cat:", cat);

    this.store.addItem(this.collection, id, this.array, cat);
},


addCatBreed(catBreed) {
    this.store.addCollection(this.collection, catBreed);
},


  
  removeCat(id, catId) {
    this.store.removeItem(this.collection, id, this.array, catId);
},

  removeCatBreed(id) {
    const catBreed = this.getcatBreed(id);
    this.store.removeCollection(this.collection, catBreed);
},

};

export default cats;
