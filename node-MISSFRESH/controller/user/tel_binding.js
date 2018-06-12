'use strict';
import MissMethods from '../../prototype/missMethods.js'
import MissMysql from '../../prototype/missmysql.js'

class TelBinding extends MissMysql{
    constructor(){
        super()
        this.getTelBindingInfo=this.getTelBindingInfo.bind(this);
        this.telBinding=this.telBinding.bind(this);
    }
    async getTelBindingInfo(req, res, next){
        req.session.telephone=req.session.telephone||{};
        let telephone=parseInt(req.query.telephone);
        let message=await MissMethods.createParam();


        console.log('短信：',message);
        // let smsStatus=await MissMethods.smsClient(telephone,message);
        let smsStatus=true;

        console.log('短信状态：',smsStatus);
        if (smsStatus) {
            req.session.telephone[telephone]=message;
            console.log(req.session);
            res.type('application/json');
            res.jsonp(req.session);
        }
    }
    async telBinding(req, res, next){
        let telephone=parseInt(req.query.telephone),
        message=parseInt(req.query.message);
        let sessionTel=req.session.telephone,
        insertStatus=false,
        basiccontent;
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
            basiccontent = result ? await MissMethods.basicContent(0, 0) : await MissMethods.basicContent(1, 1);
        } else{
            basiccontent = await MissMethods.basicContent(1, 1);
        }
        res.type('application/json');
        res.jsonp(basiccontent);
    }
}

export default new TelBinding();