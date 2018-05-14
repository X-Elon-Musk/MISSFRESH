<template>
	<div class="app-content">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
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
<style>
	@import './style/common';
	/*@import './style/mixin';*/
	.app-content ::-webkit-scrollbar{
		display: none;
	}
</style>