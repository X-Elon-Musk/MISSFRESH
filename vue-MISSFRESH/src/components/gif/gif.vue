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
    @import '~src/style/mixin';
	.refresh-gif{
		text-align: center;
		padding: 0;
		height: 43px;
		border: none;
		span{
			text-align: center;
			display: inline-block;
			.bg(93px, 43px,transparent,'~images/icon/loading-gif-vip.gif',100% 100%);
		}
	}
</style>
