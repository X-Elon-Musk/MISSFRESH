'use strict';

import express from 'express'
// import Location from '../controller/position/location.js'
import MissAddress from '../prototype/missaddress.js'
// const Address = new MissAddress();

const router = express.Router();

// router.get('/location',Location.location);
router.get('/location',MissAddress.guessPosition);

export default router