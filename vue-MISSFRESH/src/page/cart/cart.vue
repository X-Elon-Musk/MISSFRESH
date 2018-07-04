<template>
	<div class="shopping-cart">
		<pull>
			<div class="address">
				<span class="coordinate"></span>
				<span class="address-text">北京市</span>
				<span class="arrow"></span>
			</div>
			<div class="commodity">
				<div class="commodity-header">
					<i class="marquee" @click="checkedAll" :class="{active:checkAll}"></i>
					全国送商品
				</div>
				<!-- 商品 -->
				<!-- <ul class="commodity-items products">
					<li class="commodity-item clearfix" v-for="item in products">
						<i class="marquee" @click="productCheck(item.id)" :class="{active:item.status}"></i>
						<product :product="item" :subtitle="false" :priceUp="getValue(item,'price_up')" :priceDown="getValue(item,'price_down')" :mpromptExist="true"></product>
					</li>
				</ul> -->

				<ul class="commodity-items products">
					<li class="swiper-container commodity-item clearfix" v-for="item in products">
						<div class="swiper-wrapper">
							<div class="swiper-slide swiper-content">
								<i class="marquee" @click="productCheck(item.id)" :class="{active:item.status}"></i>
								<product :product="item" :subtitle="false" :priceUp="getValue(item,'price_up')" :priceDown="getValue(item,'price_down')" :mpromptExist="true" v-on:callbackFunction="setDeleteProductId"></product>
							</div>
					        <div class="swiper-slide swiper-delete" @click="productDelete(item.id)"><span>删除</span></div>
					    </div>	
					</li>
				</ul>
			</div>
			<!-- 商品总价 -->
			<div class="total-price">
		        <div class="count-total">
		        	<span>商品总价</span>
		        	<!-- <strong>¥ {{totalPrice}}</strong> -->
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
	    	<div class="f_l check-all-button">
	    		<i class="marquee" @click="checkedAll" :class="{active:checkAll}"></i>
				全选
	    	</div>
	    	<div class="f_l card-info">
    			<span>合计<i>¥ {{products_total_price+cardMoney}}</i></span>
    			<span>
    				{{postage}}
    				<strong v-if="cardMoney!=0">
    					,包含会员卡费用<i>{{cardMoney}}</i>元
    				</strong>
    			</span>
    		</div>
    		<div class="f_r settlement-button">去结算</div>
	    </div>
	    <transition name="" mode="out-in">
    		<mprompt1 promptTitle="您确定删除该商品么?" promptText="" v-show="mpromptShow" :cancelShow="true" v-on:cancelActionFunction="cancelActionFunction" v-on:confirmActionFunction="confirmActionFunction"></mprompt1>
		</transition>
		<mfooter></mfooter>
		<!-- <mprompt></mprompt> -->
	</div>
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {getStore, isArray} from 'src/config/mUtils.js'
	import pull from 'src/components/pull/pull'
	import mfooter from 'src/components/mfooter/mfooter'
	import product from 'src/components/product/product'
	// import mprompt from 'src/components/mprompt/mprompt'
	import mprompt1 from 'src/components/mprompt1/mprompt1'
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
				deleteProductId: ''
		  	}
	  	},
		created (){
	    	this.calculateTotal();
	    },
	    mounted: function () {
	    	this.SET_MPROMPTEXIST({status: true});
	    	this.INIT_CARTLIST();
	    	this.$nextTick(() => {
				if (!this.swiperdelete) {
					this.swiperDelete();
					this.swiperReachEnd();
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
                's_cartList', 's_mpromptStatus'
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
                    	total_price+=item.total_price;	
                    }
                })
                // return parseFloat(total_price.toFixed(2));
                return parseFloat(total_price);
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
			}
	    },
		methods: {
			...mapMutations([
                'SET_STATUS', 'DELETE_CART', 'INIT_CARTLIST', 'SET_MPROMPTEXIST', 'SET_MPROMPT'
            ]),
            // 左滑商品，出现删除按钮
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
			},
			// 单个商品滑动后，“删除”按钮出现后，其他商品“删除”按钮消失
			swiperReachEnd(){
				// let _this=this;
				if (isArray(this.swiperdelete)) {
					/*this.swiperdelete.forEach(function (item,index,array) {
						item.on('reachEnd', function (e) {
							for (let i=0;i<_this.swiperdelete.length;i++) {
								if (i!==index) _this.swiperdelete[i].slideTo(0, 400, false);	
							}
						})
					})*/	
					this.swiperdelete.forEach((item,index,array)=> {
						item.on('reachEnd', (e)=> {
							for (let i=0;i<this.swiperdelete.length;i++) {
								if (i!==index) this.swiperdelete[i].slideTo(0, 400, false);	
							}
						})
					})			
				}
			},
			// 点击“删除”按钮后删除商品
			productDelete(deleteProductId) {
				this.mpromptStatus(true);
				this.deleteProductId=deleteProductId;
			},
			// 设定删除产品的id
			setDeleteProductId(id){
				this.deleteProductId=id;
			},
			// mpromptAction: function () {
			// 	this.mprompt=true;
			// },
			/*//初始化数据
			async initData(){
				let products=[];
				// console.log(this.s_cartList);
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
						"status": item.status
                    })
                })
                this.products=products;
			},*/
			//商品总价计算
		    calculateTotal(){
		     //  	let all=0;
		     //  	this.products.forEach(function (item) {
			    //     if (item.checked) {
			    //       all+=item.price*item.number; 
			    //     } 
			    // })  
			    // this.totalPrice=all;
			    // this.actuallyPaid();
		    },
		    //商品实付计算
		    actuallyPaid(){
		    	/*let all=0;
		      	this.products.forEach(function (item) {
			        if (item.benefit.orNot) {
			          all+=item.benefit.text; 
			        } 
			    })  
			    this.paid=this.totalPrice-all;
			    this.freightCharge();
			    this.totalCount();*/
		    },
		    //运费计算
		    freightCharge(){
		    	/*if (this.paid>=69) {
		    		this.freight='免邮';		
		    	} else{
		    		// console.log(this.paid);
		    		if (this.paid<=0) {
		    			this.freight='免邮';			
		    		}else{
			    		this.freight=10;
		    		}
		    	}*/
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
		   	//单个商品减少
		    reduce(item){
		      	// if (item.number==0) return;
		      	// item.number--;
		      	// this.calculateTotal();
		    },
		    //单个商品增加
		    add(item){
		      	// item.number++;
		      	// this.calculateTotal();
		    },
		    //单个商品选择
		    productCheck(id){
		    	// this.calculateTotal();
				this.SET_STATUS({id});
		    	// this.initData();
		    },
		    //商品全部选择
		    checkedAll(){
			    // this.checkAll=!this.checkAll;
			    // if (this.checkAll) {
			    //     let total=0;
			    //     this.products.forEach(function (item) {
			    //       	item.checked=true;
			    //       	total+=item.price*item.number; 
			    //     }) 
			    //     this.totalPrice=total;     
			    // } else{
			    //     this.products.forEach(function (item) {
			    //       	item.checked=false;
			    //     }) 
			    //     this.totalPrice=0;    
			    // }
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
		},
		components:{
			pull,
	        mfooter,
	        product,
	        mprompt1
	    },
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.shopping-cart{
		background-color: #f0f0f0;
		font-size: 14px;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.address{
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
		}
		.commodity{
			background-color: #fff;
			.commodity-header{
				position: relative;
				height: 48px;
				border-bottom: .5px solid #e6e6e6;
				background-color: #fff;
				margin-top: 12px;
				display: flex;
				flex-direction: row;
				align-items: center;
				color: #262626;
			}
			.commodity-items{
				.commodity-item{
					background-color: #fff;
				    display: flex;
				    flex-direction: row;
				    position: relative;
				    border: none;
				    border-color: #f5f5f5;
				    border-bottom: 1px solid #f5f5f5;
				    margin-top: 0;
	    			.swiper-content{
	    				width: 100%!important;
	    				padding: 21px 0;
	    			}
	    			.swiper-delete{
	    				// font-size: 1.2em;
						width: 4em;
						white-space: nowrap;
						background: @color_main;
						color: #fff;
						position: relative;
						span{
							.positionCenter();
						}
					} 
					.marquee{
						float: left;
						margin-top: 26px;
						margin-right: 0;
					}
					.product{
						float: right;
						width: 85%;
						margin-left: 2%;
						border: none;
						font-size: 14px;
						padding: 0;
						img{
	    					.wh(70px,70px);
						}
						.name{
							padding-top: 0;
						}
						.cart-operate .cart-action {
						    bottom: -33px;
						}
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
				float: right;
			}
			.count-total{
				border-bottom: 1px solid #f5f5f5;
				padding: 15px;
			}
			.benefit-total{
				padding: 15px;
				border-bottom: 1px solid #f5f5f5;
				.product-benefit{
					strong{
						color: rgb(255, 72, 145);
					}
				}
				.freight{
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
			position: fixed;
			left: 0;
			bottom: 53px;
			z-index: 2;
			.wh(49px);
			background-color: #fff;
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
				width: 44%;
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
				padding:10px 0; 
				span{
					&:nth-of-type(1){
						i{
							color: rgb(255, 72, 145);
						}
					}
					&:nth-of-type(2){
						font-size: 10px;
						color: rgb(150, 150, 150);
					}
				}
			}
			.settlement-button{
				font-size: 1.1em;
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
				}
			}
		}
	}
	.marquee{
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
	}
</style>