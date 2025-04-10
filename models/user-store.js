'use strict';

import logger from '../utils/logger.js';
import JsonStore from './functions.js';



const userStore = {

  store: new JsonStore('./models/user-store.json', { users: [] }),
  collection: 'users',

  getAllUsers() {
    return this.store.findAll(this.collection);
  },
  
  getUserById(id) {
    return this.store.findOneBy(this.collection, (user => user.id === id));
  },
  
  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, (user => user.email === email));
  },
  
  
  async addUser(user, response) {
    try {
      // call uploader function; takes in the playlist object, returns an image url
      user.picture = await this.store.uploader(user);

      // add playlist to JSON file, then return to dashboard controller
      this.store.addCollection(this.collection, user);
      response();
    } 
    // error handling
    catch (error) {
      logger.error("Error processing user:", error);
      response(error);
    }
  },
  

};

export default userStore;
