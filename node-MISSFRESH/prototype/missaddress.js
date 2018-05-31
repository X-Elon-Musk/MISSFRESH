'use strict';
import axios from 'axios'


export default class MissAddress{
	constructor(){
		this.getPosition=this.getPosition.bind(this);
		this.getPositionIp=this.getPositionIp.bind(this);
		this.getPositionAxios=this.getPositionAxios.bind(this);
		this.suggestionPosition=this.suggestionPosition.bind(this);
		this.suggestionPositionAxios=this.suggestionPositionAxios.bind(this);
		this.analysisOptions=this.analysisOptions.bind(this);
		this.tencentkey = '5VHBZ-WEEWK-HF7J4-AG2DQ-67WLS-BGBLD';
	}
	//获取当前ip对应地址
	async getPosition(req, res, next){
		let ip=await this.getPositionIp(req);
		if (process.env.NODE_ENV=='development') {
 			// ip = '61.148.16.170';
 			ip='113.44.129.183';
 		}
 		let data=await this.getPositionAxios({
 			ip,
 			key:this.tencentkey
 		});
		res.send(data);
	}
	//获取ip
	async getPositionIp(req, res, next){
		let ip = req.headers['x-real-ip'] ||  
	        req.headers['x-forwarded-for'] ||  
	        req.socket.remoteAddress || '';  
	    if(ip.split(',').length>0){  
	        ip = ip.split(',')[0];  
	    }  
	    return ip;
	}
	//获取地址信息请求
	async getPositionAxios(options={}){
		let query=await this.analysisOptions(options);
		let data=await new Promise((resolve, reject) =>{
			axios.get('http://apis.map.qq.com/ws/location/v1/ip'+query)
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
	//关键字输入提示
	async suggestionPosition(req, res, next){
		let query='';
    	req.on("data",(chuck)=>{
            query+=chuck
        })
        query=await new Promise((resolve, reject) =>{
        	req.on("end",()=>{
	            resolve(query)
	        })
	    })
 		let data=await this.suggestionPositionAxios({
 			key: this.tencentkey,
			keyword: encodeURIComponent(JSON.parse(query).keyword),
			region: encodeURIComponent(JSON.parse(query).cityName),
			region_fix: 1,
			policy: 1
		});
		res.send(data);
	}
	//关键字输入提示请求
	async suggestionPositionAxios(options={}){
		let query=await this.analysisOptions(options);
		let data=await new Promise((resolve, reject) =>{
			axios.get('http://apis.map.qq.com/ws/place/v1/suggestion'+query)
			.then(function (response) {
				if (response.data.status===0) {
					resolve(response.data)			
				}
			})
			.catch(function (error) {
				reject(error)
			});
	    })
	    return data;
	}
	//解析参数
	async analysisOptions(options){
		let query='';
		Object.keys(options).forEach(key => {
			query+=key+'='+options[key]+'&'
		})
		if (query!=='') {
			query = query.substr(0, query.lastIndexOf('&'));
			return '?'+query;
		}
	}
}

// export default new MissAddress()
