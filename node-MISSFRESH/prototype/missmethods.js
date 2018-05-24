'use strict';
import MissMysql from './missmysql.js'

class MissMethods extends MissMysql{
	constructor(){
		super()
		this.priceChange=this.priceChange.bind(this);
		this.addAttributes=this.addAttributes.bind(this);
	}
	//价格处理
	async priceChange(price) {
	  	return price.slice(0,price.length-2)+'.'+price.slice(price.length-2,price.length);
	}
	//添加属性
	async addAttributes(object, attribute, parameter=[]){
        Object.keys(attribute).forEach(key => {
			if (parameter) {
        		if (parameter.indexOf(key)>=0) object[key]=attribute[key];	
        	} else{
        		object[key]=attribute[key];
        	}
        })
    }
}

export default new MissMethods();

