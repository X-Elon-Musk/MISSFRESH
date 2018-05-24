'use strict';

import MissMysql from '../../prototype/missmysql.js'

class ProductShareInfoV2 extends MissMysql{
	constructor(){
		super()
		this.getProductShareInfoV2=this.getProductShareInfoV2.bind(this);
	}
	async getProductShareInfoV2(product_id){
		let result=await this.missMysql('product_share_info_v2', {
			prodcut_share_bg_img: 'prodcut_share_bg_img',
			product_integarl_icon: 'product_integarl_icon',
			share_bt_bg_img: 'share_bt_bg_img',
			share_product_img: 'share_product_img',
			share_s_p_img: 'share_s_p_img',
			show_share_img: 'show_share_img'
		},{
			product_id: product_id
		});
    	return result;
	}
}

export default new ProductShareInfoV2();
