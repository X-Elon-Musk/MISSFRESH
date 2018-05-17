'use strict';
/*import Mysql from '../model/sql-config.js'
var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/';

var Brands=function () {};
Brands.prototype={
	constructor: Brands,
	async getBrands(req, res, next){
		//商品基本信息
		var essentialInfor = await mysql('select *,CONCAT("'+dirname+'",image) as image from brands where product_index=0');
    return essentialInfor;
	},
	

}

async function dataEach(data) {
  	
}

export default new Brands();*/


import MissMysql from '../prototype/missmysql.js'


class Brands extends MissMysql{
	constructor(){
		super()
		this.getBrands=this.getBrands.bind(this);
	}
	async getBrands(){
		var essentialInfor=await this.missMysql('brands', {
			image: 'image'
		},{
			product_index: 0
		});
    	return essentialInfor;
	}
}


export default new Brands();
