<template>
	<div class="tabbar">
        <div id="top">
        	<div class="addr"></div>
        	<div class="swiper-container" id="nav" ref="tabNav">
        		<div class="swiper-wrapper" ref="tabItems">
        			<div class="swiper-slide" v-for="(item,index) in tabSlide" @click="tabClick(index,$event)" :class="{active:tabIndex==index}">
        				<span>{{item.text}}</span></div>
					<!-- <div class="bar">
						<div class="color"></div>
					</div> -->
				</div>
			</div>
		</div>
		<div class="swiper-container" id="page" ref="page">
		  	<div class="swiper-wrapper">

			    <!-- <div class="swiper-slide slidepage"> -->
			      	<div class="swiper-slide slidepage swiper-container scroll pull-refresh" ref="refresh">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll list-group" ref="listGroup">
								
								<!-- 内容部分 -->
								<!-- 上滑加载、下拉刷新 -->
								<!-- <div class="swiper-container pull-refresh">
									<div class="swiper-wrapper">
										<div class="swiper-slide"> -->
											<!-- <div class="swiper-slide"> -->
												<div class="list-group-item refresh-gif">
													<span></span>
												</div>
												
												<div class="clearfix list-group-item ticket-item" v-for="item in goods">
													{{item.text}}
												</div>
												




											<!-- </div> -->
											
										<!-- </div>
									</div> -->
									
									<!-- <div class="loadtip">上拉加载更多</div> -->
									<div class="swiper-scrollbar"></div>
								<!-- </div> -->


								<!-- <carousel></carousel>
								<guarantee></guarantee>
								<card></card> -->


				      		</div>
				        </div>
			      	</div>
			    <!-- </div> -->
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								2
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								3
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								4
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								5
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								6
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								7
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								8
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								9
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								10
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								11
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								12
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								13
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								14
				          		<img src="~src/images/fresh-news/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>



		  	</div>
		</div>
		<!-- <div class="img" id="footer"><img src="../../images/fresh-news/0.jpg"></div> -->
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';

    import carousel from 'src/components/carousel/carousel'
    import guarantee from 'src/components/guarantee/guarantee'
    import card from 'src/components/tabbar/children/card'

	export default{
		data(){
			return {
				tabIndex: 0,
				navSlideWidth: 0,
				bar: null,
				tSpeed: 300,
				navSum: 0,
				clientWidth: 0,
				navWidth: 0,
				tabSlide: [
					{
						text: '热卖',
					},
					{
						text: '水果',
					},
					{
						text: '蔬菜',
					},
					{
						text: '乳品',
					},
					{
						text: '肉蛋',
					},
					{
						text: '零食',
					},
					{
						text: '酒饮',
					},
					{
						text: '水产',
					},
					{
						text: '速食',
					},
					{
						text: '熟食',
					},
					{
						text: '粮油',
					},
					{
						text: '轻食',
					},
					{
						text: '日百',
					},
					{
						text: '明日',
					}
				],
				goods: [
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
					{
						text: '1111'
					},
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
			var _this=this;
			this.$nextTick(() => {
				if (!this.navSwiper) this.tab();
				if (!this.pageSwiper) this.page();
				// if (!this.scrollSwiper) {
				// 	_this.scrollSwiper = new Swiper('.scroll', {
				// 	  	slidesOffsetBefore: 77,
				// 	  	direction: 'vertical',
				// 	  	freeMode: true,
				// 	  	slidesPerView: 'auto',
				// 		mousewheel: {
				// 	  		releaseOnEdges: true,
				// 	  	},
				// 	});
				// }	
				if (!this.pullRefresh) this.refresh();
            })
		},
		methods: {
			//导航栏
			tab: function () {
				var _this=this;
				this.navSwiper = new Swiper(this.$refs.tabNav, {
					slidesPerView: 6,
					freeMode: true,
					on: {
						init: function() {
							//设置transition-duration值
							this.setTransition(_this.tSpeed);
							//导航字数需要统一,每个导航宽度一致
				  			_this.navSlideWidth = this.slides.eq(0).css('width'); 
				  			//最后一个slide的位置
				  			_this.navSum = this.slides[this.slides.length - 1].offsetLeft;
				  			//Nav的可视宽度
				  			_this.clientWidth = parseInt(this.$wrapperEl.css('width'));
				  			_this.navWidth = 0;
				  			for (var i = 0; i < this.slides.length; i++) {
				  				_this.navWidth += parseInt(this.slides.eq(i).css('width'))
				  			}

				  		},
				  	},
				});
			},
			//导航栏对应的page页面
			page: function () {
				var _this=this;
				this.pageSwiper = new Swiper(this.$refs.page, {
				  	watchSlidesProgress: true,
				  	resistanceRatio: 0,
				  	on: {
				  		transitionStart: function () {
				  			var index=this.activeIndex;
				  			_this.tabIndex=index;
				  			_this.slideMove(index);
				  		}
				  			
				  	}
				});
			},
				
			tabClick: function(index,event) {
				this.tabIndex=index;
				//tab导航移动
				this.slideMove(index);
				//对应的内容显示
				this.pageSwiper.slideTo(index, 0);
				// console.log(this.pullRefresh);
			},
			slideMove: function (index) {
				var navSwiper=this.navSwiper,
				clientWidth=this.clientWidth,
				navSlideWidth=this.navSlideWidth,
				navWidth=this.navWidth;
				var navActiveSlideLeft=navSwiper.slides[index].offsetLeft;
				if (navActiveSlideLeft < (clientWidth-parseInt(navSlideWidth))/2) {
	  				navSwiper.setTranslate(0)
	  			} else if (navActiveSlideLeft > navWidth-(parseInt(navSlideWidth) + clientWidth)/2) {
	  				navSwiper.setTranslate(clientWidth-navWidth)
	  			} else {
	  				navSwiper.setTranslate((clientWidth-parseInt(navSlideWidth))/2-navActiveSlideLeft)
	  			}
			},
			refresh: function () {
				var _this=this;
				// _this.pullRefresh=null;
				this.pullRefresh= new Swiper('.pull-refresh',{
					slidesOffsetBefore: 77,
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
				// console.log(1111);
				var _this=this,
				pullRefresh=this.pullRefresh;
				// console.log(pullRefresh);
				// console.log(pullRefresh);
				// var viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
				// var contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
				var viewHeight=pullRefresh.$wrapperEl[0].offsetHeight,
				contentHeight=pullRefresh.slides[0].offsetHeight;
				// console.log(pullRefresh.translate,viewHeight-contentHeight-50,pullRefresh.translate<0);
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
	                }, 1000);
	            }
	            return false;
	        }
					
			
        },
        components: {
			carousel,
			guarantee,
			card
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




	/*上滑加载、下拉刷新*/
	.swiper-container.pull-refresh{
		overflow: visible;
		margin-top: -43px;
		margin-bottom: 53px;
	}
	// .pull-refresh .loadtip { display: block;width: 100%;line-height: 40px; height: 40px;text-align: center;color: #999;border-top: 1px solid #ddd;}
	// .pull-refresh .loadtip{
	// 	position: absolute;
	// 	left: 0;
	// 	bottom: 0;
	// }
	.swiper-container.pull-refresh{
		width: 100%;
		height: 100%;
		// position: fixed;
		// left: 0;
		// top: 0;
		// bottom: 0;
	}
	// .pull-refresh .swiper-slide{height: auto;}
	// .pull-refresh .list-group{padding-left: 0;margin-bottom: 20px;}
	.pull-refresh .list-group-item{    position: relative; display: block;padding: 10px 15px;margin-bottom: -1px;background-color: #fff;border: 1px solid #ddd;}
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