<template>
	<div class="shopping-cart settlement-list">
		<mheader title="商品列表" :functionOrLink="true" v-on:backFunction="backFunction"></mheader>
		<pull>
			<ul class="settlement-list-products">
				<li class="settlement-list-product clearfix" v-for="(item,index) in products" :key="index">
					<product :product="item" :subtitle="false" :priceUp="item.price_up" :priceDown="item.price_down"></product>
				</li>
			</ul>
		</pull>	
		
	</div>
</template>
<script>
	import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
   	import mheader from 'src/components/mheader/mheader'
	import pull from 'src/components/pull/pull'
	import product from 'src/components/product/product'
	export default{
		data(){
		  	return {
		  		
		  	}
	  	},
	    mounted: function () {
	    	this.$nextTick(() => {
				if (!this.productsSwiper) {
					this.settlementList();
				}
			})
	    },
		methods: {
            // 页面显示或者隐藏
			backFunction(){
				this.$emit("backFunction");
			},
            // 商品图片列表
			settlementList() {
				var _this=this;
				this.productsSwiper=new Swiper('.products-img', {
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
		},
		props: ['products'],
		components:{
			mheader,
			pull,
	        product
	    },
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.shopping-cart.settlement-list{
		padding-top: 53px;
		.product{
			padding: 6px 15px;
			box-sizing: border-box;
			.product-link{
				.product-item-img{
				    width: 30%;
				    .product-img {
				    	height: 5.2rem;
				    	width: 5.2rem;
				    	border: 1px solid #e6e6e6;
				    	border-radius: 4px;
				    	overflow: hidden;
				    }
				}
				.product-info{
					width: 70%;
					.preferential{
						visibility: hidden;
					}
					.price{
						padding-top: 1.125rem;
						.cart-operate,.price-up{
							visibility: hidden;
						}
					}
				}
			}
			
		}
	}
</style>