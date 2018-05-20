<template>
	<div class="tabbar">
        <div id="top">
        	<!-- <div class="addr"></div> -->
        	<ugHeader :choseAddress="choseAddress"></ugHeader>
        	<div class="swiper-container tab-nav" id="nav" ref="tabNav">
        		<div class="swiper-wrapper" ref="tabItems">
        			<div class="swiper-slide" v-for="(item,index) in categorylist" @click="tabClick(index,$event)" :class="{active:tabIndex==index}" :key="index" :style="{backgroundImage:item.category_image.indexOf('icon')>0?`url(${item.category_image})`:'none'}">
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
		<!-- <classify v-show="classifyState" :categorylist="categorylist" v-on:closeClassify="closeClassify"  v-on:tabMove="tabMove"></classify> -->
		<div class="swiper-container" id="page" ref="page">
		  	<div class="swiper-wrapper">

				<!-- nav对应页面 -->
				<!-- 热卖 -->
		      	<productPage :products="products" :banner="banner" :brands="brands" :categoryareas="categoryareas" class="product_index_0"></productPage>
			    <div class="swiper-slide slidepage swiper-container gif-show">
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
				<div class="swiper-slide slidepage">
			      	<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								15
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
	import {mapState, mapMutations} from 'vuex'
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import qs from 'qs';
  	import ugHeader from './component/ugHeader'
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
				//导航的可视宽度
				clientWidth: 0,
				//导航的宽度
				navWidth: 0,
				//计数，后面需要去除
				num: 0,
				//“分类”显示状态
				classifyState: false,
				//上滑加载初始的位置
				startPosition: 0,
				//上滑加载滑动的位置
				translate: 0,
				//分类列表
				categorylist: [],
				//banner
				banner: [],
				//品牌
				brands: [],
				//分类区域
				categoryareas: [],
				//产品
				products: [],
				//loading组件状态
				loading: false,
				//导航移动的最大距离
				maxLeft: 0,
			}
		},
		mounted (){
			this.getPageIndex(() => {
				this.$nextTick(() => {
					if (!this.navSwiper) this.tab();
					if (!this.pageSwiper) this.page();
				})
			});
			this.getPosition();
		},
		computed: {
	    	...mapState([
                's_currentRegion', 's_choseAddress'
            ]),
            //选择的配送地址
            choseAddress: function () {
            	if (this.s_choseAddress) {
            		return this.s_choseAddress;
            	} else{
            		return '';
            	}
            }
        },
		methods: {
			...mapMutations([
                'SET_POSITION'
            ]),
			//导航栏
			tab: function () {
				var _this=this;
				//this.navSwiper=new Swiper(this.$refs.tabNav, {
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
				  			for (var i = 0; i < this.slides.length; i++) {
				  				_this.navWidth += parseInt(this.slides[i].offsetWidth)
				  			}
				  			_this.maxLeft=_this.navWidth-_this.clientWidth;
				  		}
				  	},
				});
			},
			//导航栏对应的page页面
			page: function () {
				var _this=this;
				this.pageSwiper = new Swiper(this.$refs.page, {
				  	watchSlidesProgress: true,
				  	resistanceRatio: 0,
				  	observer:true,
      				observeParents:true,
				  	on: {
				  		transitionStart: function () {
				  			var index=this.activeIndex;
				  			_this.tabIndex=index;
				  			_this.navSlideWidth=_this.navSwiper.slides[index].offsetWidth; 
				  			_this.slideMove(index,_this.navSlideWidth);
				  		}
				  			
				  	}
				});
			},
			//获取index数据
			getPageIndex: function (callback) {
				var _this=this;
				this.loading=true;
				this.axios.get('http://localhost:3390/page/index')
				.then(function (response) {
					_this.categorylist=_this.categorylist.concat(response.data['category_list']);
					_this.banner=_this.banner.concat(response.data.product_list.banner);
					_this.brands=_this.brands.concat(response.data.product_list.brands);
					_this.categoryareas=_this.categoryareas.concat(response.data.product_list['category_areas']);
					_this.products=_this.products.concat(response.data.product_list.products);
					_this.loading=false;
					callback&&callback();
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			//获取当前地址
			getPosition: function (callback) {
				let _this=this;
				this.axios.get('http://localhost:3390/position/location')
				.then(function (response) {
					// console.log(response.data);
					let ad_info=response.data.ad_info
					let chosecity={
						id: ad_info.adcode,
						name: ad_info.city,
						province: ad_info.province,
						district: ad_info.district
					}
					console.log(chosecity);
					_this.SET_POSITION({
						type: 0,
						city: chosecity
					});

				})
				.catch(function (error) {
				  	console.log(error);
				});	


				//post方法
				/*this.axios.post('http://localhost:3390/position/locationsuggestion', {
				    keyword:'知春路',
					cityName:'北京'
				}, {
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
				.then(function (response) {
				  	console.log(response.data);
				})
				.catch(function (error) {
				  	console.log(error);
				});	*/

				//get方法
				/*this.axios.get('http://localhost:3390/position/locationsearch',{params:{
				    keyword:'知春路',
					cityName:'北京'
				}})
				.then(function (response) {
				  	console.log(response.data);
				})
				.catch(function (error) {
				  	console.log(error);
				});	*/	
			},
			//点击导航	
			tabClick: function(index,event) {
				this.tabIndex=index;
				//对应的内容显示
				this.pageSwiper.slideTo(index, 0);
			},
			//导航移动
			slideMove: function (index,navSlideWidth) {
				var navSwiper=this.navSwiper,
				clientWidth=this.clientWidth;
				var navActiveSlideLeft=navSwiper.slides[index].offsetLeft;
				var left=navActiveSlideLeft-clientWidth/2;
				if (left<=0) {
					left=0;	
				} else if(left>=this.maxLeft){
					left=this.maxLeft;
				} 
				navSwiper.setTranslate(-left);
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
        	ugHeader,
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
				width: auto;
				padding: 0 0.8em;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				background-position: center center;
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