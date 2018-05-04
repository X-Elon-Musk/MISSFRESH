<template>
	<div class="guarantee-container">
		<div v-for="item in icons"  class="guarantee-icons">
			<icon :bgImage="item"></icon>	
		</div>		
	</div>	
</template>
<script>
	import icon from './children/icon'
	export default{
		data(){
			return {
				icons:[
					require('images/icon/guarantee_0.png'),
					require('images/icon/guarantee_1.png'),
					require('images/icon/guarantee_2.png'),
				]
			}
		},
		components: {
			icon
		}
	}
</script>
<style lang="less">
	.guarantee-container{
		height: 49px;
		display: flex;
		.guarantee-icons{
			flex: 1;
		}
	}
	
</style>
