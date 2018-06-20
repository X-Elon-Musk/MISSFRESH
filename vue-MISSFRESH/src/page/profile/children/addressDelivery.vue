<template>
    <div class="profile-item-page profile-item-page-addressDelivery">
    	<mheader title="收货地址"></mheader>
		<div class="search-box">
        	<div class="search-bar">
        		<form class="search-form" v-on:submit.prevent>
	        		<i class="search-logo"></i> 
	        		<!-- <input type="text" autofocus="autofocus" class="search-input" @input="suggestionLocation($event)"> -->
	        		<input type="text" autofocus="autofocus" class="search-input" required v-model='inputVaule'>
	        		<input type="submit" name="submit" class="search-submit" @click='suggestionLocation' value="提交">
	        	</form>
        	</div>
        </div>
		<ul class="search-result">
			<li class="search-list" v-for="(item,index) in searchResult" :key="index" @click="changeCurrentRegion(item)">
			<!-- <li class="search-list" v-for="(item,index) in searchResult" :key="index"> -->
				<div class="location-title">{{item.title}}</div> 
				<div class="location-desc">{{item.address}}</div>
			</li>
		</ul>
    </div>  
</template>
<script>
	import {mapState} from 'vuex'
	import mheader from 'src/components/mheader/mheader'
	// import profileItem from '../component/profileItem'
	export default{
		data(){
			return {
				
			}
		},
		computed: {
	    	...mapState([
                's_userInfo'
            ]),
        },
        methods: {
			/*addAddress(){
				this.$router.go(-1);
			}*/
		},
		components: {
			mheader
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.profile-item-page-addressDelivery{
		
	}
</style>
