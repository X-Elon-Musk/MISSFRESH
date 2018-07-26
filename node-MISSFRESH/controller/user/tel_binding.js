'use strict';
import MissMethods from '../../prototype/missMethods.js'
import MissMysql from '../../prototype/missmysql.js'
import md5 from '../../model/md5.js'

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
        let smsStatus=true,basiccontent;

        console.log('短信状态：',smsStatus);

        if (smsStatus) {
            req.session.telephone[telephone]=message;
            basiccontent = await MissMethods.basicContent(0, 0);
            res.type('application/json');
            res.jsonp(basiccontent);
        }
    }
    async telBinding(req, res, next){
        let telephone=parseInt(req.query.telephone),
        message=parseInt(req.query.message),
        accessToken=md5('missfresh'+md5(telephone+'')+'792884274');
        let sessionTel=req.session.telephone,
        mysqlStatus=false,
        basiccontent,selectResult,insertResult,userId;
        Object.keys(sessionTel).forEach(key => {
            if (telephone==key&&message==sessionTel[key]) mysqlStatus=true;      
        })
        if (mysqlStatus) {
            selectResult=await this.missSelectMysql('user', {
                portrait: 'portrait'
            },{
                telephone: telephone
            });       
            if (selectResult.length>0) { 
                insertResult=true;   
            } else{
                insertResult=await this.missInsertMysql('user', {
                    telephone: telephone,
                    message: message,
                    accessToken: accessToken,
                    nick_name: '小鲜',
                    portrait: 'user/portrait/common.png'
                }); 
                selectResult=await this.missSelectMysql('user', {
                    portrait: 'portrait'
                },{
                    telephone: telephone
                });
            }  
            basiccontent = await MissMethods.basicContent(0, 0, {
                telephone: telephone,
                accessToken: selectResult[0].accessToken,
                nick_name: selectResult[0].nick_name,
                portrait: selectResult[0].portrait,
                userId: selectResult[0].id
            });
        } else{
            basiccontent = await MissMethods.basicContent(1, 3);
        }
        res.type('application/json');
        res.jsonp(basiccontent);
    }
}

export default new TelBinding();