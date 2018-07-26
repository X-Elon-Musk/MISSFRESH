<template>
    <div class="product-detail">
    	<div class="clearfix section-header">
    		<span class="header-text">商品详情</span>
    		<strong class="share-icon" @click="shareAction(true)"  :style="{backgroundImage:`url(${product_share_info_v2.show_share_img})`}"></strong>
    	</div>
    	<div class="product-img-container">
    		<carousel :banner="product.images" :link="false"></carousel>
    	</div>
    	<div class="padding_common product-name">{{product.subtitle}}</div>
    	<p class="padding_common sub-title">{{product.name}}</p>
    	<div class="padding_common clearfix price-sales">
    		<price :price="priceDown.price" class="price-down"></price>
    		<price :price="priceUp.price" class="price-up"></price>
    		<span class="f_r sales-volume">
    			已售<i>{{product.sales_volume}}</i>份
    		</span>
    	</div>
    	<ul class="padding_common clearfix product-attrs">
    		<li class="f_l">产地<span>{{product.country}}</span></li>
    		<li class="f_l">{{product.delivery_style}}</li>
    		<li class="f_l" v-for="(item, index) in product.promotion" :key="index">{{item}}</li>
    	</ul>
    	<ul class="vip-share">
    		<li class="vip-info">
    			<div class="clearfix vip-share-item">
    				<span class="f_l item-card" :style="{backgroundImage:`url(${vip_card.icon_img})`}"></span>
    				<div class="f_l item-text">
    					<span>支付8元开会员</span>
    					<span>购买本商品更省<i>0.4</i>元+返<i>0.67</i>元</span>
    				</div>
    				<span class="f_r go-on">去开通></span>
    			</div>
    		</li>
    		<li class="share-info">
    			<div class="clearfix vip-share-item">
    				<span class="f_l item-card"></span>
    				<div class="f_l item-text">
    					<span>分享有机会得30元红包</span>
    					<span class="doubt" @click="doubtAction(true)"></span>
    				</div>
    				<span class="f_r go-on" @click="shareAction(true)">去分享></span>
    			</div>
    			<div class="padding_common share-volume">已经有<span>1172</span>人分享了该商品</div>
    		</li>
    	</ul>
    	<div class="padding_common product-safe-area">
    		<div class="clearfix security-tit">
    			<span class="security-tit-title">{{product.securityTitle}}</span>
    			<router-link :to="{path: 'safeDetection',query:{product_id: product_id}}" tag='span' class="f_r security-tit-see">
    				点击查看 >
    			</router-link>	
    		</div>
    		<p class="security-txt">{{product.securityText}}</p>
    		<div class="scroll-box">
    			<icons :icons="product.productFingerprints"></icons>
    		</div>
    	</div>
    	<div class="buyer-said">
    		<div class="buyer-area-person">
    			<div class="clearfix flexbox">
    				<div class="f_l buyer-area-person-icon">
    					<img :src="product.buyerUrl" alt="">
    				</div>
    				<span class="f_l buyer-name">{{product.buyerName}}</span>
    				<i class="f_r buyer-area-person-tip"></i>
    			</div>
    			<div class="buyer-person-des">
    				{{product.buyerDescription}}
    			</div>
    			<div class="buyer-description">
    				<div class="marks-left"></div>
    				<ul class="commodity-details">
    					<li v-for="(item, index) in product.description" :key="index">{{item.text}}</li>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="padding_common graphic-list-container">
    		<h3 class="image-text">商品详情</h3>
    		<ul class="list-container">
    			<li class="list-item">规格: {{product.unit}}</li>
    			<li class="list-item">重量: {{product.weight}}</li>
    			<li class="list-item">包装: {{product.pack}}</li>
    			<li class="list-item">保质期: {{product.storage_time}}</li>
    			<li class="list-item">贮存方法: {{product.storage_method}}</li>
    		</ul>
    	</div>
    	<ul class="padding_common instruction-list-container">
    		<li v-for="(item, index) in product.instruction" :key="index"><img :src="item.image" alt=""></li>
    	</ul>
    	<div class="weui-mask" v-show="share">
    		<div class="mask-bg" @click="shareAction(false)"></div>
    		<div class="weui-mask-buttons">
    			<ul class="share-menu">
    				<li class="menu-item share-wechat" @click="shareMode('wechat')">微信好友</li>
    				<li class="menu-item share-circle" @click="shareMode('circle')">朋友圈</li>
    			</ul>
    			<div class="share-cancle" @click="shareAction(false)">取消</div>
    		</div>
    	</div>
    	<div class="weui-mask" v-show="dialog">
    		<div class="mask-bg" @click="dialogAction(false)"></div>
    		<div class="weui-mask-dialog">
    			<div class="share-name">{{share_info.title}}<span>「{{product.name}}」</span></div>
    			<div class="share-link">长按文字及链接复制 分享给好友</div>
    			<div class="share-cancle" @click="dialogAction(false)">取消</div>
    		</div>
    	</div>
    	<div class="weui-mask" v-show="doubt">
    		<div class="mask-bg" @click="doubtAction(false)"></div>
    		<div class="weui-mask-dialog share-doubt">
    			<div class="clearfix share-title"><span class="f_r" @click="doubtAction(false)"></span></div>
    			<div class="share-text">分享商品，邀请新用户点击链接并下单，可得59减30元红包。会员分享商品，非会员下单签收后，会员得5%返现。</div>
    		</div>
    	</div>
    	<router-link :to="{path: '/ug/addressChose'}" tag='div' class="clearfix address-bar-container">
			<div class="clearfix f_l delivery-range">
    			<img src="~images/icon/location.png" alt="" class="f_l position-icon">
    			<span class="f_l"> 送至 </span>
    			<span class="f_l delivery-place">{{choseAddress}}</span>
    			<img src="" alt="" class="f_l delivery-icon">
    		</div>
    		<img src="~images/icon/right-jiantou.png" alt="" class="f_r address-choose-arrow">
		</router-link>
    	<div class="clearfix product-bar-footer-container">
    		<router-link :to="{path: '/cart'}" tag='div' class="f_l image-spot-container">
				<span class="cart-count image-spot-dot">{{s_cartCount}}</span>
			</router-link>
    		<!-- <div class="f_l image-spot-container">
    			<span class="cart-count image-spot-dot">{{s_cartCount}}</span>
    		</div> -->
    		<div class="f_r add-cart-btn" @touchstart.stop="addToCart(product.id,product.image,product.name,product.product_tags,priceUp.price,priceDown.price,$event)">
    			加入购物车
    		</div>
    	</div>
    </div>  
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import {getDataProductDetailAxios} from 'src/service/getData'

	import carousel from 'src/components/carousel/carousel'
	import price from 'src/components/price/price'
	import icons from 'src/components/icons/icons'
	export default{
		data(){
			return {
				share: false,
				dialog: false,
				doubt: false,
				//商品id
				product_id: 0,
				//商品分类
				product_index: 0,
				//商品
				product: {},
				//商品现价
				priceDown: {},
				//商品原价
				priceUp: {},
				//分享信息
				share_info: {},
				//会员卡
				vip_card: {},
				//商品分享信息
				product_share_info_v2: {}
			}
		},
		created(){
            this.product_id=this.$route.query.product_id;
            this.product_index=this.$route.query.product_index;
        },
        mounted(){
            this.getDataProductDetail();
        },
        computed: {
	    	...mapState([
                's_choseAddress', 's_cartCount'
            ]),
            //选择的配送地址
            choseAddress: function () {
            	return this.s_choseAddress ? this.s_choseAddress : '';
            }
        },
		methods: {
			...mapMutations([
                'ADD_CART','REDUCE_CART','SET_MPROMPT'
            ]),
            // 商品详情
			async getDataProductDetail(){	
				let response=await getDataProductDetailAxios(this.product_id, this.product_index);
				let data=response.data;
				this.product=response;	
				this.priceDown=response.vip_price_pro.price_down;	
				this.priceUp=response.vip_price_pro.price_up;
				this.share_info=response.share_info;	
				this.vip_card=response.vip_card;	
				this.product_share_info_v2=response.product_share_info_v2;	
			},
			// 分享
			shareAction(state){
				this.share=state;
			},
			// 分享方式
			shareMode(mode){
				this.share=false;
				this.dialog=true;
			},
			dialogAction(state){
				this.dialog=state;
			},
			doubtAction(state){
				this.doubt=state;
			},
			// 添加到购物车
			addToCart: function (id,image,name,product_tags,price_up,price_down,event) {
				this.ADD_CART({id,image,name,product_tags,price_up,price_down});
			}
		},
		components: {
			carousel,
			price,
			icons
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.product-detail{
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4; 
		background: #fff;
		overflow-y: auto;
		color: @color_common;
		.section-header{
			position: fixed; 
			left: 0;
			top: 0;
			z-index: 2;
			.wh(36px);
			line-height: 36px;
			color: @color_main;
			text-align: center;
			background: #fff;
			box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
    		border-bottom: 1px solid #eee;
			.header-text{
				position: relative;
				display: inline-block;
				height: 100%;
				&:after{
					.border(0,-1px,2px,100%,@color_main);
				}
			}
			.share-icon{
				position: absolute;
				right: 0;
				top: 0;
				.bg(36px,36px,#fff,'~src/images/icon/share.png',1.4em);
			}
		}
		.product-img-container{
			margin-top: 37px;
		}
		.product-name{
			.font(1.6em,1.1em);
			font-weight: 700;
		}
		.sub-title{
			.font(1.2em);
		}
		.price-sales{
			.font(1.4em,0.8em,@color_assist);
			padding-bottom: 1em;
			padding-top: 1em;
			.price-vip{
				
			}
			.sales-volume{
				color: @color_gray;
			}
		}
		.product-attrs{
			.font(18px,0.8em);
			padding-bottom: 2em;
			li{
				padding-left: 0.5em;
				position: relative;
				margin-left: 1em;
				&:before{
					.border(0,0,2px,2px,@color_common,8px);
				}
			}
			li:nth-of-type(1){
				margin-left: 0;
			}
		}
		.vip-share{
			font-size: 0.7em;
			.vip-share-item{
				padding: 5px 3%;
				box-sizing: border-box;
				.bg(100%,60px,transparent,'~src/images/icon/product-detail-member-bg.png',100% 100%);
				.item-card{
					margin-left: 3%;
					.bg(12%,100%,transparent,'~src/images/icon/membership_card.png',3em);
				}
				.item-text{
					margin-left: 5%;
					width: 60%;
					line-height: 25px;
					span{
						display: block;
						white-space: nowrap;
						i{
							color: @color_main;
						}
					}
					.doubt{
						display: inline-block;
						margin-top: 10px;
						.bg(30px,30px,transparent,'~src/images/icon/doubt.png',80% 80%);
					}
				}
				.go-on{
					width: 20%;
					line-height: 50px;
				}
			}
			.share-info{
				.vip-share-item{
					.item-text{
						span{
							display: inline-block;
							line-height: 50px;
							vertical-align: top;
						}
					}
				}
			}
			.share-info{
				color: @color_main;
				.vip-share-item{
					background-image: url(~src/images/icon/product-share-redpacket.png);
					.item-card{
						background-image: url(~src/images/icon/share_rebate.png);
					}
					.item-text{
						line-height: 50px;
					}
				}
				.share-volume{
					padding: 0.5em 3% 2em;
					color: @color_gray;
				}
			}
		}
		.product-safe-area{
			.font(1.4em,0.8em,@color_gray);
			.security-tit{
				.security-tit-title{
					.font(2.2em,1em);
					font-weight: 700;

				}
				.security-tit-see{

				}
			}
			.security-txt{
				padding-bottom: 1em;
			}
			.scroll-box{

			}
		}
		.buyer-said{
			margin: 3em 3% 2em;
		    box-sizing: border-box;
			.buyer-area-person{
				box-shadow: 0 0.125rem 0.5rem 0 #E7E7E7;
			    border-radius: 0.375rem;
			    padding: 0.4em 3%;
			    position: relative;
				.flexbox{
					margin-top: -2em;
					overflow: hidden;
					height: 4em;
					.buyer-area-person-icon{
						margin-left: 0.5em;
						.wh(4em,4em);
						border-radius: 100%;
						img{
							display: inline-block;
							.wh(100%,100%);
						}
					}
					.buyer-name{
						margin-left: 0.5em;
						.font(4em,0.8em,@color_common);
						font-weight: 700;
					}
					.buyer-area-person-tip{
						.bg(3em,100%,transparent,'~src/images/icon/say.png',3em);
					}
				}
				.buyer-person-des{
					.font(1.5em,0.8em,@color_common);
					padding-top: 0.4em;
					padding-bottom: 0.4em;
				}
				.buyer-description{
					padding: 0.5em 1em;
					box-sizing: border-box;
					border-radius: 5px;
					background-color: #F5F5F5;
					.marks-left{
						.bg(100%,1em,transparent,'~src/images/icon/quotation.png',1.4em);
						background-position: left center;
					}
					.commodity-details{
						li{
							.font(1.4em,0.8em,@color_common);
							padding-bottom:0.5em;
							padding-top: 0.5em; 
						}
					}
				}
			}
		}
		.graphic-list-container{
			.font(2.3em,0.8em,@color_gray);
			padding-bottom: 1em;
			.image-text{
				color: @color_common;
				font-weight: 700;
			}
			.list-container{
				.list-item{

				}
			}
		}
		.instruction-list-container{
			padding-bottom: 60px;
			box-sizing: border-box;
			li{
				.wh(auto);
				img{
					display: block;
					margin: 0;
					padding: 0;
					.wh(auto);
				}
			}
		}
		.weui-mask{
			position: fixed;
		    z-index: 3;
		    top: 0;
		    right: 0;
		    left: 0;
		    bottom: 0;
		    background: transparent;
		    .mask-bg{
		    	.wh(100%);
		    	background: rgba(0, 0, 0, 0.6);
		    }
			.weui-mask-buttons{
				position: absolute;
			    left: 0;
			    bottom: 0;
			    width: 100%;
				background-color: #efeff4;
				.share-menu{
					.menu-item{
						.wh(2.6em);
						.font(2.6em);
						text-align: center;
						position: relative;
						&:nth-of-type(1):after{
							.border(0,0,1px,100%,#D5D5D6);
						}
						&:nth-of-type(2){
							padding-bottom: 4px;
						}
						&:nth-of-type(2):after{
							.border(0,0,4px,100%,#D5D5D6);
						}
					}
				}
			}
			.share-cancle{
				.wh(2.6em);
				.font(2.6em);
				text-align: center;
			}
			.weui-mask-dialog{
				position: absolute;
			    width: 80%;
			    top: 50%;
			    left: 50%;
			    transform: translate(-50%, -50%);
			    background-color: #FFFFFF;
			    text-align: center;
			    border-radius: 0.2em;
			    overflow: hidden;
			    box-sizing: border-box;
				.share-name{
					padding: 2em 6% 0;
					.font(1.4em);
				}
				.share-link{
					padding: 2em 6% 1.5em;
					.font(1em,0.8em,@color_gray);
				}
				.share-cancle{
					border-top: 1px solid #D5D5D6;
				}
			}
			.share-doubt{
				.share-title{
					height: 36px;
					span{
						.wh(36px,36px);
						.bg(36px,36px,#fff,'~src/images/icon/share-close.png',80% 80%);
					}
				}
				.share-text{
					padding: 0.4em 6% 1.5em;
					.font(1.4em,0.8em,@color_gray);
				}
			}
		}
		.address-bar-container{
			position: fixed;
			left: 0;
			bottom: 36px;
			.wh(1.6875rem);
			background: rgba(255, 244, 226, 0.9);
			padding: 0 4%;
			box-sizing: border-box;
			font-size: 0.875rem;
			line-height: 1.6875rem;
			.delivery-range{
				.position-icon{
					.wh(0.875rem,0.875rem);
					margin-top: 0.40625rem;
				}
				span{
					margin-left: 0.5rem;
				}
				.delivery-place{
					
				}
				.delivery-icon{

				}
			}
			.address-choose-arrow{
				.wh(1.2em,1.2em);
				margin-top: 0.4em;
			}
		}
		.product-bar-footer-container{
			position: fixed;
			left: 0;
			bottom: 0;
			.wh(36px); 
			line-height: 36px;
			background: #fff;
			font-size: 0.9em;
			.image-spot-container{
				position: relative;
				.bg(46px,100%,transparent,'~src/images/icon/shopping_cart.png',52% 60%);
				.image-spot-dot{
					right: 8%;
				}
			}
			.add-cart-btn{
				height: 100%;
				width: calc(100% - 46px);
				background: @color_main;
				color: #fff;
				text-align: center;
			}	
		}
	}
</style>
