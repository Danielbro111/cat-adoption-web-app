'use strict';

import logger from '../utils/logger.js';
import cats from '../models/mycollection.js';

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
    response.render('catdisplay', viewData);
  },
};


export default catdisplay;
