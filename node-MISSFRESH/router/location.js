'use strict';
import Mysql from '../model/sql-config.js'
import Sql_product from '../model/sql-product.js'
import formidable from 'formidable'
import md5 from '../model/md5.js'

var mysql=Mysql.mysql_;


/*var Location=function () {};
Location.prototype={
	constructor: Location,
	async location(req, res, next){
		// var result = await mysql(Sql_product.selectAll());
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	    console.log('result');
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
		// res.type('application/json');
	    // res.jsonp(result);
	    await con();
	    res.send('result');
	},
	async con(req, res, next){
		// var result = await mysql(Sql_product.selectAll());
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	    console.log('result1');
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
		// res.type('application/json');
	    // res.jsonp(result);
	    res.send('result1');
	}
}
export default new Location();*/

 class Location{
	constructor(){
		this.conss=this.conss.bind(this);
		this.location=this.location.bind(this);
	}
	async location(req, res, next){
		// var result = await mysql(Sql_product.selectAll());
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	    console.log('result');
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
		// res.type('application/json');
	    // res.jsonp(result);
	    await this.conss();
	    res.send('result');
	}
	async conss(req, res, next){
		// var result = await mysql(Sql_product.selectAll());
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	    console.log('result1');
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
		// res.type('application/json');
	    // res.jsonp(result);
	    // res.send('result1');
	}
}

export default new Location()