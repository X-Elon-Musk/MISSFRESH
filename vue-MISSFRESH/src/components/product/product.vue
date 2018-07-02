<template>
    <div class="product">
    	<router-link :to="{path: '/ug/productDetail',query:{product_id: product.product_id,product_index: product.product_index}}" tag="div" class="clearfix product-link">
			<div class="f_l product-item-img">
				<img src="" v-lazy="product.image" alt="" class="product-img">
				<img :src="product.promote_tag" alt="" class="product-tag">
			</div>
			<div class="f_r product-info">
				<p class="name">{{product.name}}</p>
				<p class="point" v-if="subtitle">{{product.subtitle}}</p>
				<ul class="preferential">
					<li v-for="(item,index) in product.product_tags" :key="index">{{item.name}}</li>
				</ul>
				<p class="price">
					<price :price="priceDown.price" class="price-now price-down"></price>
					<!-- 商城价 -->
					<price :price="priceUp.price" class="price-original price-up"></price>
				</p>
				<!-- <p class="vip">
					会员价
					<price :price="priceDown.price"></price>
				</p> -->
				
			</div>
		</router-link>
		<div class="cart-operate">
			<img :src="product.cart_image" class="shopping-cart-img" style="opacity: 0.3;" v-if="!productNum" @touchstart.stop="addToCart(product.id,product.image,product.name,product.product_tags,priceUp.price,priceDown.price,$event)">
			<div class="clearfix cart-action" v-if="productNum">
				<span class="minus-action" @touchstart.stop="minusOutCart(product.id,$event)"></span> 
				<span class="count">{{productNum}}</span> 
				<span class="add-action" @touchstart.stop="addToCart(product.id,product.image,product.name,product.product_tags,priceUp.price,priceDown.price,$event)"></span>
			</div>
		</div>
	</div> 
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import price from 'src/components/price/price'
	export default{
		data(){
			return {
				cartStatus: true
			}
		},
		mounted: function () {
			// console.log(this.productNum);
		},
		computed: {
			...mapState([
                's_cartList','s_mpromptStatus'
            ]),
            //shopCart变化的时候重新计算当前商品的数量
            productNum: function (){
                if (this.s_cartList&&this.s_cartList[this.product.id]) {
                    return this.s_cartList[this.product.id]['num'];
                }else {
                    return 0;
                }
            },
		},
		methods: {
			...mapMutations([
                'ADD_CART','REDUCE_CART','SET_MPROMPT'
            ]),
            minusOutCart(id,event) {
				this.REDUCE_CART({id});
				if (this.mpromptExist&&this.s_mpromptStatus) {
					this.SET_MPROMPT({status: true});			
				}
			},
			addToCart(id,image,name,product_tags,price_up,price_down,event) {
				this.ADD_CART({id,image,name,product_tags,price_up,price_down});
			}
		},
		props: ['product','subtitle','priceUp','priceDown','mpromptExist'],
		components: {
			price
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.product{
		width: 100%;
	    background-color: #fff;
		display: flex;
		position: relative;
		border: none;
		border-color: #f5f5f5;
		padding-top: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid #f5f5f5;
		position: relative;
		.product-link{
			position: relative;
			// height: auto;
			// width: 100%;
			.wh(auto);
			.product-item-img{
				// width: 40%;
				// height: auto;
				.wh(auto,40%);
				position: relative;
				.product-img{
					display: block;
					border-radius: 0;
					// width: 120px;
					// height: 120px;
					.wh(120px,120px);
				}
				.product-tag{
					position: absolute;
					top: 0;
					left: 0px;
					// height: 32px;
					// width: 24px;
					.wh(32px,24px);
					
					// z-index: 2;
				}
			}
			.product-info{
				width: 60%;
				text-align: left;
				margin: 0;
				color: #262626;
				line-height: 20px;
				position: relative;
				padding-left: 2%;
				box-sizing: border-box;
				.name{
					font-size: 14px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					letter-spacing: -1px;
					color: #474245;
				}
				.point{
					font-size: 12px;
					color: #969696;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.preferential{
					li{
						display: inline-block;
						border-radius: 2px;
						font-size: 9px;
						height: 13px;
						line-height: 11px;
						border: 1px solid #d165e1;
						padding: 1px;
						// color: #d165e1;
						background: #fff;
						margin-right: 5px;
						border-color: @color_main;
						color: @color_main;
						opacity: 0.5;
					}
				}
				.price{
					line-height: 1.4;
					font-size: 12px;
					color: @color_main;
					padding-top: 18px;
					.price-original{
						text-decoration: line-through;
						color: @color_gray;
					}
				}
			}
		}
		.cart-operate{
			position: absolute;
			bottom: 32px;
			right: 0;
			.shopping-cart-img{
				position: absolute;
				right: 15px;
				bottom: -10px;
				// width: 46px;
				// height: 46px;
				.wh(46px,46px);
			}
			.cart-action{
				.wh(1.2em,4.8em);
			    position: absolute;
			    right: 6px;
				bottom: 8px;
				background: transparent;
				span{
					float: left;
				}
				.minus-action{
				    .bg(1.2em,1.2em,transparent,'~images/icon/minus-action.png',100% 100%);
				}
				.count{
					line-height: 1.2em;
				    text-align: center;
				    min-width: 2.4em; 
				}
				.add-action{
					.bg(1.2em,1.2em,transparent,'~images/icon/add-action.png',100% 100%);
				}
			}
		}
	}
	.price-down{
		color: @color_main;
	}
	.price-up{
		text-decoration: line-through;
		color: @color_gray;
	}
</style>
