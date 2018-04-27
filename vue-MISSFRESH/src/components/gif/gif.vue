<template>
    <!-- 刷新GIF -->
	<div class="refresh-gif">
		<span></span>
	</div>  
</template>
<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>
<style lang="less">
	.refresh-gif{
		text-align: center;
		padding: 0;
		height: 43px;
		border: none;
		span{
			text-align: center;
			display: inline-block;
			height: 43px;
			width: 43px;
			background: url(~images/loading.gif) no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
