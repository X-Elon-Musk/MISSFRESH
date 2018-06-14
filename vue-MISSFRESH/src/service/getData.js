import axios from '../config/axios'
/*import Axios from '../config/axios'
let axios_=Axios.axios_;
console.log(axios_);
console.log(Axios);*/
import {getStore} from '../config/mUtils'



//获取用户信息
export const getUserAxios=() => axios('/customer/getUser', {
    accessToken: getStore('accessToken')
});

/*
//第二种写法
export const getUser=() => {
    return axios('/customer/getUser', {
        accessToken: getStore('accessToken')
    });
}*/

//ajax获取手机验证码
export const teleCodeAxios=telephone => axios('/customer/getBindingInfo', {
    telephone: telephone
});

//短信登录
export const submitMessageAxios=(telephone, message) => axios('/customer/telBinding', {
    telephone: telephone,
    message: message
});