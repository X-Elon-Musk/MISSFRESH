<template>
	<div class="shopping-cart modal-backdrop">
		<mheader title="订单确认" :functionOrLink="true" v-on:backFunction="backFunction"></mheader>
		<pull>
			<div class="select-address" @click="addressAction(true)" v-show="!choseAddress.tag">点击选择收货地址</div>
			<!-- <div class="address" @click="addressChoseAction(true)" v-show="false">
				<span class="coordinate"></span>
				<span class="address-text">{{choseAddress}}</span>
				<span class="arrow"></span>
			</div> -->
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
									<!-- <i class="marquee" @click="productCheck(item.id)" :class="{active:item.status}"></i> -->
									<!-- <product :product="item" :subtitle="false" :priceUp="getValue(item,'price_up')" :priceDown="getValue(item,'price_down')" :mpromptExist="true" v-on:callbackFunction="setDeleteProductId"></product> -->
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
	    	<!-- <div class="f_l check-all-button">
	    		<i class="marquee" @click="checkedAll" :class="{active:checkAll}"></i>
	    					全选
	    	</div> -->
	    	<div class="f_l card-info">
    			<!-- <span>合计<i>¥ {{products_total_price+cardMoney}}</i></span> -->
    			<span>付款<i>¥ {{settlement_total_price}}</i></span>
    			<!-- <span>
    				{{postage}}
    				<strong v-if="cardMoney!=0">
    					,包含会员卡费用<i>{{cardMoney}}</i>元
    				</strong>
    			</span>-->
    		</div>
    		<div class="f_r settlement-button">去支付</div>
	    </div>
	    <transition name="" mode="out-in">
    		<mprompt promptTitle="您确定删除该商品么?" promptText="" v-show="mpromptShow" :cancelShow="true" v-on:cancelActionFunction="cancelActionFunction" v-on:confirmActionFunction="confirmActionFunction"></mprompt>
		</transition>
		<!-- <transition name="bottom" mode="out-in">
		    		<addressChose v-show="addressChoseShow" v-on:addressChose="addressChoseAction(false)" :newText="true" :functionOrLink="true"></addressChose>
		</transition> -->

		<transition name="bottom" mode="out-in">
    		<!-- <address v-show="addressPage"></address> -->
    		<addressPage :style="{zIndex:5}" v-show="addressPageShow" :isComponent="true" v-on:backFunction="addressAction(false)" v-on:addressConfirm="addressConfirm"></addressPage>
		</transition>
		<transition name="bottom" mode="out-in">
    		<!-- <address v-show="addressPage"></address> -->
    		<settlementList :style="{zIndex:6}" v-show="settlementListShow" v-on:backFunction="settlementListAction(false)" :products="products"></settlementList>
		</transition>
		<!-- <mfooter></mfooter> -->
	</div>
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {getStore, isArray, toDecimal} from 'src/config/mUtils.js'

    import mheader from 'src/components/mheader/mheader'
	import pull from 'src/components/pull/pull'
	// import mfooter from 'src/components/mfooter/mfooter'
	import product from 'src/components/product/product'
	import mprompt from 'src/components/mprompt/mprompt'
	import addressChose from 'src/page/ug/children/addressChose'
	import addressPage from 'src/page/profile/children/addressPage'
	import settlementList from './settlementList'
	export default{
		data(){
		  	return {
		  		//选择购物车中所有商品
		  		// checkAll: true,
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
				// addressChoseShow: true,
				addressPageShow: false,
				settlementListShow: false,
				choseAddress: {}
		  	}
	  	},
		created (){
	    	// this.calculateTotal();
	    },
	    mounted: function () {
	    	this.SET_MPROMPTEXIST({status: true});
	    	this.INIT_CARTLIST();
	    	this.$nextTick(() => {
				if (!this.imgSwiper) {
					/*this.swiperDelete();
					this.swiperReachEnd();*/
					this.productsImg();
				}
				console.log(this.pull);
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
			},
			/*// 配送地址
            choseAddress: function () {
            	return this.s_choseAddress ? this.s_choseAddress : '';
            },*/
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
							/*//设置transition-duration值
							this.setTransition(_this.tSpeed);
							//Nav的可视宽度
				  			_this.clientWidth = parseInt(this.$wrapperEl.css('width'));
				  			_this.navWidth = 0;
				  			for (var i = 0; i < this.slides.length; i++) {
				  				_this.navWidth += parseInt(this.slides[i].offsetWidth)
				  			}
				  			_this.maxLeft=_this.navWidth-_this.clientWidth;*/
				  		}
				  	},
				});
			},
            /*// 左滑商品，出现删除按钮
			swiperDelete() {
				let _this=this;
				this.swiperdelete= new Swiper('.commodity-item',{
					// 定义slides的数量多少为一组。
					slidesPerGroup: 1,
		    		// 显示的slides数量
		    		slidesPerView: 'auto',
		    		// 抵抗率。边缘抵抗力的大小比例。
		    		resistanceRatio: 0,
		    		on: {
		    			touchStart: function() {

		    			},
		    			touchEnd: function(swiper) {
		    				console.log(1);
		    			},
		    			reachEnd: function(){
		    				console.log('最后一个');
				      	},
					}
				});		
			}, */
			/*// 单个商品滑动后，“删除”按钮出现后，其他商品“删除”按钮消失
			swiperReachEnd(){
				// let _this=this;
				if (isArray(this.swiperdelete)) {	
					this.swiperdelete.forEach((item,index,array)=> {
						item.on('reachEnd', (e)=> {
							for (let i=0;i<this.swiperdelete.length;i++) {
								if (i!==index) this.swiperdelete[i].slideTo(0, 400, false);	
							}
						})
					})			
				}
			},*/
			/*// 点击“删除”按钮后删除商品
			productDelete(deleteProductId) {
				this.mpromptStatus(true);
				this.deleteProductId=deleteProductId;
			},
			// 设定删除产品的id
			setDeleteProductId(id){
				this.deleteProductId=id;
			},*/
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
		    	// this.calculateTotal();
				this.SET_STATUS({id});
		    	// this.initData();
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
				/*this.SET_MPROMPT({status: false});	
				this.mpromptStatus(false);*/
				this.cancelActionFunction();
				this.swiperDelete();
				this.swiperReachEnd();
			},
			/*// 操作选择收货地址
			addressChoseAction(status){
				this.addressChoseShow=status;
			},*/
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
			},
			// 改变头部文字
			changeHeaderText(){
				console.log(555);
			}
		},
		components:{
			mheader,
			pull,
	        // mfooter,
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
		/* background-color: #f0f0f0;
		font-size: 14px; */
		// position: absolute;
		position: fixed;
		/* left: 0;
		top: 0;
		bottom: 0;
		right: 0; */
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
		/* .address{
			height: 49px;
			text-align: center;
			line-height: 49px;
			color: #262626;
			background-color: #fff;
			.coordinate{
				content: '';
				display: inline-block;
				vertical-align: middle;
				margin-right: .1rem;
				.bg(24px,24px,transparent,'~src/images/icon/position-icon.png',100% 100%);
			}
			.arrow{
				content: '';
				display: inline-block;
				vertical-align: middle;
				.bg(16px,16px,transparent,'~src/images/icon/cart-position-select.png',100% 100%);
			}
		} */
		.commodity{
			// background-color: #fff;
			.commodity-header{
				/* position: relative;
				height: 48px; */
				// border-bottom: .5px solid #e6e6e6;
				border: none;
				/* background-color: #fff;
				margin-top: 12px;
				display: flex;
				flex-direction: row;
				align-items: center;
				color: #262626; */
				// padding: 0 15px;
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
						/* background-color: #fff;
					    display: flex;
					    flex-direction: row;
					    position: relative;
					    border: none;
					    border-color: #f5f5f5;
					    border-bottom: 1px solid #f5f5f5;
					    margin-top: 0; */
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
			strong{
				// float: right;
			}
			.count-total{
				/* border-bottom: 1px solid #f5f5f5;
				padding: 15px; */
			}
			.benefit-total{
				
				padding: 0;
				border: none;
				/* padding: 15px;
				border-bottom: 1px solid #f5f5f5; */
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
			/* position: fixed;
			left: 0;
			bottom: 53px;
			z-index: 2;
			.wh(49px);
			background-color: #fff; */

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
				/* width: 44%;
				display: flex;
				flex-direction: column;
				background: #fff;
				color: #262626;
				text-align: left;
				vertical-align: middle;
				height: 49px;
				line-height: 15px;
				overflow: hidden;
				font-size: 14px;
				line-height: 15px;
				box-sizing: border-box;
				padding:10px 0;  */
				padding: 0;
				line-height: 49px;
				text-indent: 1rem;
				font-size: 1.0625rem;
				/* span{
					&:nth-of-type(1){
						i{
							color: rgb(255, 72, 145);
						}
					}
					&:nth-of-type(2){
						font-size: 10px;
						color: rgb(150, 150, 150);
					}
				} */
			}
			.settlement-button{
				/* font-size: 1.0625rem;
				background: #ff4891;
				.wh(100%,26%);
				line-height: 49px;
				text-align: center;
				color: #fff;
				&:after{
					content: ' ';
					.bg(10px,7px,transparent,'~src/images/icon/youjiantou.png',7px 8px);
					display: inline-block;
					line-height: 49px;
					vertical-align: middle;
					margin-left: 0.1em;
				} */
			}
		}
	}
	/* .marquee{
		display: inline-block;
		text-align: center;
		padding: 6px 12px 0 10px;
		box-sizing: border-box;
		display: inline-block;
		.bg(22px,22px,transparent,'~src/images/icon/unchecked.png',100% 100%);
		margin-right: 11px;
		margin-left: 11px;
	}
	.marquee.active{
		.bg(22px,22px,transparent,'~src/images/icon/checked.png',100% 100%);
	} */
</style>