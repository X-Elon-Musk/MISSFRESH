'use strict';

import express from 'express'
import Location from '../controller/position/location.js'

const router = express.Router();

router.get('/location',Location.location);

export default router