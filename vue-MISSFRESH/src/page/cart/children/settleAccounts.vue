<template>
	<div class="shopping-cart modal-backdrop">
		<mheader title="订单确认" :functionOrLink="true" v-on:backFunction="backFunction"></mheader>
		<pull>
			<div class="select-address" @click="addressAction(true)" v-show="!choseAddress.tag">点击选择收货地址</div>
			<div class="address-content select-address-content" @click="addressAction(true)" v-show="choseAddress.tag">
    			<div class="address-detail">
    				<div class="ellips address-info">
    					<span class="address-tag" v-if="choseAddress.tag === 'HOME'">住宅</span>
    					<span class="address-tag" v-else-if="choseAddress.tag === 'COMPANY'">公司</span>
    					<span class="address-tag" v-else-if="choseAddress.tag === 'SCHOOL'">学校</span>
    					<span class="address-tag" v-else>其他</span>
    					<span class="address-location">{{choseAddress.province+' '+choseAddress.city+' '+choseAddress.area}}</span>
    				</div> 
    				<div class="ellips address-info address-info-detail">{{choseAddress.address_detail}}</div>
    				<div class="address-owner">
    					<span class="owner-name">{{choseAddress.name}}</span> 
    					<span class="owner-phone">{{choseAddress.phone_number}}</span>
    				</div>
    			</div>
    		</div>
			<div class="commodity">
				<div class="clearfix commodity-header">
					<!-- <i class="marquee" @click="checkedAll" :class="{active:checkAll}"></i> -->
					<span class="service">全国送商品</span>
					<span class="f_r delivery-time">今天2小时内送达[可选]</span>
				</div>
				<!-- 商品 -->
				<div class="products-list-content" @click="settlementListAction(true)">
					<ul class="commodity-items products">
						<li class="swiper-container commodity-item clearfix products-img">
							<div class="swiper-wrapper">
								<div class="swiper-slide swiper-content" v-for="(item,index) in products" :key="index">
									<div class="img-item">
										<img src="" v-lazy="item.image" alt="" class="product-img">
									</div>
								</div>
						        <!-- <div class="swiper-slide swiper-delete" @click="productDelete(item.id)"><span>删除</span></div> -->
						    </div>	
						</li>
					</ul>
					<div class="product-count">
						<span>共7件</span>
					</div>
				</div>
			</div>
			<!-- 商品总价 -->
			<div class="total-price">
		        <div class="count-total">
		        	<span>商品总价</span>
		        	<strong>¥ {{total_price}}</strong>
			    </div>
			    <div class="benefit-total">
			    	<ul class="product-benefit">
			    		<!-- <li class="benefit-item" v-for="product in products" v-show="product.benefit.orNot">
			    			<span>{{product.benefit.content}}</span>
		        			<strong>-¥ {{product.benefit.text}}</strong>
			    		</li> -->
			    	</ul>
			    	<div class="paid">
			    		<span>商品实付</span>
		        		<strong>¥{{total_price}}</strong>
			    	</div>
			    	<div class="freight">
			    		<span>运费<i>实付满69元包邮</i></span>
		        		<strong >{{postage}}</strong>
			    	</div>
			    </div>
			    <div class="total">
		    		合计<strong>¥ {{products_total_price}}</strong>
		    	</div>
		    </div>
		    <!-- 会员卡优惠 -->
		    <div class="vip-benefit">
		    	<div class="vip-card clearfix">
		    		<span class="card"></span>
		    		<div class="card-info">
		    			<span>
		    				开通
		    				<strong class="vip-time">{{cardTime}}</strong>
		    				会员可得
		    				<i>红包</i>
		    			</span>
		    			<span>本单更返<i>1.31</i>元</span>
		    		</div>
		    	</div>
		    	<ul class="card-time">
		    		<li v-for="card in cards">
		    			<span :title="card.time"></span>
		    			<i class="marquee" @click="cardCheck(card)" :class="{active:card.checked}"></i>
		    		</li>
		    	</ul>
		    </div>
	    </pull>	
	    <!-- 结算 -->
	    <div class="clearfix settlement">
	    	<div class="f_l card-info">
    			<span>付款<i>¥ {{settlement_total_price}}</i></span>
    		</div>
    		<div class="f_r settlement-button">去支付</div>
	    </div>
	    <transition name="" mode="out-in">
    		<mprompt promptTitle="您确定删除该商品么?" promptText="" v-show="mpromptShow" :cancelShow="true" v-on:cancelActionFunction="cancelActionFunction" v-on:confirmActionFunction="confirmActionFunction"></mprompt>
		</transition>

		<transition name="bottom" mode="out-in">
    		<addressPage :style="{zIndex:5}" v-show="addressPageShow" :isComponent="true" v-on:backFunction="addressAction(false)" v-on:addressConfirm="addressConfirm"></addressPage>
		</transition>
		<transition name="bottom" mode="out-in">
    		<settlementList :style="{zIndex:6}" v-show="settlementListShow" v-on:backFunction="settlementListAction(false)" :products="products"></settlementList>
		</transition>
	</div>
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {getStore, isArray, toDecimal} from 'src/config/mUtils.js'

    import mheader from 'src/components/mheader/mheader'
	import pull from 'src/components/pull/pull'
	import product from 'src/components/product/product'
	import mprompt from 'src/components/mprompt/mprompt'
	import addressChose from 'src/page/ug/children/addressChose'
	import addressPage from 'src/page/profile/children/addressPage'
	import settlementList from './settlementList'
	export default{
		data(){
		  	return {
		  		totalPrice: 0,
		  		paid: 0,
		  		freight: 0,
		  		total: 0,
				cardTime: '',
				cards: [
					{
						time: '月度',
						checked: false,
						money: 8
					},
					{
						time: '季度',
						checked: false,
						money: 18
					},
					{
						time: '半年度',
						checked: false,
						money: 30
					}
				],
				settlement: 0,
				cardMoney: 0,
				mpromptShow: false,
				deleteProductId: '',
				addressPageShow: false,
				settlementListShow: false,
				choseAddress: {}
		  	}
	  	},
	    mounted: function () {
	    	this.SET_MPROMPTEXIST({status: true});
	    	this.INIT_CARTLIST();
	    	this.$nextTick(() => {
				if (!this.imgSwiper) {
					this.productsImg();
				}
			})
	    },
	    watch: {
			s_mpromptStatus: function () {
				if (this.s_mpromptStatus) this.mpromptStatus(true);
			}
		},
	    computed: {
	    	...mapState([
                's_cartList', 's_mpromptStatus', 's_choseAddress'
            ]),
            // 商品列表
            products: function () {
            	let products=[];
				Object.values(this.s_cartList).forEach(item => {
                    products.push({
                    	"num": item.num,
						"id": item.id,
						"image": item.image,
						"name": item.name,
						"product_tags": item.product_tags,
						"subtitle": item.subtitle,
						"price_up": item.price_up,
						"price_down": item.price_down,
						"total_price": item.total_price,
						"status": item.status
                    })
                })
                return products;
            },
           	// 商品总价
            total_price: function () {
            	let total_price=0;
				Object.values(this.s_cartList).forEach(item => {
                    if (item.status) {
                    	total_price+=parseFloat(item.total_price);	
                    }
                })
                return toDecimal(total_price);
            },
            // 是否选中购物车中所有商品
            checkAll: function () {
            	if (this.products) {
			    	for (let i=0;i<this.products.length;i++) {
				    	if (!this.products[i].status) {
				    		return false;
				        }		
				    }
				    return true;
			    }else {
			    	return true;
			    }
			},
			// 运费
			postage: function () {
				return this.total_price>=69||this.total_price==0?"免邮":5;
			},
			// 商品合计
			products_total_price: function () {
				return this.postage!=="免邮" ? parseFloat(this.total_price+this.postage) : parseFloat(this.total_price);
			},
			// 结算价格
			settlement_total_price: function () {
				return toDecimal(this.products_total_price+this.cardMoney);
			}
	    },
		methods: {
			...mapMutations([
                'SET_STATUS', 'DELETE_CART', 'INIT_CARTLIST', 'SET_MPROMPTEXIST', 'SET_MPROMPT'
            ]),
            // 页面显示或者隐藏
			backFunction(){
				console.log(11111);
				this.$emit("backFunction");
			},
            // 商品图片列表
			productsImg() {
				var _this=this;
				this.imgSwiper=new Swiper('.products-img', {
					slidesPerView: 'auto',
					freeMode: true,
					observer:true,
      				observeParents:true,
      				// resistanceRatio : 0,
					on: {
						init: function() {
							
				  		}
				  	},
				});
			},
		    //商品合计计算
		    totalCount(){
		    	this.total<0?0:this.total;
		    	if (this.totalPrice==0) {
		    		this.total=0;			
		    	}else{
		    		if (this.paid>=69) {
		    			this.total=this.paid;		
		    		} else{
		    			this.total=this.paid+this.freight;
		    		}
		    	}
		    		
		    },
		    //单个商品选择
		    productCheck(id){
				this.SET_STATUS({id});
		    },
		    //商品全部选择
		    checkedAll(){
			    Object.values(this.s_cartList).forEach(item => {
			    	this.productCheck(item.id);
			    })
		    },
		    //会员卡选择
		    cardCheck(card){
		    	let state=card.checked;
		    	this.cards.forEach(function (item) {
			        item.checked=false;  
			    }) 
			    state?card.checked=false:card.checked=true;
			    if (card.checked) {
					this.cardTime=card.time;			
					this.cardMoney=card.money;			
				} else{
					this.cardTime='';
					this.cardMoney=0;	
				}
							
			},
			// 显示或隐藏提示
			mpromptStatus(status){
				this.mpromptShow=status;
			},
			// 点击“取消”按钮
			cancelActionFunction(){
				this.mpromptStatus(false);
				this.SET_MPROMPT({status: false});	
			},
			// 点击“确定”按钮，删除单个商品
			confirmActionFunction(){
				let id=this.deleteProductId;
				this.DELETE_CART({id});
				this.cancelActionFunction();
				this.swiperDelete();
				this.swiperReachEnd();
			},
			// 操作收货地址
			addressAction(status){
				this.addressPageShow=status;
			},
			// 操作商品列表
			settlementListAction(status){
				this.settlementListShow=status;
			},
			// 收货地址确认
			addressConfirm(item){
				this.choseAddress=item;
				console.log(this.choseAddress);
			}
		},
		components:{
			mheader,
			pull,
	        product,
	        mprompt,
	        addressChose,
	        addressPage,
	        settlementList
	    },
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.shopping-cart.modal-backdrop{
		position: fixed;
		z-index: 5;
		padding-top: 43px;
		.header-component{
			z-index: 5;
		}
		.pull {
		    background-color: #f0f0f0;
		}
		.select-address{
			padding: 28px 34px 28px 38px;
			font-size: 1.125rem;
		    color: #474245;
			box-sizing: border-box;
			position: relative;
			background: #fff;
			&:before{
				content: '';
				.bg(20px,20px,transparent,'~src/images/icon/location.png',100% 100%);
				.positionY();
				left: 12px;
			}
			&:after{
				content: '';
				.bg(15px,15px,transparent,'~src/images/icon/right-jiantou.png',100% 100%);
				.positionY();
				right: 12px;
			}
		}
		.select-address-content{
	    	padding: 0 0.9375rem 5px 0.9375rem;
	    	border-bottom: 0.0625rem solid #f5f5f5;
	    	box-sizing: border-box;
	    	background: #fff;
	    	position: relative;
	    	&:after {
    			content: '';
    			.bg(100%,5px,transparent,'~images/icon/cut-off-line.png',100% 100%);
    			position: absolute;
    			left: 0;
    			bottom: 0;
    		}
	    	.address-detail{
	    		padding: 1.25rem 0;
	    		white-space: nowrap;
	    		overflow: hidden;
	    		.font(1.25rem,1rem,#b8b8b8);
	    		position: relative;
	    		&:after {
	    			content: '';
	    			.bg(1.2rem,1.2rem,transparent,'~images/icon/right-jiantou.png',100% 100%);
	    			.positionY();
	    			right: 0;
	    		}
	    		.address-info{
	    			padding: 4px 0;
	    			.address-tag{
	    				background-color: @bg_color;
	    				color: @color_common;
	    				font-size: 0.5rem;
	    				border-radius: 0.125rem;
    				    border: 1px solid #bbb;
    				    vertical-align: middle;
	    			}
	    			.address-location{
	    				display: inline-block;
	    				width: 85%;
	    				overflow: hidden;
	    				text-overflow: ellipsis;
	    				white-space: nowrap;
	    				vertical-align: middle;
	    				color: #4b4b4b;
	    			}
	    		}
	    		.address-info-detail{
	    			font-size: 20px;
	    			color: #474245;
	    			font-weight: 500;
	    			padding-bottom: 7px;
	    		}
	    		.address-owner{
	    			line-height: 1.5rem;
	    			color: initial;
	    			.owner-name{

	    			}
	    			.owner-phone{

	    			}
	    		}
	    	}
	    }
		.commodity{
			.commodity-header{
				border: none;
				margin: 12px 15px 0;
				box-sizing: border-box;
				display: block;
				line-height: 48px;
				&:after{
					content: '';
					.bg(15px,15px,transparent,'~src/images/icon/right-jiantou.png',100% 100%);
					.positionY();
					right: 0;
				}
				.service{
					border-left: 4px solid @color_main;
					padding-left: 0.5rem;
				}
				.delivery-time{
					margin-right: 1.2rem;
					color: @color_main;
					font-weight: 700;
				}
			}
			.products-list-content{
				margin: 0 15px;
				border-top: 1px solid #f5f5f5;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.commodity-items{
					width: 78%;
					.commodity-item{
		    			.swiper-content{
		    				width: auto!important;
		    				padding: 18px 0;
		    			}
						.img-item{
							display: inline-block;
							width: 41px;
							height: 41px;
							padding: 3px;
							margin-right: 8px;
							background: #FFF;
							border-radius: 4px;
							position: relative;
							.product-img{
								width: 100%;
								height: 100%;
							}
						}
					}	
				}
				.product-count{
					width: 22%;
					position: relative;
					&:after{
						content: '';
						.bg(15px,15px,transparent,'~src/images/icon/right-jiantou.png',100% 100%);
						.positionY();
						right: 0;
					}
					span{
						font-size: 0.75rem;
						.positionY();
						left: 1rem;
					}
				}
			}
		}
		.total-price{
			margin-top: 10px;
			color: #4B4B4B;
			font-size: 14px;
			background: #fff;
			background-color: #fff;
			line-height: 1.4;
			.benefit-total{
				padding: 0;
				border: none;
				.product-benefit{
					strong{
						color: rgb(255, 72, 145);
					}
				}
				.paid{
					padding: 15px;
					border-bottom: 1px solid #f5f5f5;
					box-sizing: border-box;
				}
				.freight{
					padding: 15px;
					border-bottom: 1px solid #f5f5f5;
					box-sizing: border-box;
					i{
						font-size: 12px;
						color: #969696;
						margin-left: 6px;
					}
				}
			}
			.total{
				text-align: right;
				padding: 15px;
				strong{
					float: none;
					color: rgb(255, 72, 145);
				}
			}	
		}
		.vip-benefit{
			background: #fff;
	    	margin-top: 10px;
	    	padding-bottom: 102px;
	    	.vip-card{
	    		text-align: left;
	    		padding: 0 15px;
	    		border-bottom: 1px solid #f5f5f5;
	    		.wh(49px,100%);
	    		display: table;
	    		box-sizing: border-box;
	    		.card{
	    			float: left;
	    			vertical-align: middle;
	    			margin-top: 15px;
					.bg(60px,18px,transparent,'~src/images/icon/membership_card.png',auto 100%);
	    		}
	    		.card.active{
	    			background: url(~src/images/icon/card_active.png) no-repeat;
					background-size: auto 100%;
	    		}
	    		.card-info{
	    			float: left;
	    			.wh(100%,auto);
	    			i{
						color: #FF4891;
					}
	    			span{
	    				display: block;
	    				.wh(50%);
	    				line-height: 25px;
	    			}
	    		}
	    	}
	    	.card-time{
	    		overflow: hidden;
	    		li{
	    			background-color: #fff;
	    			line-height: 70px;
	    			height: 70px;
	    			border-bottom: 1px solid #f5f5f5;
	    			padding: 10px 15px;
	    			box-sizing: border-box;
	    			span{
	    				float: left;
	    				.wh(50px,66%);
	    			}
	    			.marquee{
	    				float: right;
	    				margin-top: 12px;
	    			}
					&:nth-of-type(1){
						span{
							background: url(~src/images/icon/card_0.png) no-repeat;
							background-size: auto 100%;
						}
					}
					&:nth-of-type(2){
						span{
							background: url(~src/images/icon/card_1.png) no-repeat;
							background-size: auto 100%;
						}
					}
					&:nth-of-type(3){
						span{
							background: url(~src/images/icon/card_2.png) no-repeat;
							background-size: auto 100%;
						}
					}
	    		}
			}
		}
		.settlement{
			bottom: 0;
			border-top: 1px solid #e6e6e6;
			.check-all-button{
				.wh(100%,24%);
				line-height: 49px;
				position: static;
				margin-top: 0;
				background: #fff;
				.marquee{
					vertical-align: top;
					margin-top: 15px;
					margin-right: 4px;
				}
			}
			.card-info{
				padding: 0;
				line-height: 49px;
				text-indent: 1rem;
				font-size: 1.0625rem;
			}
		}
	}
</style>