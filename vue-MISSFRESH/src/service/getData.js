import axios from '../config/axios'
import {getStore} from '../config/mUtils'


//获取用户信息
export const getUser=()=>axios('/customer/getUser', {
    accessToken: getStore('accessToken')
});
