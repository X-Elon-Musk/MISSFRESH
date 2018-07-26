<template>
    <div class="swiper-container pull">
        <div class="swiper-wrapper">
          	<div class="swiper-slide">
				<slot></slot>
				<div class="swiper-scrollbar"></div>
      		</div>
        </div>
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
		mounted (){
			this.$nextTick(() => {
				if (!this.pull) this.swiperPull();
			})
		},
		methods: {
			swiperPull() {
				let _this=this;
				this.pull= new Swiper('.pull',{
					slidesOffsetBefore: 0,
					direction: 'vertical',
					scrollbar: '.swiper-scrollbar',
					slidesPerView: 'auto',
					initialSlide :0,
				    observer:true,
				    observeParents:true,
					freeMode: true,
					on: {
						touchStart: function() {
					        // console.log(2222);
					    },
						touchEnd: function(swiper) {
							// console.log(11111);
				        },
				        slideChangeTransitionStart: function(){
					    	console.log(333);
					    },
					    // 回调函数，Swiper切换到初始化位置时执行。
					    reachBeginning: function () {
					    	console.log(44444444);
					    	console.log(_this);
					    	console.log(_this.backFunction);
					    	if (_this.backFunction) {
					    		console.log('+++++++++');
					    		_this.$emit("backFunction");		
					    	}
					    	
					    },
					    progress: function () {
					    	// console.log(22222);
					    },
					    fromEdge: function () {
					    	// console.log(666666);
					    }
					}
					
			    });		
			}
		},
		props: ['backFunction']
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.pull{
		overflow: visible;
		.wh(100%);
		.swiper-slide{
			height: auto;
			.swiper-scrollbar{
				display: none;
			}
		}
		
	}
</style>
