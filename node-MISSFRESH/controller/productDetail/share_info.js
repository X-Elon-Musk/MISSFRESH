'use strict';

import MissMysql from '../../prototype/missmysql.js'

class ShareInfo extends MissMysql{
	constructor(){
		super()
		this.getShareInfo=this.getShareInfo.bind(this);
	}
	async getShareInfo(product_id){
		let result=await this.missMysql('share_info', {
			image_url: 'image_url'
		},{
			product_id: product_id
		});
    	return result;
	}
}

export default new ShareInfo();
