'use strict';
import MissMethods from '../../prototype/missMethods.js'
import MissMysql from '../../prototype/missmysql.js'

class User extends MissMysql{
    constructor(){
        super()
        this.getUser=this.getUser.bind(this);
    }
    async getUser(req, res, next){
        let accessToken=req.query.accessToken;
        let basiccontent;
        if (accessToken&&accessToken!=='undefined') {
            let selectResult=await this.missSelectMysql('user', {
                portrait: 'portrait'
            },{
                accessToken: accessToken
            });
            basiccontent = await MissMethods.basicContent(0, 0, {
                telephone: selectResult[0].telephone,
                accessToken: selectResult[0].accessToken,
                nick_name: selectResult[0].nick_name,
                portrait: selectResult[0].portrait,
                userId: selectResult[0].id
            });     
        } else{
            basiccontent = await MissMethods.basicContent(1, 1);
        }
        res.type('application/json');
        res.jsonp(basiccontent);      
    }
}
export default new User();
