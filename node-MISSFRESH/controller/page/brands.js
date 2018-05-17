'use strict';

import MissMysql from '../../prototype/missmysql.js'

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
