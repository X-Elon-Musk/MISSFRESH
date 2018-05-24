'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Buyer extends MissMysql{
	constructor(){
		super()
		this.getBuyer=this.getBuyer.bind(this);
	}
	async getBuyer(product_index){
		var essentialInfor=await this.missMysql('buyer', {
			image: 'image'
		},{
			product_index: product_index
		});
    	return essentialInfor;
	}
}

export default new Buyer();
