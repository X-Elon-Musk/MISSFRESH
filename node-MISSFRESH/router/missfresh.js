'use strict';

import Product from './products.js'
import Banner from './banner.js'
import Brands from './brands.js'
import CategoryAreas from './category_areas.js'



var MissFresh=function () {};
MissFresh.prototype={
	constructor: MissFresh,
	async getMissFresh(req, res, next){
		//商品基本信息
		
		var product_list={};
        var products=await Product.getProducts(),
        banner=await Banner.getBanner(),
        brands=await Brands.getBrands(),
        categoryareas=await CategoryAreas.getCategoryAreas();

        product_list.products=products;
        product_list.banner=banner;
        product_list.brands=brands;
        product_list['category_areas']=categoryareas;
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
