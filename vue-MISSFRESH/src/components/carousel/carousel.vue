<template>
	<!-- <div> -->
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
	<!-- </div>   -->
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
	
</style>
