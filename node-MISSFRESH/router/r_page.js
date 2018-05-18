'use strict';

import express from 'express'
import pageindex from '../controller/page/page_index.js'
const PageIndex = new pageindex();

const router = express.Router();

//首页
router.get('/index',PageIndex.getPage_Index);

export default router