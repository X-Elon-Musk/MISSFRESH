<template>
    <div class="guarantee">
        <span :style="{backgroundImage: `url(${bgImage})`}"></span>
    	<strong>优鲜严选</strong>
    </div>  
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		props: ['bgImage']
	}
</script>
<style lang="less">
	.guarantee{
		flex:1;
		font-size: 12px;
		line-height: 49px;
		text-align: center;
		span{
			vertical-align: top;
			display: inline-block;
			width: 16px;
			height: 16px;
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
