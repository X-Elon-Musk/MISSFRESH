'use strict';

import express from 'express'
import missindex from '../controller/index/index.js'
const MissIndex = new missindex();
import productdetail from '../controller/productDetail/product_detail.js'
const ProductDetail = new productdetail();

const router = express.Router();

//首页
router.get('/index',MissIndex.getMissIndex);
router.get('/productdetail',ProductDetail.getProductDetail);

export default router