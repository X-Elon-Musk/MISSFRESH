<template>
    <div class="loading-container">
	    <div class="loading-icon"></div>
	</div>
</template>
<script>
	export default{
		data(){
            return{
            }
        }
    }
</script>
<style lang="less">
	@import '~src/style/mixin';
	.loading-container{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		.loading-icon{
	    	position: absolute;
	    	top: 50%;
	    	left: 50%;
	    	transform: translate(-50%, -50%);
	    	.bg(215px, 100px,transparent,'~src/images/icon/loading-gif-vip.gif',50% 50%);
	    }
	}	
</style>
