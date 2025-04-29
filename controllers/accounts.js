'use strict';

import logger from '../utils/logger.js';
import userStore from '../models/user-store.js';
import { v4 as uuidv4 } from 'uuid';
import cats from '../models/mycollection.js';
import JsonStore from "../models/functions.js";




//create an accounts object
const accounts = {

  //index function to render index page
  index(request, response) {
    
    
    
    const catBreed = cats.getAllCats();
    
    let numBreeds = catBreed.length; 
    
    let numCats = 0;
    
    for (let item of catBreed) {
        numCats += item.cats.length;
      }
    
    let Users =  userStore.getAllUsers()
     
      let numUsers = Users.length;
    
    
    
    
    
    const viewData = {
      title: 'Login or Signup',
      displayNumBreeds: numBreeds,
      displayNumCats: numCats,
      numUsers : numUsers
    };
    response.render('index', viewData);
  },
  
  //login function to render login page
  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },
  
  //logout function to render logout page
  logout(request, response) {
    response.cookie('catdisplay', '');
    response.redirect('/');
  },
  
 //signup function to render signup page
  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },
  
 //register function to render the registration page for adding a new user
  register(request, response) {
    const user = request.body;
    user.id = uuidv4();
    user.picture = request.files.picture,
          logger.info('catdisplay' + user.email);
    
    userStore.addUser(user, function() {
        response.cookie('catdisplay', user.email);
      logger.info('logging in' + user.email);
      response.redirect('/start');
    });

  },
  
  //authenticate function to check user credentials and either render the login page again or the start page.
authenticate(request, response) {
    const user = userStore.getUserByEmail(request.body.email);
    const password = request.body.password;
    if (user  && user.password === password) {
      response.cookie('catdisplay', user.email);
      logger.info('logging in' + user.email);
      response.redirect('/start');
    } else {
      response.redirect('/login');
    }
  },
  
 //utility function getCurrentUser to check who is currently logged in
  getCurrentUser (request) {
    const userEmail = request.cookies.catdisplay;
    return userStore.getUserByEmail(userEmail);
  }
}

export default accounts;
