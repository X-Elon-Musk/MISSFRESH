'use strict';
import Mysql from '../model/sql-config.js'
import Sql_product from '../model/sql-product.js'
import formidable from 'formidable'
import md5 from '../model/md5.js'

var mysql=Mysql.mysql_;


var Location=function () {};
Location.prototype={
	constructor: Location,
	async sql(req, res, next){
		var result = await mysql(Sql_product.selectAll());
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	    console.log(result);
	    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
		res.type('application/json');
	    res.jsonp(result);
	}
}
export default new Location();