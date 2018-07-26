'use strict';

import express from 'express'
const router = express.Router();

import missaddress from '../prototype/missaddress.js'
const MissAddress = new missaddress();
import citylist from '../controller/position/city_list.js'
const CityList = new citylist();
import view from '../controller/position/view.js'
const View = new view();

router.get('/location',MissAddress.getPosition);//刷新当前位置
router.post('/locationsuggestion',MissAddress.suggestionPosition);//搜索地址推荐
router.get('/list',CityList.getCityList);//获得城市列表
router.get('/view',View.getView);//获取配送的类型信息

export default router


