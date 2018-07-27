<template>
    <div class="location-search page-search">
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
	import {mapState, mapMutations} from 'vuex'
	import {suggestionLocationAxios} from 'src/service/getData'
	import {getStore} from 'src/config/mUtils.js'
	export default{
		data(){
			return {
				inputVaule: '',
				searchResult: []
			}
		},
		computed: {
			...mapState([
                's_currentRegion', 's_choseCity'
            ])
        },
		methods: {
			...mapMutations([
                'SET_POSITION'
            ]),
			// 搜索地址推荐
			suggestionLocation() {
				let _this=this;
				if (this.inputVaule) {
					let keyword=this.inputVaule,
					cityName=this.s_choseCity||getStore('choseCity');
					suggestionLocationAxios(keyword, cityName).then(response=>{
						this.searchResult=response.data;
					})
				}
			},
			//改变当前城市信息
			changeCurrentRegion(city){
				let chosecity={
					id: city.adcode,
					name: city.city,
					province: city.province,
					district: city.district
				};
				let building={
					address: city.address,
					distance: city.distance||'',
					name: city.title
				};
				let location={
					accuracy: city.type,
					lat: city.location.lat,
					lng: city.location.lng
				};
				let position={
					accuracy: city.type,
					lat: city.location.lat,
					lng: city.location.lng
				}
				let station={
					id: city.id,
				};
				this.SET_POSITION({
					type: 1,
					city: chosecity, 
					building, 
					location, 
					position, 
					station
				});
				this.$router.push('/ug');
			}	
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.location-search{
		.location-title{
			font-weight: 700;
		}
	}
</style>
