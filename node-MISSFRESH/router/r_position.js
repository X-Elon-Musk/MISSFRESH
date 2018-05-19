'use strict';

import express from 'express'
// import Location from '../controller/position/location.js'
import missaddress from '../prototype/missaddress.js'
const MissAddress = new missaddress();
import citylist from '../controller/position/city_list.js'
const CityList = new citylist();

const router = express.Router();

// router.get('/location',Location.location);

router.get('/location',MissAddress.getPosition);
// router.post('/locationsearch',MissAddress.searchPosition);
router.post('/locationsuggestion',MissAddress.suggestionPosition);
router.get('/list',CityList.getCityList);

export default router


