'use strict';

import MissMethods from '../../prototype/missMethods.js'

import ActiveItem from './active_item.js'

export default class ProductSearch{
    constructor(){
        this.getProductSearch=this.getProductSearch.bind(this);
    }
    async getProductSearch(req, res, next){
        // console.log(req.query.product_id);
        // return;
        // let product_id=parseInt(req.query.product_id);
        let query='';
        req.on("data",(chuck)=>{
            query+=chuck
        })
        query=await new Promise((resolve, reject) =>{
            req.on("end",()=>{
                resolve(query)
            })
        })
        // console.log('==========');
        // console.log(query);
        // console.log(query);
        // console.log('==========');
        // return;
        let name = JSON.parse(query).name;
        let activeitem=await ActiveItem.getActiveItem(name);
        let productsearch={
            code: 0,
            data: [{
                    'active_item': [].concat(activeitem),      
                    'inactive_item': [],
                    'trans_title': "以下为次日达商品",
                    'trans_type': "nextday",
                    'trans_type_image': "https://j-image.missfresh.cn/img_20170228112712281.png",
                }],
            msg: "成功",
            success: true
        }  
        res.type('application/json');
        res.jsonp(productsearch);
    }
}
