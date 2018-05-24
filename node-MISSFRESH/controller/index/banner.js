'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Banner extends MissMysql{
	constructor(){
		super()
		this.getBanner=this.getBanner.bind(this);
	}
	async getBanner(product_index){
		let result=await this.missMysql('banner', {
			image: 'image'
		},{
			product_index: product_index
		});
    	return result;
	}
}

export default new Banner();
