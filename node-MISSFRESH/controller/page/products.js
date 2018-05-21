'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Products extends MissMysql{
	constructor(){
		super()
		this.getProducts=this.getProducts.bind(this);
	}
	async getProducts(product_index){
		//商品基本信息
		let essentialInfor=await this.missMysql('products', {
			image: 'image'
		},{product_index: product_index});
		//添加价格信息和标签信息
	  	await Promise.all(essentialInfor.map(async (item)=> {
	  		let price_up=await this.missMysql('price_up', {},{
	  			product_id: item.product_id
	  		});
            let price_down=await this.missMysql('price_down', {},{
	  			product_id: item.product_id
	  		});
            let product_tags=await this.missMysql('product_tags', {},{
	  			product_id: item.product_id
	  		});
            item.vip_price_pro={};
            item.product_tags=[];
            item.vip_price_pro.price_up=price_up[0];
            item.vip_price_pro.price_up.price=await this.priceChange(item.vip_price_pro.price_up.price);
            item.vip_price_pro.price_down=price_down[0];
            item.product_tags=item.product_tags.concat(product_tags);
            item.vip_price_pro.price_down.price=await this.priceChange(item.vip_price_pro.price_down.price);
	  	}));
    	return essentialInfor;
	}
}

export default new Products();