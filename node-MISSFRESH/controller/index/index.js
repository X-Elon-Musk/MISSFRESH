'use strict';

import CategoryList from './category_list.js'
import Product from './products.js'
import Banner from './banner.js'
import Brands from './brands.js'
import CategoryAreas from './category_areas.js'


export default class MissIndex{
    constructor(){
        this.getMissIndex=this.getMissIndex.bind(this);
    }
    async getMissIndex(req, res, next){
        let product_index=parseInt(req.query.product_index);

        let product_list,missindex;
        let products=await Product.getProducts(product_index),
        banner=await Banner.getBanner(product_index);
        if (req.query.product_index==0) {
            let brands=await Brands.getBrands(product_index),
            category_areas=await CategoryAreas.getCategoryAreas(product_index),
            category_list=await CategoryList.getCategoryList(product_index); 
            product_list={
                'banner': banner,
                'brands': brands,
                'category_areas': category_areas,
                'is_vip': 1,
                'member_level': 1,
                'products': products,
                'show_lines': 1,
                'station_code': '',
                'type': 1,
                'wx_app_new_img': '',
            }   
            missindex={
                'banner_bg_img': '',
                'category_list': category_list,
                'code': 0,
                'default_category': 'hb-newsy',
                'event': {
                    'group_purchase_hint': '赚80元'
                },
                'first_page_addr_text': '本城市支持会员1小时达，选择详细地址完成匹配',
                'header_tip': '',
                'img_url': 'https://j-image.missfresh.cn/img_20161108170905880.png',
                'is_chrome': 0,
                'product_list': product_list
            }   
        } else{
            product_list={
                'banner': banner,
                'products': products,
                'banner_bg_img': "",
                'is_vip': 1,
                'member_level': 1
            }   
            missindex={
                'product_list': product_list
            }  
        }
        




            
        /*var product_list={};
        var products=await Product.getProducts(),
        banner=await Banner.getBanner(),
        brands=await Brands.getBrands(),
        category_areas=await CategoryAreas.getCategoryAreas();

        var product_list={
            'banner': banner,
            'brands': brands,
            'category_areas': category_areas,
            'is_vip': 1,
            'member_level': 1,
            'products': products,
            'show_lines': 1,
            'station_code': '',
            'type': 1,
            'wx_app_new_img': '',
        }
        var missindex={
            'banner_bg_img': '',
            'category_list': category_list,
            'code': 0,
            'default_category': 'hb-newsy',
            'event': {
                'group_purchase_hint': '赚80元'
            },
            'first_page_addr_text': '本城市支持会员1小时达，选择详细地址完成匹配',
            'header_tip': '',
            'img_url': 'https://j-image.missfresh.cn/img_20161108170905880.png',
            'is_chrome': 0,
            'product_list': product_list
        }*/

        res.type('application/json');
        res.jsonp(missindex);
    }
}
