'use strict';

import MissMethods from '../../prototype/missMethods.js'

import ProductFingerprints from '../productDetail/product_finger_prints.js'

export default class SafeDetection{
    constructor(){
        this.getSafeDetection=this.getSafeDetection.bind(this);
    }
    async getSafeDetection(req, res, next){
        // console.log(req.query.product_id);
        // return;
        let product_id=parseInt(req.query.product_id);

        let safedetection;
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
        res.jsonp(safedetection);
    }
}
