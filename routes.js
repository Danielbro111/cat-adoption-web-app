'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();
//import the controllers 
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';

import catdetails from './controllers/allCats.js';
import catdisplay from './controllers/catdetails.js';
import search from './controllers/search.js';


//get routes for controllers 
router.get('/', start.createView);
router.get ('/dashboard', dashboard.createView);
router.get ('/about', about.createView );
router.get ('/catdetails', catdetails.createView);
router.get('/search', search.createView);

router.post('/searchcatBreed', search.findResult);
router.post('/catdisplay/:id/addcat',catdisplay.addCat);
router.post('/dashboard/addCatBreed', dashboard.addCatBreed);


router.get('/catdisplay/:id', catdisplay.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found'));

export default router;
