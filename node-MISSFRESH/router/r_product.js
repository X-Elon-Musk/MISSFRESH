'use strict';

import express from 'express'
import missindex from '../controller/index/index.js'
const MissIndex = new missindex();
import productdetail from '../controller/productdetail/product_detail.js'
const ProductDetail = new productdetail();
import safedetection from '../controller/safedetection/safe_detection.js'
const SafeDetection = new safedetection();
import productsearch from '../controller/productsearch/product_search.js'
const ProductSearch = new productsearch();

const router = express.Router();


router.get('/index',MissIndex.getMissIndex);//首页
router.get('/productdetail',ProductDetail.getProductDetail);//商品详情
router.get('/safedetection',SafeDetection.getSafeDetection);//安全检测
router.post('/device_id',ProductSearch.getProductSearch);//商品搜索

export default router