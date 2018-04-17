<template>
	<!-- 轮播图 -->
    <div>
        <mt-swipe :auto="4000" :show-indicators="true" class="page-swipe">
            <mt-swipe-item v-for="(item,index) in items" :key="index">
            	<router-link :to="item.to" class="swipe-link">
            		<img :src="item.src">
            	</router-link>
            </mt-swipe-item>
        </mt-swipe>
    </div>  
</template>
<script>
	export default{
		name:'Swipe',
		data(){
			return {
				items:[
					{
						src: require('src/images/banner/0.jpg'),
						to: '/'
					},
					{
						src: require('src/images/banner/1.jpg'),
						to: '/'
					},
					{
						src: require('src/images/banner/2.jpg'),
						to: '/'
					}
				]
			}
		}
	}
</script>
<style lang="less">
	/*@import '../assets/less/swipe.less';*/
	.page-swipe{
		height: 145px;
		.swipe-link{
			display: inline-block;
			height: 100%;
			width: 100%;
			img{
				display: inline-block;
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
