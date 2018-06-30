import axios from '../config/axios'

import {getStore} from '../config/mUtils'

//获取index数据
export const getDataPageIndexAxios=(product_index) => axios('/page/index', {
    product_index: product_index
});

//获取当前地址
export const getDataPositionAxios=() => axios('/position/location');

//获取配送的类型信息
export const getViewAxios=(type) => axios('/position/view', {
    type: type
});

//刷新当前位置
export const locationRefreshAxios=() => axios('/position/location');

//获得城市列表
export const getCityListAxios=() => axios('/position/list');

//搜索地址推荐
export const suggestionLocationAxios=(keyword, cityName) => axios('/position/locationsuggestion', {
    keyword: keyword,
    cityName: cityName
}, 'post');

//商品搜索
export const suggestionProductsAxios=(name) => axios('/page/device_id', {
    name: name
}, 'post');

//商品详情
export const getDataProductDetailAxios=(product_id, product_index) => axios('/page/productdetail', {
    product_id: product_id,
    product_index: product_index
});

//获取品质认证
export const getSafeDetectionAxios=(product_id) => axios('/page/safedetection', {
    product_id: product_id
});

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

//获取用户收件地址列表
export const getAddressListAxios=user_id => axios('/customer/getaddresslist', {
    user_id: user_id
});

//新增收货地址
export const addAddressAxios=(user_id, address_1, address_2, address_detail, area, city, code, full_address, lat_lng, name, phone_number, province, tag) => axios('/customer/addAddress', {
    user_id,
    address_1,
    address_2,
    address_detail,
    area,
    city,
    code,
    full_address,
    lat_lng,
    name,
    phone_number,
    province,
    tag
}, 'post');

//删除收货地址
export const deleteAddressAxios=id => axios('/customer/deleteAddress', {
    id: id
});