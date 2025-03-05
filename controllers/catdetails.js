'use strict';

import logger from '../utils/logger.js';
import cats from '../models/mycollection.js';

const catdisplay = {
  createView(request, response) {
    const catId = request.params.id;
    logger.debug('Playlist id = ' + playlistId);
    
    const viewData = {
      title: 'Playlist',
      singlePlaylist: cats.getPlaylist(playlistId)
    };

    response.render('playlist', viewData);
  },
};

export default catdisplay;
