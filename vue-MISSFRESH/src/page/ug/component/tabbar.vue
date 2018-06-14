<template>
	<div class="tabbar">
        <div id="top">
        	<!-- <div class="addr"></div> -->
        	<ugHeader :view="view"></ugHeader>
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
				<!-- 热卖 -->
		      	<!-- <productPage :products="products" :banner="banner" :brands="brands" :categoryareas="categoryareas" class="product_index_0"></productPage> -->
		      	<!-- <productPage :products="products[0]||[]" :banner="banner[0]||[]" class="product_index_0"> -->
	      		<span class="AAAAAAAAAAAAAA">{{banner[0]}}</span>
		      	<productPage :products="products[0]||[]" :banner="banner[0]" class="product_index_0">
		      		<guarantee :brands="brands[0]"></guarantee>
            		<card :categoryareas="categoryareas[0]"></card>
		      	</productPage>
		      	<productPage :products="products[1]||[]" :banner="banner[1]||[]" class="product_index_0"></productPage>
		      	<productPage :products="products[2]||[]" :banner="banner[2]||[]" class="product_index_0"></productPage>
		      	<!-- <productPage :products="products[1]" :banner="banner[1]" class="product_index_0"></productPage> -->
			    <!-- <div class="swiper-slide slidepage swiper-container gif-show">
		      		<div class="swiper-container scroll" ref="scroll">
				        <div class="swiper-wrapper">
				          	<div class="swiper-slide slidescroll">
								2
				          		<img src="~src/images/carousel/0.jpg">
				      		</div>
				        </div>
			      	</div>
			    </div> -->
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
	
		<loading :loading="loading" zIndex="1"></loading>
	</div>
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import qs from 'qs';
    import {getDataPageIndexAxios, getDataPositionAxios, getViewAxios} from 'src/service/getData'

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
				// bar: null,
				//导航的transition-duration值
				tSpeed: 300,
				//导航的可视宽度
				clientWidth: 0,
				//导航的宽度
				navWidth: 0,
				// //计数，后面需要去除
				// num: 0,
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
				// 配送的信息
				view: {}
			}
		},
		mounted (){
			console.log('----------------');
			this.getDataPageIndex(0, () => {
				console.log(1111111111111111111);
				this.$nextTick(() => {
					if (!this.navSwiper) this.tab();
					if (!this.pageSwiper) this.page();
				})
			});
			console.log('----------------');
			this.getDataPosition();
			this.getView();
		},
		activated(){
			console.log(444444);
			// this.getDataPageIndex(0, () => {
			// 	this.$nextTick(() => {
			// 		if (!this.navSwiper) this.tab();
			// 		if (!this.pageSwiper) this.page();
			// 	})
			// });
			// this.getView();
		},
		beforeRouteEnter(to, from, next){
        	console.log(to);
        	console.log(from);
        	/*// if (to.name=='http://localhost:8080/#/ug') {
        	if (to.fullPath=='/ug/') {
        		from.meta.keepAlive=true;
        		// to.meta.keepAlive=true;
        		console.log(1);
        	} else{
        		from.meta.keepAlive=false;
        		// to.meta.keepAlive=true;
        		// this.$route.meta.keepAlive=true;
        		console.log(this.$route.meta.keepAlive);
        		console.log(2);
        	}
        	from.meta.keepAlive=false;*/
        	next();
        },
        watch: {
        	s_choseAddress: function () {
        		console.log('============');
        		console.log(this.s_choseAddress);
        		console.log('============');
        		console.log(this.$route);
        		// if (this.s_choseAddress!=='') {
        			this.getDataPageIndex(0, () => {
						this.$nextTick(() => {
							if (!this.navSwiper) this.tab();
							if (!this.pageSwiper) this.page();
						})
					});
					this.getView();			
        		// }
        		
        	}
        },
		computed: {
	    	...mapState([
                's_viewType', 's_choseAddress'
            ]),
        },
		methods: {
			...mapMutations([
                'SET_POSITION'
            ]),
			/*//获取index数据
			getDataPageIndex(product_index,callback) {
				var _this=this;
				this.loading=true;
				this.axios.get('http://localhost:3390/page/index',{
			    	params: {
				      	product_index: product_index
				    }
				})
				.then(function (response) {
					let product_list=response.data.product_list;
					if (product_index==0) {
						// _this.categorylist[product_index]=(_this.categorylist[product_index]||[]).concat(response.data.category_list);	
						// _this.brands[product_index]=(_this.brands[product_index]||[]).concat(product_list.brands);
						// _this.categoryareas[product_index]=(_this.categoryareas[product_index]||[]).concat(product_list.category_areas);




						_this.categorylist[product_index]=[].concat(response.data.category_list);	
						_this.brands[product_index]=[].concat(product_list.brands);
						_this.categoryareas[product_index]=[].concat(product_list.category_areas);
						_this.$emit('hideLoading', false);
					}
					// _this.banner[product_index]=(_this.banner[product_index]||[]).concat(product_list.banner);
					// _this.products[product_index]=(_this.products[product_index]||[]).concat(product_list.products);
					_this.banner[product_index]=[].concat(product_list.banner);
					_this.products[product_index]=[].concat(product_list.products);




					// console.log('=====================');
					// console.log(_this.products);
					// console.log('=====================');	
					_this.loading=false;

					callback&&callback();
				})
				.catch(function (error) {
					console.log(error);
				});
			},*/
			//获取index数据
			getDataPageIndex(product_index,callback) {
				getDataPageIndexAxios(product_index).then(response=>{
					console.log(response);
					let product_list=response.product_list;
					if (product_index==0) {
						this.categorylist[product_index]=[].concat(response.category_list);	
						this.brands[product_index]=[].concat(product_list.brands);
						this.categoryareas[product_index]=[].concat(product_list.category_areas);
						this.$emit('hideLoading', false);
					}
					this.banner[product_index]=[].concat(product_list.banner);
					this.products[product_index]=[].concat(product_list.products);
					console.log(this.categorylist[product_index]);
					this.loading=false;
					callback&&callback();
				});
			},
			//获取当前地址
			async getDataPosition(callback) {
				let response=await getDataPositionAxios();
				let ad_info=response.ad_info
				let chosecity={
					id: ad_info.adcode,
					name: ad_info.city,
					province: ad_info.province,
					district: ad_info.district
				}
				this.SET_POSITION({
					type: 0,
					city: chosecity
				});
				/*let _this=this;
				this.axios.get('http://localhost:3390/position/location')
				.then(function (response) {
					let ad_info=response.data.ad_info
					let chosecity={
						id: ad_info.adcode,
						name: ad_info.city,
						province: ad_info.province,
						district: ad_info.district
					}
					_this.SET_POSITION({
						type: 0,
						city: chosecity
					});

				})
				.catch(function (error) {
				  	console.log(error);
				});*/	

				


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
			//获取配送的类型信息
			getView() {
				/*var _this=this;
				this.axios.get('http://localhost:3390/position/view',{
			    	params: {
				      	type: _this.s_viewType
				    }
				})
				.then(function (response) {
					_this.view=response.data;
				})
				.catch(function (error) {
					console.log(error);
				});*/

				getViewAxios().then(response=>{
					this.view=response.data;
				})
			},
			//导航栏
			tab() {
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
			page() {
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
			//点击导航	
			tabClick(index,event) {
				/*this.tabIndex=index;
				//对应的内容显示
				this.pageSwiper.slideTo(index, 0);*/
				this.pageShow(index);
				//请求对应种类的数据,没有加载过的话加载数据,已经加载过不再加载。
				if (!this.products[index]) {
					this.getDataPageIndex(index);		
				}
			},
			//对应内容显示
			pageShow(index) {
				this.tabIndex=index;
				//对应的内容显示
				this.pageSwiper.slideTo(index, 0);
			},
			//导航移动
			slideMove(index,navSlideWidth) {
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
				this.pageShow(index);
			},
	        //分类切换显示状态
	        showClassify() {
	        	this.classifyState=true;
	        },
	        closeClassify() {
	        	this.classifyState=false;
	        },
	        //导航移动、导航对应的page显示
	        tabMove(index) {
	        	this.tabClick(index);
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
			&:nth-of-type(1){
				.slidescroll{
					padding-bottom: 53px;
				}
			}
		}
	}
	.scroll {
		height:100%;
	}
	.slidescroll {
		height:auto;
		// padding-bottom: 53px; 
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