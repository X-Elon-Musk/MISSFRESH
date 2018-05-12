<template>
	<div class="tabbar">
        <div id="top">
        	<!-- <div class="addr"></div> -->
        	<mheader></mheader>
        	<div class="swiper-container" id="nav" ref="tabNav">
        		<div class="swiper-wrapper" ref="tabItems">
        			<div class="swiper-slide" v-for="(item,index) in tabSlide" @click="tabClick(index,$event)" :class="{active:tabIndex==index}" :key="index">
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
				<!-- 热卖 -->
		      	<productPage :products="products" :banner="banner" :brands="brands" :categoryareas="categoryareas" class="product_index_0"></productPage>
			    <div class="swiper-slide slidepage swiper-container gif-show">
			        <!-- <pullRefresh :tabIndex="tabIndex" @getData="getData">
			        	<gif></gif>
		      			<carousel></carousel>
						<guarantee></guarantee>
						<card></card>
						<div class="clearfix list-group-item ticket-item" v-for="(item,index) in products[1]" :key="index">
							<product :product="item"></product>
						</div>
		      		</pullRefresh> -->
		      		<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								2
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								3
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								4
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								5
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								6
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								7
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								8
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								9
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								10
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								11
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								12
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
			    <div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								13
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								14
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div>



		  	</div>
		</div>
		<!-- <div class="img" id="footer"><img src="../../images/carousel/0.jpg"></div> -->
	
		<loading :loading="loading"></loading>
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
  	import mheader from './component/mheader'
    import classify from './component/classify'
    import productPage from './component/productPage'
    import loading from 'src/components/loading/loading'
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
				// loadFlag: true,
				//计数，后面需要去除
				num: 0,
				//“分类”显示状态
				classifyState: false,
				//上滑加载初始的位置
				startPosition: 0,
				//上滑加载滑动的位置
				translate: 0,
				//产品
				products: [],
				//banner
				banner: [],
				//品牌
				brands: [],
				//分类区域
				categoryareas: [],
				//loading组件状态
				loading: false
			}
		},

		mounted (){
			this.$nextTick(() => {
				if (!this.navSwiper) this.tab();
				if (!this.pageSwiper) this.page();
				// if (!this.pullRefresh) this.refresh();
			})
            this.getData();
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
			getData: function () {
				var _this=this;
				this.loading=true;
				this.axios.get('http://10.0.8.11:3390/index')
				.then(function (response) {
					console.log(response.data);
					_this.products=_this.products.concat(response.data.product_list.products);
					_this.banner=_this.banner.concat(response.data.product_list.banner);
					_this.brands=_this.brands.concat(response.data.product_list.brands);
					_this.categoryareas=_this.categoryareas.concat(response.data.product_list['category_areas']);
					_this.loading=false;
				})
				.catch(function (error) {
					console.log(error);
				});
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
			classify,
			productPage,
			loading
		},
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	/*添加gif的pullRefresh组件的父级需要加‘gif-show’的ClassName*/
	.gif-show{
		margin-top: 34px;
	}
	.tabbar{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		overflow-y: auto;
	}
	#top {
		position:fixed;
		top:0;
		z-index:2;
		width:100%;
		background:#fff;
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
			z-index: 2;
			.bg(40px,40px,#fff,'~images/icon/ellipsis.png',1.375rem);
		    /*z-index: 15;*/
		}
	}
	
	#page {
		margin-bottom:50px;
		height:100%;
		overflow-y: auto;
		.slidepage{
			height: auto;
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

	.tabber ::-webkit-scrollbar {
	    width: 0;
	    height: 0;
	}

</style>