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
  
  
  getcatBreed(breed, userid) {
   return this.store.findBy(this.collection,
      (catBreeds => catBreeds.breed.toLowerCase() === breed.toLowerCase() && 
	   catBreeds.userid === userid)
      );
},
  
 addCat(id, cat) {
    this.store.addItem(this.collection, id, this.array, cat);
},


  async  addCatBreed(catBreed, response) {
    try {
      // call uploader function; takes in the playlist object, returns an image url
      catBreed.picture = await this.store.uploader(catBreed);

      // add catBreed to JSON file, then return to dashboard controller
      this.store.addCollection(this.collection, catBreed);
      response();
    } 
    // error handling
    catch (error) {
      logger.error("Error processing catBreed:", error);
      response(error);
    }
  },

  
  removeCat(id, catId) {
    this.store.removeItem(this.collection, id, this.array, catId);
},

  removeCatBreed(id) {
    const catBreed = this.getCat(id);
    this.store.removeCollection(this.collection, catBreed);
},
  
  editCat(id, catId, updatedCat) {
    this.store.editItem(this.collection, id, catId, this.array, updatedCat);
},

  getUserCatBreeds(userid) {
  return this.store.findBy(this.collection, (catBreed => catBreed.userid === userid));
},

};

export default cats;
