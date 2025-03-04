'use strict';

import logger from '../utils/logger.js';
import catBreeds from '../models/bigcollection.js';

const catlist = {
  createView(request, response) {
       logger.info("Cat page loading!");
    
    
    const viewData = {
      title: 'CatBreeds',
      catBreed: catBreeds. getAllCats()
    };
logger.debug(viewData.catBreed);
    response.render('catlist', viewData);
  },
};

export default catlist;
