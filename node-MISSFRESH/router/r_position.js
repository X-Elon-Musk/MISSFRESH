'use strict';

import express from 'express'
const router = express.Router();

import missaddress from '../prototype/missaddress.js'
const MissAddress = new missaddress();
import citylist from '../controller/position/city_list.js'
const CityList = new citylist();
import view from '../controller/position/view.js'
const View = new view();




router.get('/location',MissAddress.getPosition);
router.post('/locationsuggestion',MissAddress.suggestionPosition);
router.get('/list',CityList.getCityList);
router.get('/view',View.getView);

export default router


