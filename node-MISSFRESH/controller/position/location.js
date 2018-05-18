'use strict';

class Location{
	constructor(){
		this.location=this.location.bind(this);
		this.getIp=this.getIp.bind(this);
	}
	async location(req, res, next){
	    let clientIp = await this.getIp(req);  
	    //console.log('客户端ip',clientIp)  
	    res.send(clientIp);  
	}
	async getIp(req, res, next){
		var ip = req.headers['x-real-ip'] ||  
	        req.headers['x-forwarded-for'] ||  
	        req.socket.remoteAddress || '';  
	    if(ip.split(',').length>0){  
	        ip = ip.split(',')[0];  
	    }  
	    return ip;
	}
}

export default new Location()