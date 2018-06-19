'use strict';
import MissMysql from './missmysql.js'
const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAINkfU7xNmo0qb'
const secretAccessKey = 'WNce8J1x0TQFkb57jYOnXW2xyM8pD7'

class MissMethods extends MissMysql{
	constructor(){
		super()
		this.priceChange=this.priceChange.bind(this);
		this.addAttributes=this.addAttributes.bind(this);
		this.smsClient=this.smsClient.bind(this);
		this.createParam=this.createParam.bind(this);
		this.isString=this.isString.bind(this);
		this.basicContent=this.basicContent.bind(this);
		this.getQuery=this.getQuery.bind(this);
	}
	//价格处理
	async priceChange(price) {
	  	return price.slice(0,price.length-2)+'.'+price.slice(price.length-2,price.length);
	}
	//添加属性
	async addAttributes(object, attribute, parameter=[]){
        Object.keys(attribute).forEach(key => {
			if (parameter&&parameter.length!==0) {
        		if (parameter.indexOf(key)>=0) object[key]=attribute[key];	
        	} else{
        		object[key]=attribute[key];
        	}
        })
    }
    //发送短信
    async smsClient(telephone,message) {
	    let result=await new Promise((resolve, reject) =>{
			//初始化sms_client
		    let smsClient = new SMSClient({accessKeyId, secretAccessKey});
		    //发送短信
		    smsClient.sendSMS({
		        PhoneNumbers: telephone,
		        SignName: '李超',
		        TemplateCode: 'SMS_121165464',
		        TemplateParam: '{"code":'+message+'}'
		    }).then(function (result) {
		        let {Code}=result;
		        if (Code === 'OK') {
		            //处理返回参数
		            resolve(true);	
		        }
		    }, function (err) {
		        console.log('获取手机验证码错误:'+err);
		        if(err){
	              	reject(err)
	            }
		    })
		})
	    return result;
	} 
	//生成随机短信验证码
	async createParam() {
	    let param='';
	    for (let i=0;i<6;i++) {
	        param+=Math.floor(Math.random()*10);
	    }  
	    return param;
	}
	//判断是否是string
	async isString(obj) {
		return Object.prototype.toString.call(obj)=='[object String]';
	} 
	// 返回数据基本内容
	async basicContent(code_key, msg_key, object) {
		let code={
			0: 0,
			1: -1
		},
		msg={
			0: 'ok',
			1: '失败',
			2: '成功',
			3: '信息填写错误'
		};
		let basiccontent={
			code: code[code_key],
			msg: msg[msg_key]
		}
		if (object) {
			Object.keys(basiccontent).forEach(key => {
				object[key]=basiccontent[key];
			})	
			basiccontent=object;		
		}
		return basiccontent;
	}
	//解析post请求中的参数
	async getQuery(req) {
		let query='';
        req.on("data",(chuck)=>{
            query+=chuck
        })
        query=await new Promise((resolve, reject) =>{
            req.on("end",()=>{
                resolve(query)
            })
        })
        return JSON.parse(query);
	} 
}

export default new MissMethods();

