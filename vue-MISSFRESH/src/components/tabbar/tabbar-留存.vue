<template>
	<div>
        <scrollX ref="scroll">
			<ul class="index-nav scroll content" id="scroller" ref="content">
		      	<li v-for="(item,index) in tabItems" class="navItem" :class="{active:tabIndex==index}" @click="tabClick(index,$event)">
		        	<strong class="text">{{item.text}}</strong>
		        	<!-- <span class="amount" v-if="navItem.amount">{{amount}}</span>
		        	<span class="amount nav-total" v-if="navItem.vuex" :class="{active:into}">{{total}}</span> -->
		      	</li>
		    </ul> 
		</scrollX>
		<ul class=""></ul>
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';


	import scrollX from 'src/components/scroll/scroll'
	export default{
		data(){
			return {
				scroll: null,
				maxLeft: 0,
				tabItems: [
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
						text: '明日早餐',
					}
				],
				tabIndex: 0
			}
		},
		mounted (){
			this.$nextTick(() => {
				if (!this.scroll) {
		   			//this.$refs.scroll直接获取滑动对象
		   			this.scroll=this.$refs.scroll;
		        } else{
					this.scroll.refresh();
				}
				// this.changeActive();	
            })
			this.maxLeft=this.$refs.content.offsetWidth-this.$refs.content.parentNode.offsetWidth;
		},
		methods: {
        	// 导航点击
			tabClick(index,event) {
				// this.$router.push({path: event.currentTarget.title,replace: true});
				// this.changeActive();
				this.tabIndex=index;
				this.tabMove(index);
			},
			// 点击导航后，导航根据点击位置进行移动
			tabMove(index){
				var left=this.$refs.content.children[0].offsetWidth*index-this.$refs.content.parentNode.offsetWidth/2;
				// console.log(left);
				if (left<=0) {
					left=0;	
				} else if(left>=this.maxLeft){
					left=this.maxLeft;
				} 
				this.scroll.scrollTo(-left, 0, 400);
			},
			// 初始化导航，默认都为非点击状态
			initTab(){
				this.tabItems.forEach(function (item) {
					item.active=false;
				})
			},
			// changeActive(){
			// 	var pathname=window.location.pathname,
			// 		patharr=pathname.split('/');
			// 	this.initTab();
		 //      	this.tabItems.forEach((item,index)=>{
		 //      		var router=item.to;
		 //      		if(index!=0&&pathname.indexOf(router)!=-1){
		 //      			this.tabItems[index].active=true;
		 //      		} else if(pathname.indexOf('aomen')!=-1){
		 //      			this.scroll.scrollTo(-this.maxLeft, 0, 400);
		 //      		} else if(patharr[patharr.length-1]==''){
		 //      			this.tabItems[0].active=true;
		 //      		}
		 //      	})
  	// 		},
  			getStyle(ele,attr){
				return parseFloat(ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele)[attr]);
			}
        },
        components: {
			scrollX
		},
	}
</script>
<style lang='less'>
	#scroller {
	    position: absolute;
	    z-index: 1;
	    height: 40px;
	    display: flex;
	    color: #262626;
    	font-size: 14PX;
	}
	.navItem {
	    padding: 10px 0;
	    float: left;
    	padding: 0 0.8em;
	    line-height: 40px;
	    text-align: center;
	    position: relative;
	    .text{
	    	display: inline-block;
	    	white-space: nowrap;
	    	font-weight: normal;
	    	height: 100%;
	    	width: 100%;
	    	position: relative;
	    }
	}
	.navItem.active{
		.text:after{
			content: "";
			position: absolute;
			left: 0;
			bottom: 0px;
			height: 0;
			width: 100%;
			border-bottom: 2px solid #ff4891;
		}
	}








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