'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Description extends MissMysql{
	constructor(){
		super()
		this.getDescription=this.getDescription.bind(this);
	}
	async getDescription(product_id){
		let result=await this.missMysql('description', {},{
			product_id: product_id
		});
    	return result;
	}
}

export default new Description();
