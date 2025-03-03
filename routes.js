'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();
//import the controllers 
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';


//get routes for controllers 
router.get('/', start.createView);
router.get ('/dashboard', dashboard.createView);
router.get ('/about', about.createView );

router.get('/error', (request, response) => response.status(404).end('Page not found'));


export default router;
