'use strict';

export default class View extends MissMysql{
    constructor(){
        this.getView=this.getView.bind(this);
    }
    async getView(req, res, next){
        let type;

        let view=await this.missMysql('instruction', {
            img_url: 'img_url'
        },{
            type: type
        });
        res.type('application/json');
        res.jsonp(view[0]);
    }

}
