'use strict';


import logger from '../utils/logger.js';
import cats from '../models/mycollection.js';
import { v4 as uuidv4 } from 'uuid';

const catdisplay = {
   //creates and renders page 
  createView(request, response) {
    const catId = request.params.id;
    
     //logs when the page is loading
    logger.debug('Cat Id = ' + catId);
    
    //Data is passed to the view 
    const viewData = {
      title: 'Catbreeds',
      singleCat: cats.getCat(catId)
    };
    
//renders the view with the data 
    response.render('catdisplay', viewData) ;
  },
  
  
  addCat(request, response) {
    const catId = request.params.id;
    const catdisplay = cats.getCat(catId);
    const newCat = {
      id: uuidv4(),
      name: request.body.name,
      age: request.body.age,
      colour: request.body.colour,
      weight: request.body.weight,
    };
    cats.addCat(catId, newCat);
    response.redirect('/catdisplay/' + catId);
},

};


export default catdisplay;
