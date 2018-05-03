<template>
	<div class="shopping-cart">
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
			<ul class="commodity-items products">
				<li class="commodity-item clearfix" v-for="product in products">
					<i class="marquee" @click="productCheck(product)" :class="{active:product.checked}"></i>
					<div class="product">
						<div class="product-img">
							<span class="hot_0"></span>
							<img src="~src/images/product_0.jpg">
						</div>
						<div class="product-info">
							<p class="name">{{product.name}}</p>
							<ul class="preferential">
								<li v-for="prefer in product.preferential">{{prefer}}</li>
							</ul>
							<p class="price">
								黑五会员价 ¥
								<span>{{product.vip}}</span>
							</p>
							<p class="vip">
								黑五大促销 ¥
								<span>{{product.price}}</span>
							</p>
						</div>
					</div>
					<div class="product-number">
						<span class="reduce-button" v-on:click="reduce(product)"></span>
						<span class="count">{{product.number}}</span>
						<span class="add-button"  v-on:click="add(product)"></span>
					</div>
				</li>
			</ul>
		</div>
		<!-- 商品总价 -->
		<div class="total-price">
	        <div class="count-total">
	        	<span>商品总价</span>
	        	<strong>¥ {{totalPrice}}</strong>
		    </div>
		    <div class="benefit-total">
		    	<ul class="product-benefit">
		    		<li class="benefit-item" v-for="product in products" v-show="product.benefit.orNot">
		    			<span>{{product.benefit.content}}</span>
	        			<strong>-¥ {{product.benefit.text}}</strong>
		    		</li>
		    	</ul>
		    	<div class="paid">
		    		<span>商品实付</span>
	        		<strong>¥{{paid<0?0:paid}}</strong>
		    	</div>
		    	<div class="freight">
		    		<span>运费<i>实付满69元包邮</i></span>
	        		<strong >
	        			<i v-if="freight!='免邮'">¥</i>{{freight}}
	        		</strong>
		    	</div>
		    </div>
		    <div class="total">
	    		合计
	    		<strong>
	    			¥ {{total}}
	    		</strong>
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
	    <!-- 结算 -->
	    <div class="settlement">
	    	<div class="check-all-button">
	    		<i class="marquee" @click="checkedAll" :class="{active:checkAll}"></i>
				全选
	    	</div>
	    	<div class="card-info">
    			<span>
    				合计
    				<i>¥ {{total+cardMoney}}</i>
    			</span>
    			<span>
    				<i v-if="freight!='免邮'">¥</i>{{freight}}
    				<strong v-if="cardMoney!=0">
    					,包含会员卡费用<i>{{cardMoney}}</i>元
    				</strong>
    			</span>
    		</div>
    		<div class="settlement-button">
    			去结算
    		</div>
	    </div>
		<foot-guide></foot-guide>
	</div>
</template>
<script>
	import footGuide from 'src/components/footer/footGuide'
	export default{
		data(){
		  	return {
		  		checkAll: false,
		  		totalPrice: 0,
		  		paid: 0,
		  		freight: 0,
		  		total: 0,
		  		products: [
					{
						checked: false,
						number: 0,
						hot: 0,
						img: '',
						name: '月盛斋牛肉500g',
						preferential: [
							'限每人1份',
							'进口检验合格'
						],
						price: 29.8,
						vip: 19.8,
						benefit: {
							orNot: true,
							content: '促销优惠',
							text: 2
						}
					},
					{
						checked: false,
						number: 0,
						hot: 1,
						img: '',
						name: '羔羊肉片300g',
						preferential: [
							'进口检验合格'
						],
						price: 29.7,
						vip: 19.8,
						benefit: {
							orNot: false,
							content: '限时优惠',
							text: 3
						}
					}
				],
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
				cardMoney: 0
		  	}
	  	},
		created (){
	    	this.calculateTotal();
	    },
		methods: {
			/*商品总价计算*/
		    calculateTotal(){
		      	var all=0;
		      	this.products.forEach(function (item) {
			        if (item.checked) {
			          all+=item.price*item.number; 
			        } 
			    })  
			    this.totalPrice=all;
			    this.actuallyPaid();
		    },
		    /*商品实付计算*/
		    actuallyPaid(){
		    	var all=0;
		      	this.products.forEach(function (item) {
			        if (item.benefit.orNot) {
			          all+=item.benefit.text; 
			        } 
			    })  
			    this.paid=this.totalPrice-all;
			    this.freightCharge();
			    this.totalCount();
		    },
		    /*运费计算*/
		    freightCharge(){
		    	if (this.paid>=69) {
		    		this.freight='免邮';		
		    	} else{
		    		console.log(this.paid);
		    		if (this.paid<=0) {
		    			this.freight='免邮';			
		    		}else{
			    		this.freight=10;
		    		}
		    	}
		    },
		    /*商品合计计算*/
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
		   	/*单个商品减少*/
		    reduce(item){
		      	if (item.number==0) return;
		      	item.number--;
		      	this.calculateTotal();
		    },
		    /*单个商品增加*/
		    add(item){
		      	item.number++;
		      	this.calculateTotal();
		    },
		    /*单个商品选择*/
		    productCheck(item){
		    	this.calculateTotal();
		      	var this_=this;
		      	var num=0;
		      	item.checked=!item.checked;
		      	this.products.forEach(function (item) {
			        if (!item.checked) {
			          	this_.checkAll=false;  
			          	return;
			        } else{
			          	num++;  
			        }
			    }) 
			    if (num==this.products.length) {
			        this.checkAll=true;     
			    }
		    },
		    /*商品全部选择*/
		    checkedAll(){
			    this.checkAll=!this.checkAll;
			    if (this.checkAll) {
			        var total=0;
			        this.products.forEach(function (item) {
			          	item.checked=true;
			          	total+=item.price*item.number; 
			        }) 
			        this.totalPrice=total;     
			    } else{
			        this.products.forEach(function (item) {
			          	item.checked=false;
			        }) 
			        this.totalPrice=0;    
			    }
		    },
		    /*会员卡选择*/
		    cardCheck(card){
		    	var state=card.checked;
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
							
			}
		},
		components:{
	        footGuide
	    },
	}
