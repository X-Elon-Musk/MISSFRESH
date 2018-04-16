<template>
	<div class="hello">
		{{msg}}
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg: 'hello world'
			}
		} 
	}
</script>
<style scoped>
	.hello{
		color: #42b983;
	}
</style>