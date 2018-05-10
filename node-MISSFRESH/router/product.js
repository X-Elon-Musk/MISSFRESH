'use strict';
import Mysql from '../model/sql-config.js'
import Sql_product from '../model/sql-product.js'
import formidable from 'formidable'
import md5 from '../model/md5.js'

var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/product/';

var Product=function () {};
Product.prototype={
	constructor: Product,
	async getProduct(req, res, next){
		var result = await mysql('select *,CONCAT("'+dirname+'",image) as image from products_hot');
	    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	    // console.log(result);
	    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	    // result.forEach(function (item,index,array) {
     //        if (item.image) {
     //            item.image=dirname+item.image;         
     //        }
     //    })
        var products={
        	'products': result
        }
		res.type('application/json');
	    res.jsonp(products);
	}
}
export default new Product();