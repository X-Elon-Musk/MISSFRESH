'use strict';
import Mysql from '../model/sql-config.js'
var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/';



export default class MissMysql{
	constructor(){
		// this.hasImageSql=this.hasImageSql.bind(this);
		// this.allSql=this.allSql.bind(this);
		this.missMysql=this.missMysql.bind(this);
		this.imageRequirment=this.imageRequirment.bind(this);
		this.whereRequirement=this.whereRequirement.bind(this);
		this.priceChange=this.priceChange.bind(this);
	}
	/*async hasImageSql(datasheet='', product_index=0, column_image_number=0, column_image_name=''){
		let sql;
		if (column_image_number) {
			sql='select *,CONCAT("'+dirname+'",image) as image,CONCAT("'+dirname+'",'+column_image_name+') as '+column_image_name+' from '+datasheet+' where product_index='+product_index;			
		} else{
			sql='select *,CONCAT("'+dirname+'",image) as image from '+datasheet+' where product_index='+product_index;			
		}
		
		let result=await mysql(sql);
    	return result;
	}*/

	/*async hasImageSql(datasheet='', whereRequirement={}, imageRequirment={}){
		'select *,CONCAT("/public/images/",image) as image,CONCAT("/public/images/",category_image) as category_image from category_list where product_index=0'
		let sql;
		if (imageRequirment) {
			sql='select *';
			// Object.keys(requirement).forEach(key => {
			// 	sql+= ',CONCAT("'+dirname+'",'+requirement[key]+') as '+requirement[key];
			// })
			sql+=await this.imageRequirment(imageRequirment);	
			sql+=' from '+datasheet;
			sql+=await this.whereRequirement(whereRequirement);	
			// sql+=' from '+datasheet+' where product_index='+product_index;
		} else{
			sql='select *';
			sql+=' from '+datasheet;
			sql+=await this.whereRequirement(whereRequirement);			
		}
		
		let result=await mysql(sql);
    	return result;
	}*/
	/*async allSql(datasheet='', column='', column_value=''){
		let sql;
		if (column) {
			sql='select * from '+datasheet+' where '+column+'='+column_value;			
		} else{
			sql='select * from '+datasheet;			
		}
		
		let result=await mysql(sql);
    	return result;
	}*/
	async missMysql(datasheet='', imageRequirment={}, whereRequirement={}){
		// let sql;
		/*if (requirement) {
			sql='select * from '+datasheet;
			// Object.keys(requirement).forEach(key => {
			// 	sql+= key+'='+requirement[key]+' and ';
			// })
			// sql=sql.slice(0,sql.length-5);		
			sql=await this.whereRequirement(requirement);	
		} else{
			sql='select * from '+datasheet;			
		}*/
		
		/*Object.keys(requirement).forEach(key => {
			sql+= ',CONCAT("'+dirname+'",'+requirement[key]+') as '+requirement[key];
		})*/
		let sql='select *';
		sql+=await this.imageRequirment(imageRequirment);	
		sql+=' from '+datasheet;
		sql+=await this.whereRequirement(whereRequirement);	
		console.log(sql);
		let result=await mysql(sql);
    	return result;
	}
	async imageRequirment(requirement={}){
		let sql='';
		Object.keys(requirement).forEach(key => {
			sql+=',CONCAT("'+dirname+'",'+requirement[key]+') as '+requirement[key];
		})
		return sql;
	}
	async whereRequirement(requirement={}){
		let sql=' where ';
		Object.keys(requirement).forEach(key => {
			sql+= key+'='+requirement[key]+' and ';
		})
		return sql.slice(0,sql.length-5);
	}
	async priceChange(price) {
	  	// price=price.slice(0,price.length-2)+'.'+price.slice(price.length-2,price.length);
	  	// return price;
	  	return price.slice(0,price.length-2)+'.'+price.slice(price.length-2,price.length);
	}
}

