'use strict';
import MissMysql from '../../prototype/missmysql.js'

export default class View extends MissMysql{
    constructor(){
        super()
        this.getView=this.getView.bind(this);
    }
    async getView(req, res, next){
        let type = parseInt(req.query.type);

        let view=await this.missMysql('view', {
            img_url: 'img_url'
        },{
            type: type
        });
        res.type('application/json');
        res.jsonp(view[0]);
    }
}