</script>
<style lang="less">
	.shopping-cart{
		padding-bottom: 145px;
		background-color: #f0f0f0;
		font-size: 14px;
		.address{
			height: 49px;
			text-align: center;
			line-height: 49px;
			color: #262626;
			background-color: #fff;
			.coordinate{
				content: '';
				width: 24px;
				height: 24px;
				display: inline-block;
				vertical-align: middle;
				margin-right: .1rem;
				background: url(~src/images/icon/position-icon.png) no-repeat;
				background-size: 100% 100%;
			}
			.arrow{
				content: '';
				width: 16px;
				height: 16px;
				display: inline-block;
				vertical-align: middle;
				background: url(~src/images/icon/cart-position-select.png) no-repeat;
				background-size: 100% 100%;
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
				display: -webkit-box;
				display: -webkit-flex;
				display: -moz-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-direction: normal;
				-webkit-box-orient: horizontal;
				-webkit-flex-direction: row;
				-moz-flex-direction: row;
				-ms-flex-direction: row;
				flex-direction: row;
				-webkit-box-align: center;
				-ms-flex-align: center;
				-webkit-align-items: center;
				-moz-align-items: center;
				align-items: center;
				color: #262626;
			}
			.commodity-items{
				.commodity-item{
					background-color: #fff;
				    display: -webkit-box;
				    display: -webkit-flex;
				    display: -moz-flex;
				    display: -ms-flexbox;
				    display: flex;
				    -webkit-box-direction: normal;
				    -webkit-box-orient: horizontal;
				    -webkit-flex-direction: row;
				    -moz-flex-direction: row;
				    -ms-flex-direction: row;
				    flex-direction: row;
				    position: relative;
				    border: none;
				    border-color: #f5f5f5;
				    padding-top: 20px;
				    padding-bottom: 23px;
				    border-bottom: 1px solid #f5f5f5;
				    padding: 21px 0;
	    			margin-top: 0;
					.marquee{
						float: left;
						margin-top: 26px;
						margin-right: 0;
					}
					.product{
						float: right;
						width: 87.8%;
						border: none;
						font-size: 14px;
						padding: 0;
						img{
							width: 70px;
	    					height: 70px;
						}
						.name{
							padding-top: 0;
						}
					}
					.product-number{
						position: absolute;
						right: 10px;
						bottom: 10px;
						white-space:nowrap;
						.reduce-button{
							width: 22px;
							height: 22px;
							display: inline-block;
							text-align: center;
							position: relative;
							background: url(~src/images/icon/reduce-img-cart.png) no-repeat;
							background-size: 100% 100%;
						}
						.count{
							width: 25px;
							height: 22px;
							background-color: transparent;
							color: #4b4b4b;
							line-height: 20px;
							display: inline-block;
							border: none;
							border-radius: 0;
							text-align: center;
							vertical-align: top;
							margin: 0;
							font-size: 14px;
						}
						.add-button{
							width: 22px;
							height: 22px;
							display: inline-block;
							text-align: center;
							position: relative;
							background: url(~src/images/icon/add-img-cart.png) no-repeat;
							background-size: 100% 100%;
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
	    	.vip-card{
	    		height: 49px;
	    		text-align: left;
	    		padding: 0 15px;
	    		border-bottom: 1px solid #f5f5f5;
	    		width: 100%;
	    		display: table;
	    		box-sizing: border-box;
	    		.card{
	    			float: left;
	    			vertical-align: middle;
	    			height: 18px;
	    			width: 60px;
	    			margin-top: 15px;
	    			background: url(~src/images/icon/membership_card.png) no-repeat;
					background-size: auto 100%;
	    		}
	    		.card.active{
	    			background: url(~src/images/icon/card_active.png) no-repeat;
					background-size: auto 100%;
	    		}
	    		.card-info{
	    			float: left;
	    			height: 100%;
	    			width: auto;
	    			i{
						color: #FF4891;
					}
	    			span{
	    				display: block;
	    				width: 100%;
	    				height: 50%;
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
	    				width: 66%;
	    				height: 50px;
	    			}
	    			.marquee{
	    				float: right;
	    				margin-top: 12px;
	    			}
					&:nth-of-type(1){
						span{
							background: url(~src/images/icon/card_1.png) no-repeat;
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
			bottom: 47px;
			width: 100%;
			height: 49px;
			background-color: #fff;
			.check-all-button{
				float: left;
				height: 100%;
				line-height: 49px;
				position: static;
				margin-top: 0;
				background: #fff;
				padding-right: 10px;
				-webkit-box-flex: 0;
				-webkit-flex: 0 0 78px;
				-moz-box-flex: 0;
				-moz-flex: 0 0 78px;
				-ms-flex: 0 0 78px;
				flex: 0 0 78px;
				.marquee{
					vertical-align: top;
					margin-top: 15px;
					margin-right: 8px;
				}
			}
			.card-info{
				float: left;
				display: -webkit-box;
				display: -webkit-flex;
				display: -moz-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-direction: normal;
				-webkit-box-orient: vertical;
				-webkit-flex-direction: column;
				-moz-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				-moz-box-flex: 1;
				-moz-flex: 1;
				-ms-flex: 1;
				flex: 1;
				border-top: .5px solid #e6e6e6;
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
				float: right;
				font-size: 18px;
				background: #ff4891;
				height: 100%;
				width: 130px;
				line-height: 49px;
				text-align: center;
				color: #fff;
				&:after{
					content: ' ';
					width: 7px;
					height: 10px;
					background: url(~src/images/icon/youjiantou.png) no-repeat;
					background-size: 7px 8px;
					display: inline-block;
					line-height: 49px;
					vertical-align: middle;
				}
			}
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
			display: -webkit-box;
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-direction: normal;
			-webkit-box-orient: horizontal;
			-webkit-flex-direction: row;
			-moz-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			-moz-align-items: center;
			align-items: center;
			color: #262626;
		}
		.commodity-items{
			.commodity-item{
				background-color: #fff;
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: -moz-flex;
			    display: -ms-flexbox;
			    display: flex;
			    -webkit-box-direction: normal;
			    -webkit-box-orient: horizontal;
			    -webkit-flex-direction: row;
			    -moz-flex-direction: row;
			    -ms-flex-direction: row;
			    flex-direction: row;
			    position: relative;
			    border: none;
			    border-color: #f5f5f5;
			    padding-top: 20px;
			    padding-bottom: 23px;
			    border-bottom: 1px solid #f5f5f5;
			    padding: 21px 0;
    			margin-top: 0;
				.marquee{
					float: left;
					margin-top: 26px;
					margin-right: 0;
				}
				.product{
					float: right;
					width: 87.8%;
					border: none;
					font-size: 14px;
					padding: 0;
					img{
						width: 70px;
    					height: 70px;
					}
					.name{
						padding-top: 0;
					}
				}
				.product-number{
					position: absolute;
					right: 10px;
					bottom: 10px;
					white-space:nowrap;
					.reduce-button{
						width: 22px;
						height: 22px;
						display: inline-block;
						text-align: center;
						position: relative;
						background: url(~src/images/icon/reduce-img-cart.png) no-repeat;
						background-size: 100% 100%;
					}
					.count{
						width: 25px;
						height: 22px;
						background-color: transparent;
						color: #4b4b4b;
						line-height: 20px;
						display: inline-block;
						border: none;
						border-radius: 0;
						text-align: center;
						vertical-align: top;
						margin: 0;
						font-size: 14px;
					}
					.add-button{
						width: 22px;
						height: 22px;
						display: inline-block;
						text-align: center;
						position: relative;
						background: url(~src/images/icon/add-img-cart.png) no-repeat;
						background-size: 100% 100%;
					}
				}
			}	
		}
	}
	.marquee{
		display: inline-block;
		text-align: center;
		padding: 6px 12px 0 10px;
		box-sizing: border-box;
		width: 22px;
		height: 22px;
		display: inline-block;
		background: url(~src/images/icon/unchecked.png) no-repeat;
		background-size: 100% 100%;
		margin-right: 11px;
		margin-left: 11px;
	}
	.marquee.active{
		background: url(~src/images/icon/checked.png) no-repeat;
		background-size: 100% 100%;
	}
</style>