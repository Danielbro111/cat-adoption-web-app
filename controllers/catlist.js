'use strict';

import logger from '../utils/logger.js';
import catBreeds from '../models/mycollection.js';

const catlist = {
  createView(request, response) {
    const catBreedId = request.params.id;
    logger.debug('CatBreed ID = ' + catBreedId);
    
    const viewData = {
      title: 'CatBreeds',
      catBreed: catBreeds. getCat(catBreedId)
    };

    response.render('catlist', viewData);
  },
};

export default catlist;
