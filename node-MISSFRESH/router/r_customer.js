'use strict';

import express from 'express'
const router = express.Router();


import User from '../controller/user/user.js'
import TelBinding from '../controller/user/tel_binding.js'
import Address from '../controller/user/address.js'

// import bindingInfo from '../controller/user/get_binding_info.js'
// const BindingInfo = new bindingInfo();




router.get('/getUser',User.getUser);//获取用户信息
router.get('/getBindingInfo',TelBinding.getTelBindingInfo);//获取验证码
router.get('/telBinding',TelBinding.telBinding);//绑定手机号
router.get('/getaddresslist',Address.getaddresslist);//获取用户收件地址列表

export default router