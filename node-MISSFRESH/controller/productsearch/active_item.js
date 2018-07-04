'use strict';

import MissMysql from '../../prototype/missmysql.js'

class ActiveItem extends MissMysql{
	constructor(){
		super()
		this.getActiveItem=this.getActiveItem.bind(this);
	}
	async getActiveItem(name){
		let sqlresult,result=[];
		sqlresult=await this.missSelectMysql('products', {}, {
			name: name
		}, {}, true);
		sqlresult.forEach((item) => {
			let obj={
				product_id: item.product_id,
				product_index: item.product_index,
				displayName: item.name,
                nationwide: item.nationwide,
                score: 551.9273071289062,
                sku: item.sku,
                stock: item.stock
			}
			result=result.concat(obj);
		})
		console.log(result);
    	return result;
	}
}

export default new ActiveItem();
