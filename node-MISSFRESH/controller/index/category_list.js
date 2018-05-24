'use strict';

import MissMysql from '../../prototype/missmysql.js'

class CategoryList extends MissMysql{
	constructor(){
		super()
		this.getCategoryList=this.getCategoryList.bind(this);
	}
	async getCategoryList(product_index){
		let result=await this.missMysql('category_list', {
			image: 'image',
			category_image: 'category_image'
		},{
			product_index: product_index
		});
    	return result;
	}
}

export default new CategoryList();



