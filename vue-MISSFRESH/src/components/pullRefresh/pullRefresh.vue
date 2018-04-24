<template>
    <div class="swiper-container scroll pull-refresh">
        <div class="swiper-wrapper">
          	<div class="swiper-slide slidescroll list-group" ref="listGroup">
				
				<!-- 刷新GIF -->
				<div class="list-group-item refresh-gif" v-show="gif">
					<span></span>
				</div>
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
		props: ['tabIndex','gif'],
		mounted (){
			console.log(this.pullRefresh);
			this.$nextTick(() => {
				if (!this.pullRefresh) this.refresh();
				// console.log(typeof this.pullRefresh);
            })
		},
		methods: {
			//下拉刷新、上滑加载初始化函数
			refresh: function () {
				var _this=this;
				this.pullRefresh= new Swiper('.scroll',{
					slidesOffsetBefore: _this.gif?34:0,
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
				console.log(this.translate,this.startPosition);
				if (this.translate<this.startPosition) {
	                setTimeout(function() {
	                	//发送ajax请求
	                	_this.$emit('getData');
	                	console.log(_this.pullRefresh,_this.isArray(_this.pullRefresh));
	                  	// 重新计算高度;
	                  	if (_this.isArray(_this.pullRefresh)) {
	                  		_this.pullRefresh[_this.tabIndex].update(); 		
	                  	} else{
	                  		console.log('刷新');
	                  		_this.pullRefresh.update(); 
	                  	}
	                }, 300);
	        	}
	            return false;
	        },

	        isArray: function (obj) {
	        	return Object.prototype.toString.call(obj)=='[object Array]';
	        }
	        	
		}
	}
</script>
<style lang="less">
	/*上滑加载、下拉刷新*/
	.swiper-container.pull-refresh{
		// position: absolute;
		// left: 0;
		// top: 0;
		// bottom: 0;
		// z-index: 1000;
		overflow: visible;
		// margin-top: -43px;
		margin-bottom: 53px;
		width: 100%;
		height: 100%;
		.refresh-gif{
			text-align: center;
			padding: 0;
			height: 43px;
			border: none;
			span{
				text-align: center;
				display: inline-block;
				height: 43px;
				width: 43px;
				background: url(~images/loading.gif) no-repeat;
				background-size: 100% 100%;
			}
		}
		.list-group-item{    
			position: relative; 
			display: block;
			/*padding: 10px 15px;*/
			// padding: 10px 2%;
			margin-bottom: -1px;
			background-color: #fff;
			box-sizing: border-box;
			/*border: 1px solid #ddd;*/
		}
		.swiper-scrollbar{
			display: none;
		}
	}
</style>
