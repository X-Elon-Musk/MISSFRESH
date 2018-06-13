'use strict';

import express from 'express'
const router = express.Router();



import TelBinding from '../controller/user/tel_binding.js'
import User from '../controller/user/user.js'
// import bindingInfo from '../controller/user/get_binding_info.js'
// const BindingInfo = new bindingInfo();




router.get('/getUser',User.getUser);//获取用户信息
router.get('/getBindingInfo',TelBinding.getTelBindingInfo);//绑定手机号获取验证码
router.get('/telBinding',TelBinding.telBinding);//绑定手机号获取验证码

export default router