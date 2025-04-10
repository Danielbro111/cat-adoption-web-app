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
import accounts from './controllers/accounts.js';


//get routes for controllers 
router.get('/start', start.createView);

router.get ('/dashboard', dashboard.createView);
router.get ('/about', about.createView );
router.get ('/catdetails', catdetails.createView);
router.get('/search', search.createView);

router.post('/searchcatBreed', search.findResult);
router.post('/dashboard/addCatBreed', dashboard.addCatBreed);
router.get('/dashboard/deleteCatBreed/:id', dashboard.deleteCatBreed);


router.post('/catdisplay/:id/updatecat/:catid', catdisplay.updateCat);
router.post('/catdisplay/:id/addcat', catdisplay.addCat);
router.get('/catdisplay/:id/removecat/:catid', catdisplay.removeCat);


router.get('/catdisplay/:id', catdisplay.createView);


router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/error', (request, response) => response.status(404).end('Page not found'));

export default router;
