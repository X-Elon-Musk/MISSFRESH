'use strict';
import Mysql from '../model/sql-config.js'
let mysql=Mysql.mysql_;
// import MissMethods from './missMethods.js'
let dirname='http://localhost:3390/public/images/';



export default class MissMysql{
	constructor(){
		// this.missMysql=this.missMysql.bind(this);
		this.missSelectMysql=this.missSelectMysql.bind(this);
		this.imageRequirment=this.imageRequirment.bind(this);
		this.whereRequirement=this.whereRequirement.bind(this);
		this.orderRequirement=this.orderRequirement.bind(this);
		this.missInsertMysql=this.missInsertMysql.bind(this);
	}
	//请求数据通用sql
	async missSelectMysql(datasheet='', imageRequirment={}, whereRequirement={}, orderRequirement={}, fuzzy){
		let sql='select *';
		sql+=await this.imageRequirment(imageRequirment);	
		sql+=' from '+datasheet;
		sql+=await this.whereRequirement(whereRequirement, fuzzy);	
		sql+=await this.orderRequirement(orderRequirement);	
		// console.log(sql);
		// return;
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
	//处理条件sql,fuzzy为模糊查找
	async whereRequirement(requirement={}, fuzzy){
		let sql=' where ';
		Object.keys(requirement).forEach(key => {
			!fuzzy ? sql+= key+'='+requirement[key]+' and ' : sql+= key+' like "%'+requirement[key]+'%"';
		})
		sql= !fuzzy ? sql.substr(0, sql.lastIndexOf(' and ')) : sql;
		return sql;
	}
	//处理顺序sql
	async orderRequirement(requirement={}){
		if (JSON.stringify(requirement)!=="{}") {
			let sql=' order by ';
			Object.keys(requirement).forEach(key => {
				sql+= key+',';
			})
			sql=sql.substr(0, sql.lastIndexOf(','))+' desc';
			return sql;			
		} else{
			return '';
		}
	}
	//插入数据通用sql
	async missInsertMysql(datasheet='', column_value={}){
		let sql='insert into ';
		let column='',value='';
		Object.keys(column_value).forEach(key => {
			column+=key+',';
		})
		column=column.substr(0, column.lastIndexOf(','));
		Object.keys(column_value).forEach(key => {
			if (Object.prototype.toString.call(column_value[key])=='[object String]') {
				value+='"'+column_value[key]+'",';		
			} else{
				value+=column_value[key]+',';
			}
		})
		value=value.substr(0, value.lastIndexOf(','));

		sql+=datasheet+' ('+column+') values ('+value+')';


		// sql+=await this.imageRequirment(imageRequirment);	
		// sql+=' from '+datasheet;
		// sql+=await this.whereRequirement(whereRequirement, fuzzy);	
		// sql+=await this.orderRequirement(orderRequirement);	
		console.log(sql);
		// return;
		let result=await mysql(sql);
    	return result;
	}
}

