<template>
	<div class="swiper-container banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="~images/carousel/0.jpg">
			</div>
			<div class="swiper-slide">
				<img src="~images/carousel/1.jpg">
			</div>
			<div class="swiper-slide">
				<img src="~images/carousel/2.jpg">
			</div>
			<div class="swiper-slide">
				<img src="~images/carousel/3.jpg">
			</div>
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
		mounted(){
			this.$nextTick(()=>{
				var carousel = new Swiper('.banner', {
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction',
						renderFraction: function(currentClass, totalClass) {
							return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
						},
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
