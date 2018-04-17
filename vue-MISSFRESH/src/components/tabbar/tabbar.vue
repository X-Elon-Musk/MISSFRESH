<template>
	<div>
        <div id="top">
        	<div class="addr"></div>
        	<div class="swiper-container" id="nav" ref="tabNav">
        		<div class="swiper-wrapper" ref="tabItems">
        			<div class="swiper-slide" v-for="(item,index) in tabSlide" @click="tabClick(index,$event)">
        				<span>{{item.text}}</span></div>
    				<!-- <div class="swiper-slide">
    					<span>水果</span></div>
					<div class="swiper-slide">
						<span>乳品</span></div>
					<div class="swiper-slide">
						<span>零食</span></div>
					<div class="swiper-slide">
						<span>肉蛋</span></div>
					<div class="swiper-slide">
						<span>蔬菜</span></div>
					<div class="swiper-slide">
						<span>酒饮</span></div>
					<div class="swiper-slide">
						<span>速食</span></div>
					<div class="swiper-slide">
						<span>熟食</span></div>
					<div class="swiper-slide">
						<span>水产</span></div>
					<div class="swiper-slide">
						<span>粮油</span></div>
					<div class="swiper-slide">
						<span>轻食</span></div>
					<div class="swiper-slide">
						<span>火锅</span></div>
					<div class="swiper-slide">
						<span>日百</span></div> -->
					<div class="bar">
						<div class="color"></div>
					</div>
				</div>
			</div>
		</div>
<div class="swiper-container" id="page" ref="page">
  <div class="swiper-wrapper">
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide1</div>
        </div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide2</div>
        </div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide3</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide4</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide5</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide6</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide7</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide8</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide9</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide10</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide11</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide12</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide13</div></div>
      </div>
    </div>
    <div class="swiper-slide slidepage">
      <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll">slide14</div></div>
      </div>
    </div>
  </div>
</div>
<div class="img" id="footer"><img src="images/footer.png"></div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';


	import scrollX from 'src/components/scroll/scroll'
	export default{
		data(){
			return {
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
			}
		},
		mounted (){
			var _this=this;
			this.$nextTick(() => {
				if (!this.navSwiper) {
					_this.navSwiper = new Swiper(this.$refs.tabNav, {
						slidesPerView: 6,
						freeMode: true,
						on: {
							init: function() {
								//设置transition-duration值
								this.setTransition(_this.tSpeed);
								//导航字数需要统一,每个导航宽度一致
					  			_this.navSlideWidth = this.slides.eq(0).css('width'); 
					  			//最后一个slide的位置
					  			_this.navSum = this.slides[this.slides.length - 1].offsetLeft 
					  			//Nav的可视宽度
					  			_this.clientWidth = parseInt(this.$wrapperEl.css('width')) 
					  			_this.navWidth = 0
					  			for (var i = 0; i < this.slides.length; i++) {
					  				_this.navWidth += parseInt(this.slides.eq(i).css('width'))
					  			}

					  		},
					  	},
					});
				} 
				if (!this.pageSwiper) {
					_this.pageSwiper = new Swiper(this.$refs.page, {
					  	watchSlidesProgress: true,
					  	resistanceRatio: 0,
					  	on: {
					  		// touchMove: _this.touchMove,
					  		// transitionStart: _this.transitionStart
					  	}
					});
				}	
            })



			
		},
		methods: {
			tabClick(index,event) {
				this.tabIndex=index;
				this.tabNavMove(index);
			},
			tabNavMove: function (index) {
				var navSwiper=this.navSwiper,
				clientWidth=this.clientWidth,
				navSlideWidth=this.navSlideWidth,
				navWidth=this.navWidth;
				var navActiveSlideLeft=navSwiper.slides[index].offsetLeft;
				if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
	  				navSwiper.setTranslate(0)
	  			} else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
	  				navSwiper.setTranslate(clientWidth - navWidth)
	  			} else {
	  				navSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)
	  			}
			},
				
			
        },
        components: {
			scrollX
		},
	}
</script>
<style lang='less'>


	html,body {
		position:relative;
		height:100%;
	}
	html {
		overflow:hidden;
	}
	* {
		padding:0;
		margin:0;
	}
	li {
		list-style:none;
	}
	body {
		background:#fff;
		font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
		font-size:12px;
	}
	.img img {
		width:100%;
		display:block;
	}
	#top {
		position:absolute;
		top:0;
		z-index:5;
		width:100%;
		background:#fff;
	}
	#top .addr {
		height:36px;
		margin:0 auto;
		display:block;
	}
	#top .search {
		position:absolute;
		top:0;
		right:0;
		height:36px;
		display:block;
	}
	#nav {
		border-bottom:1px solid #ebebeb;
	}
	#nav .swiper-slide span {
		margin:0 5px;
		text-align:center;
		display:block;
		line-height:2.5;
		font-size:14px;
		color:#333333;
	}
	#nav .bar {
		width:50px;
		height:3px;
		position:absolute;
		bottom:0px;
	}
	#nav .bar .color {
		width:36px;
		margin:0 auto;
		height:3px;
		background:#ff4891;
	}
	.banner img {
		width:100%;
		display:block;
	}
	.banner	.swiper-pagination {
		left:auto;
		right:7px;
		bottom:7px;
		width:auto;
		padding:2px 7px;
		border-radius:10px;
		color:#fff;
		background:rgba(0,0,0,.3);
	}
	#page {
		margin-bottom:50px;
		height:100%;
	}
	#page .slidepage {
		height:100%;
	}
	.scroll {
		height:100%;
	}
	.slidescroll {
		height:auto;
	}
	#footer {
		position:fixed;
		bottom:0;
		z-index:5;
	}


</style>