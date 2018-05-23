'use strict';

import MissMysql from '../../prototype/missmysql.js'
let dirname='http://localhost:3390/public/images/';

class Products extends MissMysql{
	constructor(){
		super()
		this.getProducts=this.getProducts.bind(this);
	}
	async getProducts(product_index){
		//商品基本信息
		let essentialInfor=await this.missMysql('products', {
			image: 'image',
			cart_image: 'cart_image',
			promote_tag: 'promote_tag',
		},{product_index: product_index});
		//添加价格信息和标签信息
	  	await Promise.all(essentialInfor.map(async (item)=> {
	  		//没有product_tag，设置为空
	  		item.promote_tag=item.promote_tag===dirname?'':item.promote_tag;
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
            // console.log(this);
            item.vip_price_pro.price_up.price=await this.priceChange(price_up[0].price);
            item.vip_price_pro.price_down=price_down[0];
            item.product_tags=item.product_tags.concat(product_tags);
            item.vip_price_pro.price_down.price=await this.priceChange(price_down[0].price);
	  	}));
    	return essentialInfor;
	}
}

export default new Products();