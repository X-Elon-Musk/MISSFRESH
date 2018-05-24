'use strict';

import MissMysql from '../../prototype/missmysql.js'

class ProductFingerprints extends MissMysql{
	constructor(){
		super()
		this.getProductFingerprints=this.getProductFingerprints.bind(this);
	}
	async getProductFingerprints(product_id){
		let result=await this.missMysql('productFingerprints', {
			picUrl: 'picUrl',
			securityTagUrl: 'securityTagUrl',
			securityUnselectedTagUrl: 'securityUnselectedTagUrl'
		},{
			product_id: product_id
		});
    	return result;
	}
}

export default new ProductFingerprints();
