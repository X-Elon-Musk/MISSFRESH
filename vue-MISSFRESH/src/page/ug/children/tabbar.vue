<template>
	<div class="tabbar">
        <div id="top">
        	<!-- <div class="addr"></div> -->
        	<mheader></mheader>
        	<div class="swiper-container" id="nav" ref="tabNav">
        		<div class="swiper-wrapper" ref="tabItems">
        			<div class="swiper-slide" v-for="(item,index) in tabSlide" @click="tabClick(index,$event)" :class="{active:tabIndex==index}">
        				<span>{{item.text}}</span></div>
					<!-- <div class="bar">
						<div class="color"></div>
					</div> -->
				</div>
			</div>
			<div class="ellipsis-icon" @click="showClassify"></div>
		</div>
		<!-- 分类 -->
		<classify v-show="classifyState" :tabSlide="tabSlide" v-on:closeClassify="closeClassify"  v-on:tabMove="tabMove"></classify>
		<div class="swiper-container" id="page" ref="page">
		  	<div class="swiper-wrapper">

				<!-- nav对应页面 -->
		      	<div class="swiper-slide slidepage swiper-container gif-show">

		      		<pullRefresh :tabIndex="tabIndex" @getData="getData">
		      			<gif></gif>
		      			<!-- 内容部分 -->
						<carousel></carousel>
						<guarantee></guarantee>
						<card></card>
						<!-- 上滑加载、下拉刷新 -->
						<div class="clearfix list-group-item ticket-item" v-for="item in products[0]">
							<product :product="item" :id="item.id"></product>
						</div>
		      		</pullRefresh>
		      		

		      	</div>

			    <div class="swiper-slide slidepage swiper-container gif-show">
			        <pullRefresh :tabIndex="tabIndex" @getData="getData">
			        	<gif></gif>
		      			<!-- 内容部分 -->
						<carousel></carousel>
						<guarantee></guarantee>
						<card></card>
						<!-- 上滑加载、下拉刷新 -->
						<div class="clearfix list-group-item ticket-item" v-for="item in products[1]">
							<product :product="item"></product>
						</div>
		      		</pullRefresh>
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


    import mheader from './mheader'
    import carousel from 'src/components/carousel/carousel'
    import guarantee from './children/guarantee'
    import card from './children/card'
    import product from 'src/components/product/product'
    import classify from './children/classify'
    import pullRefresh from 'src/components/pullRefresh/pullRefresh'
    import gif from 'src/components/gif/gif'
	export default{
		data(){
			return {
				//当前导航栏所处位置
				tabIndex: 0,
				//导航中每个按钮的宽度
				navSlideWidth: 0,
				// bar: null,
				//导航的transition-duration值
				tSpeed: 300,
				//导航中最后一个按钮的位置
				navSum: 0,
				//导航的可视宽度
				clientWidth: 0,
				//导航的宽度
				navWidth: 0,
				//导航的文字内容
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
				//上拉刷新数据
				products: [
					[
						{
							id: 0,
							hot: 0,
							img: '',
							name: '11111月盛斋羔羊肉片300g',
							point: '预计11月26日后兑换兑换券',
							preferential: [
								'限每人1份',
								'进口检验合格'
							],
							price: 29.9,
							vip: 19.9
						},
						{
							id: 0,
							hot: 1,
							img: '',
							name: '11111月盛斋羔羊肉片300g',
							point: '预计11月26日后兑换兑换券',
							preferential: [
								'限每人1份',
								'进口检验合格'
							],
							price: 29.9,
							vip: 19.9
						},
						{
							id: 0,
							hot: 3,
							img: '',
							name: '月盛斋羔羊肉片300g',
							point: '预计11月26日后兑换兑换券',
							preferential: [
								'限每人1份',
								'进口检验合格'
							],
							price: 29.9,
							vip: 19.9
						}
					],
					[
						{
							id: 0,
							hot: 0,
							img: '',
							name: '222月盛斋羔羊肉片300g',
							point: '预计11月26日后兑换兑换券',
							preferential: [
								'限每人1份',
								'进口检验合格'
							],
							price: 29.9,
							vip: 19.9
						},
						{
							id: 0,
							hot: 1,
							img: '',
							name: '2222月盛斋羔羊肉片300g',
							point: '预计11月26日后兑换兑换券',
							preferential: [
								'限每人1份',
								'进口检验合格'
							],
							price: 29.9,
							vip: 19.9
						}
					]
				],
				// loadFlag: true,
				//计数，后面需要去除
				num: 0,
				//“分类”显示状态
				classifyState: false,
				//上滑加载初始的位置
				startPosition:0,
				//上滑加载滑动的位置
				translate: 0
			}
		},
		mounted (){
			var _this=this;
			this.$nextTick(() => {
				if (!this.navSwiper) this.tab();
				if (!this.pageSwiper) this.page();
				// if (!this.pullRefresh) this.refresh();
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
				  			_this.navWidth+=40;
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
			//点击导航	
			tabClick: function(index,event) {
				this.tabIndex=index;
				//tab导航移动
				this.slideMove(index);
				//对应的内容显示
				this.pageSwiper.slideTo(index, 0);
			},
			//导航移动
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
	        //发送ajax,请求数据
	        getData: function () {
	        	//发送ajax请求
	        	console.log(111);
              	for(var i = 0; i <3; i++) {
              	  	this.products[this.tabIndex].push({
              	  		id: 0,
						hot: 0,
						img: '',
						name: this.tabIndex+'月盛斋羔羊肉片300g',
						point: '预计11月26日后兑换兑换券',
						preferential: [
							'限每人1份',
							'进口检验合格'
						],
						price: 29.9,
						vip: 19.9
					});
              	}
	        },
	        //分类切换显示状态
	        showClassify: function () {
	        	this.classifyState=true;
	        },
	        closeClassify: function () {
	        	this.classifyState=false;
	        },
	        //导航移动、导航对应的page显示
	        tabMove: function (index) {
	        	this.tabClick(index);
	        }
	        	
        },
        components: {
        	mheader,
			carousel,
			guarantee,
			card,
			product,
			classify,
			pullRefresh,
			gif
		},
	}
</script>
<style lang='less'>
	@import '~src/style/mixin';
	// 添加gif的pullRefresh组件的父级需要加‘gif-show’的ClassName
	.gif-show{
		margin-top: 34px;
	}
	.tabbar{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}
	#top {
		position:absolute;
		top:0;
		z-index:5;
		width:100%;
		background:#fff;
		/*.addr {
			height:36px;
			margin:0 auto;
			display:block;
		}*/
		#nav {
			border-bottom:1px solid #ebebeb;
			height: 40px;
			padding-right: 40px;
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
					.wh(0);
					border-bottom: 2px solid #ff4891;
				}
			}
		}
		.ellipsis-icon{
			position: absolute;
			right: 0;
			bottom: 0;
			.bg(40px,40px,#fff,'~images/icon/ellipsis.png',1.375rem);
		    z-index: 15;
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
	/*票*/
	.ticket-item{
		padding: 9px 2%;
		box-sizing: border-box;
	}

	

	


</style>