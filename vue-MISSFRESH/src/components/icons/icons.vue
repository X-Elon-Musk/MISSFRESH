<template>
    <ul class="icons">
    	<li class="icon" v-for="(item,index) in icons" :key="index">
			<img :src="item.src">
			<span>{{item.text}}</span>
		</li>
		<!-- <li class="icon" v-for="(item,index) in items" :key="index">
			<img src="~images/icon/privilege_0.png">
			<span>会员专享价</span>
		</li>
		<li class="icon">
			<img src="~images/icon/privilege_1.png">
			<span>购物返现</span>
		</li>
		<li class="icon">
			<img src="~images/icon/privilege_2.png">
			<span>1小时送达</span>
		</li>
		<li class="icon">
			<img src="~images/icon/privilege_3.png">
			<span>会员商品</span>
		</li>
		<li class="icon">
			<img src="~images/icon/privilege_4.png">
			<span>专享客服</span>
		</li> -->
	</ul> 
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		props: ['icons']
	}
</script>
<style lang="less">
	.icons{
		overflow-x: scroll;
		width: 100%;
		white-space: nowrap;
		.icon{
			display: inline-block;
			min-width: 5.2em;
			text-align: center;
			img{
				width: 2.25em;
				height: 2.25em;
				margin-bottom: 0.25em;
				display: inline-block;
			}
			span{
				font-size: 0.75em;
				display: block;
			}
		}

	}
</style>
