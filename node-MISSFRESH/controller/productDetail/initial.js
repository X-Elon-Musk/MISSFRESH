'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Initial extends MissMysql{
	constructor(){
		super()
		this.getInitial=this.getInitial.bind(this);
	}
	async getInitial(product_id){
		let result=await this.missMysql('products', {
			image: 'image',
			cart_image: 'cart_image',
			promote_tag: 'promote_tag',
		},{
			product_id: product_id
		});
    	return result;
	}
}

export default new Initial();
