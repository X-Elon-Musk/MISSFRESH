'use strict';

import MissMysql from '../../prototype/missmysql.js'
import MissMethods from '../../prototype/missMethods.js'

class VipPricePro extends MissMysql{
	constructor(){
		super()
		this.getVipPricePro=this.getVipPricePro.bind(this);
	}
	async getVipPricePro(product_id){
		let result={};
		let price_up=await this.missSelectMysql('price_up', {},{
  			product_id: product_id
  		});
        let price_down=await this.missSelectMysql('price_down', {},{
  			product_id: product_id
  		});
  		price_up[0].price=await MissMethods.priceChange(price_up[0].price);
  		price_down[0].price=await MissMethods.priceChange(price_down[0].price);
        result.price_up=price_up[0];
        result.price_down=price_down[0];
    	return result;
	}
}

export default new VipPricePro();
