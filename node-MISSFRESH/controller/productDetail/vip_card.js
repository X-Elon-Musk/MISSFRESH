'use strict';

import MissMysql from '../../prototype/missmysql.js'

class VipCard extends MissMysql{
	constructor(){
		super()
		this.getVipCard=this.getVipCard.bind(this);
	}
	async getVipCard(product_id){
		let result=await this.missSelectMysql('vip_card', {
			icon_img: 'icon_img'
		},{
			product_id: product_id
		});
    	return result;
	}
}

export default new VipCard();
