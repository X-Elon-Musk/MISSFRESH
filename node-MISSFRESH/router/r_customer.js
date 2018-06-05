'use strict';

import express from 'express'
const router = express.Router();



import TelBinding from '../controller/user/tel_binding.js'
// import bindingInfo from '../controller/user/get_binding_info.js'
// const BindingInfo = new bindingInfo();




// router.get('/login-register',MissIndex.getMissIndex);//手机登录获取验证码
router.get('/getBindingInfo',TelBinding.getTelBindingInfo);//绑定手机号获取验证码
router.get('/telBinding',TelBinding.telBinding);//绑定手机号获取验证码

export default router