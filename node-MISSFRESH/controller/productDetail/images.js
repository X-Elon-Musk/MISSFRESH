'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Images extends MissMysql{
	constructor(){
		super()
		this.getImages=this.getImages.bind(this);
	}
	async getImages(product_id){
		let sqlresult,result=[];
		sqlresult=await this.missSelectMysql('images', {
			image: 'image'
		},{
			product_id: product_id
		});
		sqlresult.forEach((item) => {
			result=result.concat(item.image);
		})
    	return result;
	}
}

export default new Images();
