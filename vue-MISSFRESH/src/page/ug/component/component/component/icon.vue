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
		font-size: 0.75rem;
		line-height: 3.0625rem;
		text-align: center;
		.guarantee-icon{
			display: inline-block;
			.wh(1.0rem,1.0rem);
			vertical-align: sub;
		}
		strong{
			vertical-align: top;
			font-weight: normal;
		}
	}
</style>
