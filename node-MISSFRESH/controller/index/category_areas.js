'use strict';

import MissMysql from '../../prototype/missmysql.js'

class CategoryAreas extends MissMysql{
	constructor(){
		super()
		this.getCategoryAreas=this.getCategoryAreas.bind(this);
	}
	async getCategoryAreas(product_index){
		let result=await this.missMysql('category_areas', {
			image: 'image'
		},{
			product_index: product_index
		});
    	return result;
	}
}

export default new CategoryAreas();
