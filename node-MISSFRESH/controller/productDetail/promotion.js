'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Promotion extends MissMysql{
	constructor(){
		super()
		this.getPromotion=this.getPromotion.bind(this);
	}
	async getPromotion(product_id){
		let sqlresult,result=[];
		sqlresult=await this.missMysql('promotion', {},{
			product_id: product_id
		});
		sqlresult.forEach((item) => {
			result=result.concat(item.text);
		})
    	return result;
	}
}

export default new Promotion();
