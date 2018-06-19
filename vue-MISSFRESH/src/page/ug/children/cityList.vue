<template>
    <div class="city-list">
    	<div class="list-item" v-for="(item, index) in citylist" :key="index">
    		<h4 class="area-list">{{item.name}}</h4>
    		<span class="area-city" v-for="(city, city_index) in item.areas" :key="city_index" @click="changeCurrentRegion(city)">{{city.name}}</span>
    		<!-- <router-link :to="{path: '/ug/addressChose'}" tag="span" v-for="(city, city_index) in item.areas" :key="city_index" @click="changeCurrentRegion(city)" class="area-city">{{city.name}}</router-link> -->
    	</div>
    	<div class="area-tip">我们将为更多城市提供优质服务，敬请期待</div>
    </div>  
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import {getCityListAxios} from 'src/service/getData'
	export default{
		data(){
			return {
				citylist: []
			}
		},
		mounted (){
			this.$nextTick(()=>{
				this.getCityList();
			})
		},
		computed: {
	    	...mapState([
                's_currentRegion'
            ])
        },
		methods: {
			...mapMutations([
                'SET_POSITION', 'SET_VIEWTYPE'
            ]),
            //获得城市列表
			getCityList(){
				getCityListAxios().then(response=>{
					this.citylist=response;
				})
			},
			//改变当前城市信息
			changeCurrentRegion(city){
				let chosecity={
					id: city.area_code,
					name: city.name,
					province: city.province||'',
					district: city.district||''
				};
				this.SET_POSITION({
					type: 0,
					city: chosecity
				});
				this.SET_VIEWTYPE({
					is_chrome_city: city.is_chrome_city,
					ordering: city.ordering
				});
				// this.$router.push('/ug/addressChose');
				this.$router.replace('/ug/addressChose');
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.city-list{
		position: absolute; 
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4; 
		background: #fff;
		overflow-y: auto;
		color: @color_common; 
		.list-item{
			.wh(auto,100%);
			padding: 0 4%;
			box-sizing: border-box;
			.area-list{
				color: #000;
				font-size: 0.8em;
				padding-left: 0.9375em;
				position: relative;
				padding-top: 1.25em;
				&:before{
					content: '';
					width: 0.5em;
					height: 0.125em;
					background: #000;
					position: absolute;
					left: 0;
					bottom: 0.5em;
				}
				&:after {
					content: '';
					width: 0.5em;
					height: 0.125em;
					background: #000;
					position: absolute;
					bottom: 0.5em;
					margin-left: 0.375em;
				}
			}
			.area-city{
				width: 4.25em;
				border: 1px solid #000;
				margin-top: 1.25em;
				display: inline-block;
				color: #000;
				font-size: 0.8125em;
				line-height: 1.875em;
				text-align: center;
				margin-right: 1.4em;
				background: #f1f4f4;
			}
		}
		.area-tip{
			font-size: 0.8em;
			color: #b8b8b8;
			clear: both;
			text-align: center;
			padding: 3em 0;
		}
	}
</style>
