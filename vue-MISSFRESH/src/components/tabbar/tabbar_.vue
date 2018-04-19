<template>
	<!-- <div class="tabbar"> -->
        <!-- 上滑加载 -->
        <!-- 上滑加载、下拉刷新 -->
		<div class="swiper-container pull-refresh">
			<div class="swiper-wrapper">
				<div class="swiper-slide container">
					<div class="swiper-slide list-group" ref="listGroup">
						<div class="list-group-item refresh-gif">
							<span></span>
						</div>


						<div class="clearfix list-group-item ticket-item" v-for="item in goods">
							{{item.text}}
						</div>



						<!-- <div class="clearfix list-group-item ticket-item">
							aaa
						</div>
						<div class="clearfix list-group-item ticket-item">
							aaa
						</div>
						<div class="clearfix list-group-item ticket-item">
							aaa
						</div> -->



						




					</div>
					
				</div>
			</div>
			
			<div class="loadtip">上拉加载更多</div>
			<div class="swiper-scrollbar"></div>
		</div>
	<!-- </div> -->
</template>
<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	// var Swiper =require('../../plugins/swiper.min.js');
	// var Swiper =require('src/plugins/swiper.min.js');
    // console.log(Swiper);
    // import * as Swiper from 'src/plugins/swiper.min.js';

	export default {
		data(){
			return {
				goods: [
				
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					}
				],
				loadFlag: true,
				num: 0
			}
		},
		mounted (){
			// console.log(new Swiper());
			var _this=this;
			this.$nextTick(() => {
				if (!this.pullRefresh) {
					/*_this.pullRefresh= new Swiper('.pull-refresh',{
						// slidesOffsetBefore: 77,
						direction: 'vertical',
						scrollbar: '.swiper-scrollbar',
						slidesPerView: 'auto',
						initialSlide :0,
					    observer:true,//修改swiper自己或子元素时，自动初始化swiper
					    observeParents:true,//修改swiper的父元素时，自动初始化swiper
						// autoplayDisableOnInteraction : false,
						// freeMode: true,
						// observer:true,//修改swiper自己或子元素时，自动初始化swiper
    		// 			observeParents:true,
    					freeMode: true,//slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
						on: {
							// 触摸释放时执行
							touchEnd: function(swiper) {
								_this.touchEnd();
					        }
						}
						
				    });			*/

				    _this.refresh();

				}
            })
		},
		methods: {
			refresh: function () {
				var _this=this;
				// _this.pullRefresh=null;
				_this.pullRefresh= new Swiper('.pull-refresh',{
					// slidesOffsetBefore: 77,
					direction: 'vertical',
					scrollbar: '.swiper-scrollbar',
					slidesPerView: 'auto',
					initialSlide :0,
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
				    observeParents:true,//修改swiper的父元素时，自动初始化swiper
					freeMode: true,//slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
					on: {
						// 触摸释放时执行
						touchEnd: function(swiper) {
							// console.log('加载');
							_this.touchEnd();
				        }
					}
					
			    });		
			},
				
			touchEnd: function () {
				// console.log(this.pullRefresh);
				var _this=this,
				pullRefresh=this.pullRefresh;
				// var viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				// var contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
				var viewHeight=pullRefresh.$wrapperEl[0].offsetHeight,
				contentHeight=pullRefresh.slides[0].offsetHeight;
				// console.log(pullRefresh.translate<=viewHeight-contentHeight-50&&pullRefresh.translate<0,pullRefresh.translate >= 50);
	            // 上拉加载

	            if(pullRefresh.translate<=viewHeight-contentHeight-50&&pullRefresh.translate<0) {
	            	// if(loadFlag){
	            	// 	$(".loadtip").html('正在加载...');
	            	// }else{
	            	// 	$(".loadtip").html('没有更多啦！');
	            	// }

	            	setTimeout(function() {
	            		



	                	for(var i = 0; i <2; i++) {
	                		_this.num++;
		                	var div = document.createElement("div");
		                	div.className = "clearfix list-group-item ticket-item";
		                	div.innerHTML = _this.num;
		                	_this.$refs.listGroup.appendChild(div)
		                }
		                console.log(pullRefresh.translate);
	                    pullRefresh.update(); // 重新计算高度;
	                    // pullRefresh.updateSize(); // 重新计算高度;
	                    // _this.pullRefresh.destroy(false);





	                   /* 
						


						var arr=_this.goods;
	            		for(var i = 0; i <2; i++) {
	            			_this.num++;
	            			// oi++;
	               //  		$(".list-group").eq(pullRefresh2.activeIndex).append('<li class="list-group-item">我是加载出来的'+oi+'...</li>');
	               //  		$(".list-group").eq(0).append(
	               //  			'<div class="clearfix list-group-item ticket-item">'+
	               //  			i+
	               //  			'</div>');

	                		arr.push({
	                			text: _this.num
	                		})
						}
						_this.goods=arr;


	                   _this.$nextTick(function () {
	                    	// _this.pullRefresh.slideTo(0,pullRefresh.translate, false);
				            _this.refresh();
				            setTimeout(function(){
				            	console.log('滑动');
				            	pullRefresh.slideTo(0,1000, false);
				            	// _this.pullRefresh
				            	// pullRefresh.slides[0].style.transform="translate3d(0px,"+pullRefresh.translate+"px,0px)"
				            	// container.style.transform="translate3d(0px,"+pullRefresh.translate+"px,0px)"
				            	// pullRefresh.slides[0].style.transition="50ms"
				            },500)
				        })*/
	                }, 800);
	            }
	            
	            // 下拉刷新
	            if(pullRefresh.translate >= 50) {
	            	// $(".loadtip").html('上拉加载更多');
	            	// loadFlag = true;

	            	setTimeout(function() {
	            		// $(".loadtip").show(0);
	                    //刷新操作
	                    pullRefresh.update(); // 重新计算高度;
	                    // pullRefresh.updateSize(); // 重新计算高度;
	                }, 1000);
	            }
	            return false;
	        }
					
			
        },
        components: {

		},
	}
