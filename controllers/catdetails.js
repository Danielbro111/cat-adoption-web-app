'use strict';

import logger from '../utils/logger.js';
import cats from '../models/mycollection.js';

const catdisplay = {
  createView(request, response) {
    const catId = request.params.id;
    logger.debug('Cat Id = ' + catId);
    
    const viewData = {
      title: 'Catbreeds',
      singleCat: cats.getCat(catId)
    };

    response.render('catdisplay', viewData);
  },
};


export default catdisplay;
