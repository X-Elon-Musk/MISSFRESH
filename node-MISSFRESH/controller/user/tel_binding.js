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
            // req.session.save();
            let basiccontent = await MissMethods.basicContent(0, 0);
            res.type('application/json');
            res.jsonp(basiccontent);
        }
    }
    async telBinding(req, res, next){
        let telephone=parseInt(req.query.telephone),
        message=parseInt(req.query.message);
        let sessionTel=req.session.telephone,
        mysqlStatus=false,
        basiccontent,selectResult,insertResult,userId;
        console.log(req.session);
        // console.log(req);
        // return;
        // console.log('++++++++++');
        // console.log(sessionTel);
        // console.log(req.session.telephone);
        // console.log('++++++++++');
        Object.keys(sessionTel).forEach(key => {
            if (telephone==key&&message==sessionTel[key]) mysqlStatus=true;      
        })
        if (mysqlStatus) {
            selectResult=await this.missSelectMysql('user', {},{
                telephone: telephone
            });       
            if (selectResult.length>0) {
                console.log('已经存在');  
                insertResult=true;   
                // userId=selectResult[0].id;
            } else{
                insertResult=await this.missInsertMysql('user', {
                    telephone: telephone,
                    message: message
                }); 
                selectResult=await this.missSelectMysql('user', {},{
                    telephone: telephone
                });
            }  
            basiccontent = await MissMethods.basicContent(0, 0, {
                userId: selectResult[0].id,
                telephone: telephone
            });
            // basiccontent = insertResult ? await MissMethods.basicContent(0, 0) : await MissMethods.basicContent(1, 1);
        } else{
            basiccontent = await MissMethods.basicContent(1, 3);
        }
        res.type('application/json');
        res.jsonp(basiccontent);
    }
}

export default new TelBinding();