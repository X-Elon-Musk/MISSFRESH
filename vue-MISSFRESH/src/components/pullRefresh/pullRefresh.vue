<template>
    <div class="swiper-container scroll pull-refresh">
        <div class="swiper-wrapper">
          	<div class="swiper-slide slidescroll list-group" ref="listGroup">
				
				<!-- 插槽 -->
				<slot></slot>
				<div class="swiper-scrollbar"></div>

      		</div>
        </div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import {isArray} from 'src/config/mUtils'

    export default{
		data(){
			return {
				//当前导航栏所处位置
				// tabIndex: 0,
				//上滑加载初始的位置
				startPosition:0,
				//上滑加载滑动的位置
				translate: 0
			}
		},
		props: ['tabIndex'],
		mounted (){
			this.$nextTick(() => {
				if (!this.pullRefresh) this.refresh();
			})
		},
		methods: {
			//下拉刷新、上滑加载初始化函数
			refresh: function () {
				var _this=this;
				this.pullRefresh= new Swiper('.scroll',{
					slidesOffsetBefore: 0,
					direction: 'vertical',
					scrollbar: '.swiper-scrollbar',
					slidesPerView: 'auto',
					initialSlide :0,
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
				    observeParents:true,//修改swiper的父元素时，自动初始化swiper
					freeMode: true,//slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
					on: {
						touchStart: function() {
					        _this.startPosition=this.translate;
					    },
						// 触摸释放时执行
						touchEnd: function(swiper) {
							_this.translate=this.translate;
							_this.touchEnd();
				        }
					}
					
			    });		
			},
			// 下拉刷新、上滑加载动作触摸释放时执行
			touchEnd: function () {
				var _this=this;
				//console.log(this.translate,this.startPosition);
				if (this.translate<this.startPosition) {
	                setTimeout(()=>{
	                	//发送ajax请求
	                	this.$emit('getData');
	                	// 重新计算高度;
	                  	if (isArray(this.pullRefresh)) {
	                  		// this.pullRefresh[this.tabIndex].update(); 		
	                  		this.pullRefresh.forEach((item,index)=>{
	                  			this.pullRefresh[index].update();
	                  		}); 		
	                  	} else{
	                  		this.pullRefresh.update(); 
	                  	}
	                }, 300);
	        	}
	            return false;
	        }
		},
	}
</script>
<style lang="less">
	/*上滑加载、下拉刷新*/
	.swiper-container.pull-refresh{
		// position: absolute;
		// left: 0;
		// top: 0;
		// bottom: 0;
		overflow: visible;
		margin-bottom: 53px;
		width: 100%;
		height: 100%;
		.list-group-item{    
			position: relative; 
			display: block;
			margin-bottom: -1px;
			background-color: #fff;
			box-sizing: border-box;
		}
		.swiper-scrollbar{
			display: none;
		}
	}
</style>
