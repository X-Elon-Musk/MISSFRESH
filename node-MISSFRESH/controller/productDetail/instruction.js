'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Instruction extends MissMysql{
	constructor(){
		super()
		this.getInstruction=this.getInstruction.bind(this);
	}
	async getInstruction(product_id){
		let result=await this.missMysql('instruction', {
			image: 'image'
		},{
			product_id: product_id
		});
		return result;
	}
}

export default new Instruction();
