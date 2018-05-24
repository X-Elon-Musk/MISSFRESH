'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Buyer extends MissMysql{
	constructor(){
		super()
		this.getBuyer=this.getBuyer.bind(this);
	}
	async getBuyer(product_index){
		let result=await this.missMysql('buyer', {
			buyerUrl: 'buyerUrl'
		},{
			buyer_id: product_index
		});
    	return result;
	}
}

export default new Buyer();
