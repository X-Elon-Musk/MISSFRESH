<template>
	<div class="swiper-container banner">
		<div class="swiper-wrapper">
			
			<template v-if="link">
				<!-- <router-link  v-for="(item,index) in banner" :key="index" :to="{path: item.link,query:{id: item.product_id,index: item.product_index}}" tag="div" class="swiper-slide"> -->
				<router-link  v-for="(item,index) in banner" :key="index" :to="{path: '/ug/productDetail',query:{product_id: item.product_id,product_index: item.product_index}}" tag="div" class="swiper-slide">
						<img :src="item.image" class="banner-img">
				</router-link>
			</template>
			<template v-else>
				<div class="swiper-slide product-detail-img" v-for="(item,index) in banner" :key="index">
					<img :src="item" class="banner-img">
				</div>
			</template>

		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
	export default{
		data(){
			return {
				
			}
		},
		props: ['banner', 'link'],
		mounted(){
			var _this=this;
			this.$nextTick(()=>{
				var carousel = new Swiper('.banner', {
					// loop: true,
					observer:true,
      				observeParents:true,
					pagination: {
						el: '.swiper-pagination',
						type: 'custom',
						renderCustom: function (swiper, current, total) {
				          	return current + '/' + total;
				        }
					},
				});
			})
		}
	}
</script>
<style lang="less">
	.banner{
		img {
			width:100%;
			display:block;
		}
		.product-detail-img{
			img{
				// width: 75%;
				margin: 0 auto;
			}
		}
		.swiper-pagination {
			left:auto;
			right:7px;
			bottom:7px;
			width:auto;
			padding:2px 7px;
			border-radius:10px;
			color:#fff;
			background:rgba(0,0,0,.3);
			font-size: 14px;
		}
	}
</style>
