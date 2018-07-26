'use strict';

import MissMysql from '../../prototype/missmysql.js'
import MissMethods from '../../prototype/missMethods.js'
import VipPricePro from './vip_price_pro.js'
let dirname='http://localhost:3390/public/images/';

class Products extends MissMysql{
	constructor(){
		super()
		this.getProducts=this.getProducts.bind(this);
	}
	async getProducts(product_index){
		//商品基本信息
		let result=await this.missSelectMysql('products', {
			image: 'image',
			cart_image: 'cart_image',
			promote_tag: 'promote_tag',
		},{
			product_index: product_index
		});
		//添加价格信息和标签信息
	  	await Promise.all(result.map(async (item)=> {
	  		//没有product_tag，设置为空
	  		item.promote_tag=item.promote_tag===dirname?'':item.promote_tag;
	  		let product_tags=await this.missSelectMysql('product_tags', {},{
	  			product_id: item.id
	  		});
	  		item.product_tags=[];
            item.product_tags=item.product_tags.concat(product_tags);
            let vippricepro=await VipPricePro.getVipPricePro(item.id);
            item.vip_price_pro={};
            item.vip_price_pro=vippricepro;
	  	}));
    	return result;
	}
}

export default new Products();