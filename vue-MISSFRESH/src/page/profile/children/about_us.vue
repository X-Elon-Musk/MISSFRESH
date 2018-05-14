<template>
    <div class="profile-item-page about-us">
    	<div class="about-us-info">
    		<img src="~src/images/about-us/0.png">
	    	<img src="~src/images/about-us/1.png">
	    	<img src="~src/images/about-us/2.png">
    	</div>
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
	.about-us{
		.wh(auto);
		overflow-y: auto;
		.about-us-info{
			.wh(auto);
			background: #f5f5f5;
			img{
				display: inline-block;
				.wh(auto);
				margin-bottom: 1em;
			}
		}
	}
</style>
