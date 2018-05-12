'use strict';
import Mysql from '../model/sql-config.js'
var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/';

var CategoryAreas=function () {};
CategoryAreas.prototype={
	constructor: CategoryAreas,
	async getCategoryAreas(req, res, next){
		//商品基本信息
		var essentialInfor = await mysql('select *,CONCAT("'+dirname+'",image) as image from category_areas where product_index=0');
    	return essentialInfor;
	},
	

}


export default new CategoryAreas();