</script>
<style lang='less'>
	.tabbar{
		width: 100%;
		height: 100%;
	}
	#top {
		position:absolute;
		top:0;
		z-index:5;
		width:100%;
		background:#fff;
		.addr {
			height:36px;
			margin:0 auto;
			display:block;
		}
		#nav {
			border-bottom:1px solid #ebebeb;
			height: 40px;
			.swiper-slide{
				text-align: center;
				span {
					text-align:center;
					display: inline-block;
					height: 100%;
					line-height: 40px;
					font-size:14px;
					color:#333333;
					position: relative;
				}
			}
			.swiper-slide.active{
				span:after{
					content: "";
					position: absolute;
					left: 0;
					bottom: 0px;
					height: 0;
					width: 100%;
					border-bottom: 2px solid #ff4891;
				}
			}
		}
	}
	
	#page {
		margin-bottom:50px;
		height:100%;
		.slidepage {
			height: auto;
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
		}
	}
	.scroll {
		height:100%;
	}
	.slidescroll {
		height:auto;
	}

	.swiper-slide{
		height: auto;
	}


	/*上滑加载、下拉刷新*/
	.swiper-container.pull-refresh{
		overflow: visible;
		// margin-top: -43px;
	}
	// .pull-refresh .loadtip { display: block;width: 100%;line-height: 40px; height: 40px;text-align: center;color: #999;border-top: 1px solid #ddd;}
	// .pull-refresh .loadtip{
	// 	position: absolute;
	// 	left: 0;
	// 	bottom: 0;
	// }
	.swiper-container.pull-refresh{
		width: 100%;
		// height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
	}
	// .pull-refresh .swiper-slide{height: auto;}
	// .pull-refresh .list-group{padding-left: 0;margin-bottom: 20px;}
	.pull-refresh .list-group-item{    
		position: relative; 
		display: block;
		padding: 10px 15px;
		margin-bottom: -1px;
		background-color: #fff;
		border: 1px solid #ddd;
		// display: inline-block;
	}
	// .pull-refresh .list-group-item:first-child {border-top-left-radius: 4px;border-top-right-radius: 4px;}
	// .pull-refresh .list-group{
	// 	margin-top: -43px;
	// }
	// .swiper-container .carousel{
	// 	padding: 0;
	// 	border: none;
	// }
	.pull-refresh .refresh-gif{
		text-align: center;
		padding: 0;
		height: 43px;
		border: none;
	}
	.pull-refresh .refresh-gif span{
		text-align: center;
		display: inline-block;
		height: 43px;
		width: 43px;
		background: url(~images/loading.gif) no-repeat;
		background-size: 100% 100%;
	}

	/*票*/
	.ticket-item{
		// height: 90px;
		padding: 9px 2%;
		box-sizing: border-box;
	}

	

	


</style>