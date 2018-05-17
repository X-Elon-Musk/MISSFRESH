'use strict';
import Mysql from '../model/sql-config.js'
var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/';



export default class MissMysql{
	constructor(){
		this.missMysql=this.missMysql.bind(this);
		this.imageRequirment=this.imageRequirment.bind(this);
		this.whereRequirement=this.whereRequirement.bind(this);
		this.priceChange=this.priceChange.bind(this);
	}
	//请求数据通用sql
	async missMysql(datasheet='', imageRequirment={}, whereRequirement={}){
		let sql='select *';
		sql+=await this.imageRequirment(imageRequirment);	
		sql+=' from '+datasheet;
		sql+=await this.whereRequirement(whereRequirement);	
		console.log(sql);
		let result=await mysql(sql);
    	return result;
	}
	//处理图片sql
	async imageRequirment(requirement={}){
		let sql='';
		Object.keys(requirement).forEach(key => {
			sql+=',CONCAT("'+dirname+'",'+requirement[key]+') as '+requirement[key];
		})
		return sql;
	}
	//处理条件sql
	async whereRequirement(requirement={}){
		let sql=' where ';
		Object.keys(requirement).forEach(key => {
			sql+= key+'='+requirement[key]+' and ';
		})
		return sql.slice(0,sql.length-5);
	}
	//价格处理
	async priceChange(price) {
	  	return price.slice(0,price.length-2)+'.'+price.slice(price.length-2,price.length);
	}
}

