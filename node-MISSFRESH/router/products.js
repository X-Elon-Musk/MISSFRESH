'use strict';

/*import Mysql from '../model/sql-config.js'
import Sql_product from '../model/sql-product.js'
import formidable from 'formidable'
import md5 from '../model/md5.js'

var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/product/';

var Product=function () {};
Product.prototype={
	constructor: Product,
	async getProducts(req, res, next){
		//商品基本信息
		var essentialInfor = await mysql('select *,CONCAT("'+dirname+'",image) as image from products');
		//添加价格信息和标签信息
	  	await Promise.all(essentialInfor.map(async function(item) {
	  		var price_up = await mysql('select * from price_up where product_id='+item.product_id);
            var price_down = await mysql('select * from price_down where product_id='+item.product_id);
            var product_tags = await mysql('select * from product_tags where product_id='+item.product_id);
            item.vip_price_pro={};
            item.product_tags=[];
            item.vip_price_pro.price_up=price_up[0];
            item.vip_price_pro.price_up.price=priceChange(item.vip_price_pro.price_up.price);
            item.vip_price_pro.price_down=price_down[0];
            item.product_tags=item.product_tags.concat(product_tags);
            item.vip_price_pro.price_down.price=priceChange(item.vip_price_pro.price_down.price);
	  	}));
        return essentialInfor;
	},
	

}

async function dataEach(data) {
  	
}

function priceChange(price) {
  	price=price.slice(0,2)+'.'+price.slice(2,price.length);
  	return price;
}
export default new Product();*/




import MissMysql from '../prototype/missmysql.js'


class Products extends MissMysql{
	constructor(){
		super()
		this.getProducts=this.getProducts.bind(this);
	}
	async getProducts(){
		//商品基本信息
		var essentialInfor=await this.missMysql('products', {
			image: 'image'
		},{});
		//添加价格信息和标签信息
	  	await Promise.all(essentialInfor.map(async (item)=> {
	  		var price_up=await this.missMysql('price_up', {},{
	  			product_id: item.product_id
	  		});
            var price_down=await this.missMysql('price_down', {},{
	  			product_id: item.product_id
	  		});
            var product_tags=await this.missMysql('product_tags', {},{
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