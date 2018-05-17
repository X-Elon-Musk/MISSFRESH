'use strict';
/*import Mysql from '../model/sql-config.js'
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

export default new Banner();*/


import MissMysql from '../prototype/missmysql.js'


class Banner extends MissMysql{
	constructor(){
		super()
		this.getBanner=this.getBanner.bind(this);
	}
	async getBanner(){
		var essentialInfor=await this.missMysql('banner', {
			image: 'image'
		},{
			product_index: 0
		});
    	return essentialInfor;
	}
}


export default new Banner();
