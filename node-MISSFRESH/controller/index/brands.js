'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Brands extends MissMysql{
	constructor(){
		super()
		this.getBrands=this.getBrands.bind(this);
	}
	async getBrands(product_index){
		let result=await this.missMysql('brands', {
			image: 'image'
		},{
			product_index: product_index
		});
    	return result;
	}
}

export default new Brands();
