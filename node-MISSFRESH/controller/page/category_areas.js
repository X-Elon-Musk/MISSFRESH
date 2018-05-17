'use strict';

import MissMysql from '../../prototype/missmysql.js'

class CategoryAreas extends MissMysql{
	constructor(){
		super()
		this.getCategoryAreas=this.getCategoryAreas.bind(this);
	}
	async getCategoryAreas(){
		var essentialInfor=await this.missMysql('category_areas', {
			image: 'image'
		},{
			product_index: 0
		});
    	return essentialInfor;
	}
}

export default new CategoryAreas();
