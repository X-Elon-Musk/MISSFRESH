'use strict';

import MissMethods from '../../prototype/missMethods.js'
import Buyer from './buyer.js'
import Images from './images.js'
import Instruction from './instruction.js'
import VipCard from './vip_card.js'
import ProductFingerprints from './product_finger_prints.js'
import ProductShareInfoV2 from './productshareinfov2.js'
import Initial from './initial.js'
import ShareInfo from './share_info.js'
import Promotion from './promotion.js'
import VipPricePro from '../index/vip_price_pro.js'
import Description from './description.js'


export default class ProductDetail{
    constructor(){
        this.getProductDetail=this.getProductDetail.bind(this);
    }
    async getProductDetail(req, res, next){
        let product_id=parseInt(req.query.product_id),
        product_index=parseInt(req.query.product_index);

        let productdetail;
        let buyer=await Buyer.getBuyer(product_index),
        images=await Images.getImages(product_id),
        instruction=await Instruction.getInstruction(product_id),
        vipcard=await VipCard.getVipCard(product_id),
        productfingerprints=await ProductFingerprints.getProductFingerprints(product_id),
        productshareinfov2=await ProductShareInfoV2.getProductShareInfoV2(product_id),
        initial=await Initial.getInitial(product_id),
        shareinfo=await ShareInfo.getShareInfo(product_id),
        promotion=await Promotion.getPromotion(product_id),
        vippricepro=await VipPricePro.getVipPricePro(product_id),
        description=await Description.getDescription(product_id);
        productdetail={
            'brand': "",
            'buy_permission': 0,
            'can_use_voucher': 1,
            'cart_btn_name': "加入购物车",
            'cart_image': "https://image.missfresh.cn/97042f5ae1274a3aa21046bd6dd6f4d6.jpg",
            'country': "海南",
            'delivery_mode': 1,
            'delivery_mode_name': "2小时达",
            'delivery_style': "2小时达",
            'description': description,
            'enable_mrd': 0,
            'exchange_limit_day': 0,
            'exchange_times_per_day': 0,
            'exchange_times_per_period': 0,
            'free_shipping': 0,
            'group_info': {},
            'id': 2611,
            'image': "https://image.missfresh.cn/9f5dead3717541e9a717f9edd76dd7bd.jpg",
            'images': images,
            'instruction': instruction,
            'integral_price': 0,
            'integral_product_type': 0,
            'is_exchange_product': 0,
            'is_present': 0,
            'is_vip': 1,
            'market_price': 2990,
            'material': "",
            'member_level': 1,
            'nationwide': 0,
            'pack': "盒装",
            'presale_type': 0,
            'price': 1990,
            'productFingerprints': productfingerprints,
            'product_chrome': 1,
            'product_created_at': "2016-05-11 20:05:06",
            'product_need_level': 0,
            'product_share_info_v2': productshareinfov2[0],
            'promote_tag_new': "",
            'promotion': promotion,
            'quantity': 1,
            'sales_volume': "268656",
            'seckill_limit': 0,
            'securityText': "经14项感官排查64项农残专检，100%可溯，点标签查看。",
            'securityTitle': "安心指纹",
            'share_info': shareinfo[0],
            'vip_card': vipcard[0],
            'vip_price_pro': vippricepro          
        }   
        await MissMethods.addAttributes(productdetail, buyer[0]);
        await MissMethods.addAttributes(productdetail, initial[0], ['name', 'subtitle', 'stock', 'sku', 'promote_tag', 'storage_code', 'storage_method', 'storage_time', 'weight', 'unit', 'vip_price']);
        productdetail.vip_price=await MissMethods.priceChange(productdetail.vip_price.toString());
        res.type('application/json');
        res.jsonp(productdetail);
    }

}
