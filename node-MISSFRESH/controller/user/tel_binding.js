'use strict';
import MissMethods from '../../prototype/missMethods.js'
import MissMysql from '../../prototype/missmysql.js'

class TelBinding extends MissMysql{
    constructor(){
        super()
        this.getTelBindingInfo=this.getTelBindingInfo.bind(this);
    }
    async getTelBindingInfo(req, res, next){
        req.session.telephone=req.session.telephone||{};
        let telephone=parseInt(req.query.telephone);
        let message=await MissMethods.createParam();


        console.log('短信：',message);
        let smsStatus=await MissMethods.smsClient(telephone,message);

        console.log('短信状态：',smsStatus);
        if (smsStatus) {
            /*await MissMysql.missInsertMysql('user',{
                telephone: telephone,
                message: message
            }); */ 
            // req.session.telephone=req.session.telephone||{};
            req.session.telephone[telephone]=message;
            console.log(req.session);
            res.type('application/json');
            res.jsonp(req.session);
        }

        /*await this.missInsertMysql('user',{
            telephone: 15538254335,
            message: 123456
        }); */
        /*let safedetection;
        let productfingerprints=await ProductFingerprints.getProductFingerprints(product_id);
        safedetection={
            code: 0,
            result: [
                {
                    'missfreshAnalytica': true,
                    'securityDetailUrl': productfingerprints[0].picUrl,
                    'securityTagName': "优鲜安心检测",
                    'securityTagUrl': productfingerprints[0].src,
                    'securityUnselectedTagUrl': productfingerprints[0].securityUnselectedTagUrl 
                },
                {
                    'securityDetailUrl': productfingerprints[1].picUrl,
                    'securityTagName': "100%品控检测",
                    'securityTagUrl': productfingerprints[1].src,
                    'securityUnselectedTagUrl': productfingerprints[1].securityUnselectedTagUrl
                }
            ],
            success: true
        }  
        res.type('application/json');
        res.jsonp(safedetection);*/
    }
    async telBinding(req, res, next){
        let telephone=parseInt(req.query.telephone),
        message=parseInt(req.query.message);
        let sessionTel=req.session.telephone,insertStatus=false;
        Object.keys(sessionTel).forEach(key => {
            if (telephone==key&&message==sessionTel[key]) {
                insertStatus=true;           
            }
        })
        if (insertStatus) {
            let result=await this.missInsertMysql('user',{
                telephone: telephone,
                message: message
            });   
            result?res.send('1'):res.send('-1');
        } else{
            res.send('-1');//注册成功  
        }

        /*console.log('短信：',message);
        let smsStatus=await MissMethods.smsClient(telephone,message);

        console.log('短信状态：',smsStatus);
        if (smsStatus) {
            await MissMysql.missInsertMysql('user',{
                telephone: telephone,
                message: message
            });  
            // req.session.telephone=req.session.telephone||{};
            req.session.telephone[telephone]=message;
            console.log(req.session);
            res.type('application/json');
            res.jsonp(req.session);
        }*/
    }
}

export default new TelBinding();