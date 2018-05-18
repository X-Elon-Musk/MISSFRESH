'use strict';
import axios from 'axios'


export default class MissAddress{
	constructor(){
		this.guessPosition=this.guessPosition.bind(this);
		this.positionIp=this.positionIp.bind(this);
		this.positionInfo=this.positionInfo.bind(this);
		this.tencentkey = '5VHBZ-WEEWK-HF7J4-AG2DQ-67WLS-BGBLD';
	}
	//获取定位地址
	async guessPosition(req, res, next){
		let ip=await this.positionIp(req);
		if (process.env.NODE_ENV=='development') {
 			// ip = '61.148.16.170';
 			ip='113.44.129.183';
 		}
 		let data=await this.positionInfo(ip,this.tencentkey);
		res.send(data);
	}
	//获取ip
	async positionIp(req, res, next){
		let ip = req.headers['x-real-ip'] ||  
	        req.headers['x-forwarded-for'] ||  
	        req.socket.remoteAddress || '';  
	    if(ip.split(',').length>0){  
	        ip = ip.split(',')[0];  
	    }  
	    return ip;
	}
	async positionInfo(ip,key){
		let data=await new Promise((resolve, reject) =>{
			axios.get('http://apis.map.qq.com/ws/location/v1/ip?ip='+ip+'&key='+key)
			.then(function (response) {
				if (response.data.status==0) {
					resolve(response.data.result)			
				}
			})
			.catch(function (error) {
				reject(error)
			});
	    })
	    return data;
	}
}

// export default new MissAddress()
