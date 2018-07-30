<template>
	<div class="tabbar">
        <div id="top">
        	<ugHeader></ugHeader>
        	<div class="swiper-container tab-nav" id="nav" ref="tabNav">
        		<div class="swiper-wrapper" ref="tabItems">
        			<div class="swiper-slide" v-for="(item,index) in categorylist[0]" @click="tabClick(index,$event)" :class="{active:tabIndex==index}" :key="index" :style="{backgroundImage:item.category_image.indexOf('icon')>0?`url(${item.category_image})`:'none'}">
        				<span>{{item.name}}</span>
        			</div>
					<!-- <div class="bar">
						<div class="color"></div>
					</div> -->
				</div>
			</div>
			<div class="ellipsis-icon" @click="showClassify"></div>
		</div>
		<!-- 分类 -->
		<classify v-show="classifyState" :categorylist="categorylist[0]" v-on:closeClassify="closeClassify"  v-on:tabMove="tabMove"></classify>
		
		<div class="swiper-container" id="page" ref="page">
		  	<div class="swiper-wrapper">

				<!-- nav对应页面 -->

				<productPage v-for="(item,index) in categorylist[0]" :key="index" v-if="products[index]&&products[index].length!=0" :products="products[index]" :banner="banner[index]" class="product_index_page">
					<guarantee :brands="brands[index]" v-if="brands[index]&&brands[index].length!=0"></guarantee>
            		<card :categoryareas="categoryareas[index]"  v-if="categoryareas[index]&&categoryareas[index].length!=0"></card>
				</productPage>

		  	</div>
		</div>
	
		<loading :loading="loading" zIndex="1"></loading>
	</div>
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import qs from 'qs';
    import {getDataPageIndexAxios} from 'src/service/getData'

  	import ugHeader from './component/ugHeader'
    import classify from './component/classify'
    import productPage from './component/productPage'
    import guarantee from './component/component/guarantee'
    import card from './component/component/card'
    import loading from 'src/components/loading/loading'
	export default{
		data(){
			return {
				//当前导航栏所处位置
				tabIndex: 0,
				//导航中每个按钮的宽度
				navSlideWidth: 0,
				//导航的transition-duration值
				tSpeed: 300,
				//导航的可视宽度
				clientWidth: 0,
				//导航的宽度
				navWidth: 0,
				//“分类”显示状态
				classifyState: false,
				//上滑加载初始的位置
				startPosition: 0,
				//上滑加载滑动的位置
				translate: 0,
				//分类列表
				categorylist: {},
				//banner
				banner: {},
				//品牌
				brands: {},
				//分类区域
				categoryareas: {},
				//产品
				products: {},
				//loading组件状态
				loading: false,
				//导航移动的最大距离
				maxLeft: 0,
				//种类数据加载情况
				product_index: {},
			}
		},
		mounted (){
			this.getDataPageIndex(0);
		},
        watch: {
        	s_choseAddress: function () {
    			this.getDataPageIndex(0);		
        	}
        },
		computed: {
	    	...mapState([
                's_choseAddress'
            ]),
        },
		methods: {
			// 获取index数据
			async getDataPageIndex(product_index) {
				this.loading=true;
				let response=await getDataPageIndexAxios(product_index);
				let product_list=response.product_list;
				if (product_index==0) {
					this.$set(this.categorylist, product_index, response.category_list);
					this.$set(this.brands, product_index, product_list.brands);
					this.$set(this.categoryareas, product_index, product_list.category_areas);
					this.$emit('hideLoading', false);
				}
				this.$set(this.banner, product_index, product_list.banner);
				this.$set(this.products, product_index, product_list.products);
				this.swiperAction(product_index);
			},
			swiperAction(product_index){
				this.$nextTick(()=>{
					this.navSwiper?this.navSwiper.update():this.tab();
					this.pageSwiper?this.pageSwiper.update():this.page();
				})
				setTimeout(()=>{
					this.pageShow(product_index);
					this.loading=false;
				},10)
			},
			// 导航栏
			tab() {
				let _this=this;
				this.navSwiper=new Swiper('.tab-nav', {
					slidesPerView: 'auto',
					freeMode: true,
					observer:true,
      				observeParents:true,
      				// resistanceRatio : 0,
					on: {
						init: function() {
							//设置transition-duration值
							this.setTransition(_this.tSpeed);
							//Nav的可视宽度
				  			_this.clientWidth = parseInt(this.$wrapperEl.css('width'));
				  			_this.navWidth = 0;
				  			for (let i = 0; i < this.slides.length; i++) {
				  				_this.navWidth += parseInt(this.slides[i].offsetWidth)
				  			}
				  			_this.maxLeft=_this.navWidth-_this.clientWidth;
				  		}
				  	},
				});
			},
			// 导航栏对应的page页面
			page() {
				let _this=this;
				this.pageSwiper = new Swiper(this.$refs.page, {
				  	watchSlidesProgress: true,
				  	resistanceRatio: 0,
				  	observer:true,
      				observeParents:true,
				  	on: {
				  		transitionStart: function () {
				  			/*let index=this.activeIndex;
				  			_this.tabIndex=index;
				  			_this.navSlideWidth=_this.navSwiper.slides[index].offsetWidth; 
				  			_this.slideMove(index,_this.navSlideWidth);*/
				  		}
				  	}
				});
			},
			// 点击导航	
			tabClick(index) {
				//请求对应种类的数据,没有加载过的话加载数据,已经加载过不再加载。
				this.products[index]?this.pageShow(index):this.getDataPageIndex(index);
			},
			// 对应内容显示
			pageShow(index) {
				this.tabIndex=index;
				//对应的内容显示
				this.pageSwiper.slideTo(index, 0);
			},
			// 导航移动
			slideMove(index,navSlideWidth) {
				let navSwiper=this.navSwiper,
				clientWidth=this.clientWidth;
				let navActiveSlideLeft=navSwiper.slides[index].offsetLeft;
				let left=navActiveSlideLeft-clientWidth/2;
				if (left<=0) {
					left=0;	
				} else if(left>=this.maxLeft){
					left=this.maxLeft;
				} 
				navSwiper.setTranslate(-left);
				this.pageShow(index);
			},
	        // 分类切换显示状态
	        showClassify() {
	        	this.classifyState=true;
	        },
	        // 关闭分类
	        closeClassify() {
	        	this.classifyState=false;
	        },
	        //导航移动、导航对应的page显示
	        tabMove(index) {
	        	this.tabClick(index);

	  			this.slideMove(index);
	        }	
        },
        components: {
        	ugHeader,
			classify,
			productPage,
			guarantee,
			card,
			loading
		},
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	// 添加gif的pullRefresh组件的父级需要加‘gif-show’的ClassName
	.gif-show{
		margin-top: 34px;
		padding-bottom: 53px;
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
				width: auto;
				padding: 0 1.0rem;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				background-position: center center;
				span {
					text-align:center;
					display: inline-block;
					height: 100%;
					line-height: 40px;
					font-size:14px;
					color: #333;
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
		}
	}
	#page {
		// margin-bottom:50px;
		height:100%;
		overflow-y: auto;
		.slidepage{
			height: auto;
			&:nth-of-type(1){
				.slidescroll{
					// padding-bottom: 53px;
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
	// 票
	.ticket-item{
		padding: 9px 2%;
		box-sizing: border-box;
	}
	.tabber ::-webkit-scrollbar {
	    width: 0;
	    height: 0;
	}

</style>