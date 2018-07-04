<template>
    <router-link :to="{path: brand.link,query:{id: brand.product_index}}" tag="div" class="guarantee">
    	<img :src="brand.image" alt="" class="guarantee-icon">
    	<strong>{{brand.name}}</strong>
    </router-link>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		props: ['brand']
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.guarantee{
		flex:1;
		font-size: 12px;
		line-height: 49px;
		text-align: center;
		.guarantee-icon{
			vertical-align: top;
			display: inline-block;
			.wh(16px,16px);
			margin-top: 16px;
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		strong{
			vertical-align: top;
			font-weight: normal;
		}
	}
</style>
