'use strict';
import Mysql from '../model/sql-config.js'
var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/product/';

var Banner=function () {};
Banner.prototype={
	constructor: Banner,
	async getBanner(req, res, next){
		//商品基本信息
		var essentialInfor = await mysql('select *,CONCAT("'+dirname+'",image) as image from banner where product_index=0');
        return essentialInfor;
	},
	

}

async function dataEach(data) {
  	
}

export default new Banner();
