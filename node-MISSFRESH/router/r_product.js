'use strict';

import express from 'express'
import missindex from '../controller/index/index.js'
const MissIndex = new missindex();
import productdetail from '../controller/productDetail/product_detail.js'
const ProductDetail = new productdetail();
import safedetection from '../controller/safedetection/safe_detection.js'
const SafeDetection = new safedetection();

const router = express.Router();

//首页
router.get('/index',MissIndex.getMissIndex);
router.get('/productdetail',ProductDetail.getProductDetail);
router.get('/safedetection',SafeDetection.getSafeDetection);

export default router