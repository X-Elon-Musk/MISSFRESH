'use strict';
import axios from 'axios'


class MissAddress{
	constructor(){
		this.getIp=this.getIp.bind(this);
		this.tencentkey1 = '5VHBZ-WEEWK-HF7J4-AG2DQ-67WLS-BGBLD';
		this.tencentkey2 = 'WZBBZ-ZYWKJ-62RFO-KLW77-EJUE7-FUBGC';
		this.baidukey1 = 'rETNWqfXjuEf1cCkY6Ylye4TsFRijMyD';
		this.baidukey2 = 'w58WeAT7Iv4gG46i3iUYeHjltC983k98';
		
	}
	//获取定位地址
	async guessPosition(req, res, next){
		let ip=await this.getIp(req);
		// if (process.env.NODE_ENV=='development') {
 	// 		// ip = '180.158.102.141';
 	// 		ip='113.44.129.183';
 	// 	}
 	// 	console.log(ip);
 		/*axios.get('http://apis.map.qq.com/ws/location/v1/ip?ip='+ip+'&key='+this.tencentkey1)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});*/
		console.log('===============');
		console.log(ip);
	}
	//获取ip
	async getIp(req, res, next){
		let ip = req.headers['x-real-ip'] ||  
	        req.headers['x-forwarded-for'] ||  
	        req.socket.remoteAddress || '';  
	    if(ip.split(',').length>0){  
	        ip = ip.split(',')[0];  
	    }  
	    return ip;
	}
}

export default new MissAddress()
