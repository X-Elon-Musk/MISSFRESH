'use strict';

import Product from './products.js'
import Banner from './banner.js'



var MissFresh=function () {};
MissFresh.prototype={
	constructor: MissFresh,
	async getMissFresh(req, res, next){
		//商品基本信息
		
		var product_list={};
        var products=await Product.getProducts(),
        banner=await Banner.getBanner();

        product_list.products=products;
        product_list.banner=banner;
        // console.log(products,banner);
        var missfresh={
        	'product_list': product_list
        }
		res.type('application/json');
	    res.jsonp(missfresh);
	},
	

}

async function dataEach(data) {
  	
}

export default new MissFresh();
