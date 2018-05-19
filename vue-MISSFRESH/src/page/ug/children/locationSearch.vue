<template>
    <div class="location-search">
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
		<ul class="location-result">
			<li class="location-list" v-for="(item,index) in searchResult" :key="index" @click="changeCurrentRegion(item)">
			<!-- <li class="location-list" v-for="(item,index) in searchResult" :key="index"> -->
				<div class="location-title">{{item.title}}</div> 
				<div class="location-desc">{{item.address}}</div>
			</li>
		</ul>
    </div>  
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
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
			//获取当前地址
			// suggestionLocation: function (event,callback) {
			suggestionLocation: function (callback) {
				let _this=this;
				if (this.inputVaule) {
					// let keyword=event.target.value;
					let keyword=this.inputVaule;
					let cityName=this.s_choseCity;
					console.log(keyword);
					//post方法
					this.axios.post('http://localhost:3390/position/locationsuggestion', {
					    keyword: keyword,
						cityName: cityName
					}, {
	                    headers:{
	                        'Content-Type': 'application/x-www-form-urlencoded'
	                    }
	                })
					.then(function (response) {
						if (response.data.status==0) {
							// resolve(response.data.result)
							_this.searchResult=[].concat(response.data.data);
						}
					  	console.log(response.data);
					})
					.catch(function (error) {
					  	console.log(error);
					});		
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
				/*this.SET_POSITION({
					id: city.adcode,
					name: city.name,
					province: city.province,
					district: city.district
				}, {
					address: city.address,
					distance: city.distance,
					name: city.name
				}, {
					accuracy: city.type,
					lat: city.location.lat,
					lng: city.location.lng
				}, {
					accuracy: city.type,
					lat: city.location.lat,
					lng: city.location.lng
				}, {
					id: city.id,
				});*/
				this.SET_POSITION({
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
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4; 
		background: #fff;
		overflow-y: auto;
		color: @color_common;
		// background: @bg_color;
		.search-box{
			background-color: #fff;
			color: #4b4b4b;
			box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.1);
			border-bottom: none;
			top: 0;
			position: fixed;
			border-top-width: 0;
			width: 100%;
			height: @header_height;
			padding: 4px 4%;
			box-sizing: border-box;
			.search-bar{
				.wh(100%,100%);
				.search-form{
					display: block;
					.wh(100%,100%);
					position: relative;
					.search-logo{
						position: absolute;
						left: 0;
						top: 0;
						.bg(28px,28px,transparent,'~images/icon/search-logo.png',76% 76%);
					}
					.search-input{
						background-color: #f5f5f5;
						.wh(100%,100%);
						border-radius: 0.25rem;
						font-size: 0.875rem;
						text-indent: 1.875rem;
						border: none;
						outline: none;
					}
					.search-submit{
						display: none;
					}
				}
			}
		}
		.location-result{
			.wh(auto, 100%);
			padding: 42px 4% 0;
			box-sizing: border-box;
			background: #fff;
			.location-list{
				color: #4C4440;
				border-bottom: 1px solid #f5f5f5;
				line-height: 1.6em;
				font-size: 0.7em;
				padding: 0.35em 0;
				.location-title{
					font-weight: 700;
				}
			}
		}
	}
</style>
