'use strict';
import MissMethods from '../../prototype/missMethods.js'
import MissMysql from '../../prototype/missmysql.js'
import md5 from '../../model/md5.js'

class Address extends MissMysql{
    constructor(){
        super()
        this.getAddressList=this.getAddressList.bind(this);
        this.addAddress=this.addAddress.bind(this);
        this.deleteAddress=this.deleteAddress.bind(this);
        this.updateAddress=this.updateAddress.bind(this);
    }
    // 获取用户收件地址列表
    async getAddressList(req, res, next){
        let user_id=parseInt(req.query.user_id);
        let sqlresult,result=[];
        console.log(req.query.user_id);
        sqlresult=await this.missSelectMysql('address_list', {}, {
            user_id: user_id
        });

        res.type('application/json');
        res.jsonp(sqlresult);
    }
    // 新增收货地址
    async addAddress(req, res, next){
        let query=await MissMethods.getQuery(req);
        let basiccontent;
        let address_item={
            user_id: query.user_id,
            address_1: query.address_1,
            address_2: query.address_2,
            address_detail: query.address_detail,
            area: query.area,  
            city: query.city,  
            code: parseInt(query.code),  
            default_: 0,  
            full_address: query.full_address,  
            is_valid: 1,  
            lat_lng: query.lat_lng,
            name: query.name, 
            phone_number: parseInt(query.phone_number),  
            province: query.province,  
            tag: query.tag,  
            transport: 1 
        }
        let insertResult=await this.missInsertMysql('address_list', {
            ...address_item
        }); 
        if (insertResult.warningCount==0) basiccontent = await MissMethods.basicContent(0, 2);
        res.type('application/json');
        res.jsonp(basiccontent);
    }
    // 删除收货地址
    async deleteAddress(req, res, next){
        let id=parseInt(req.query.id);
        let sqlresult,result=[],basiccontent;
        sqlresult=await this.missDeleteMysql('address_list', {
            id: id
        });
        if (sqlresult.warningCount==0) basiccontent = await MissMethods.basicContent(0, 2);
        res.type('application/json');
        res.jsonp(basiccontent);
    }
    // 编辑收货地址
    async updateAddress(req, res, next){
        let query=await MissMethods.getQuery(req);
        let basiccontent;
        let address_item={
            address_1: query.address_1,
            address_2: query.address_2,
            address_detail: query.address_detail,
            area: query.area,  
            city: query.city,  
            code: parseInt(query.code),  
            default_: 0,  
            full_address: query.full_address,  
            is_valid: 1,  
            lat_lng: query.lat_lng,
            name: query.name, 
            phone_number: parseInt(query.phone_number),  
            province: query.province,  
            tag: query.tag,  
            transport: 1 
        }
        let insertResult=await this.missUpdateMysql('address_list', {
            ...address_item
        }, {
            id: query.id
        }); 
        if (insertResult.warningCount==0) basiccontent = await MissMethods.basicContent(0, 2);
        res.type('application/json');
        res.jsonp(basiccontent);
    }
}

export default new Address();