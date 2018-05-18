'use strict';

import express from 'express'
// import Location from '../controller/position/location.js'
import missaddress from '../prototype/missaddress.js'
const MissAddress = new missaddress();

const router = express.Router();

// router.get('/location',Location.location);

router.get('/location',MissAddress.getPosition);
// router.post('/locationsearch',MissAddress.searchPosition);
router.post('/locationsuggestion',MissAddress.suggestionPosition);

export default router


