<template>
	<div class="guarantee-container">
		<div v-for="item in brands"  class="guarantee-icons">
			<icon :brand="item"></icon>	
		</div>		
	</div>	
</template>
<script>
	import icon from './icon'
	export default{
		data(){
			return {
			}
		},
		props: ['brands'],
		components: {
			icon
		}
	}
</script>
<style lang="less">
	.guarantee-container{
		height: 3.0625rem;
		display: flex;
		.guarantee-icons{
			flex: 1;
		}
	}
	
</style>
