'use strict';

import express from 'express'
import MissIndex from '../controller/page/missindex.js'
const Index = new MissIndex();

const router = express.Router();

//首页
router.get('/index',Index.getMissIndex);

export default router