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
			<!-- <li class="location-list">
				<div class="location-title">碧兴园</div> 
				<div class="location-desc">北京市海淀区</div>
			</li> -->
			<li class="location-list" v-for="(item,index) in locationResult" :key="index">
				<div class="location-title">{{item.title}}</div> 
				<div class="location-desc">{{item.address}}</div>
			</li>
		</ul>
    </div>  
</template>
<script>
	export default{
		data(){
			return {
				inputVaule: '',
				location: []
			}
		},
		computed: {
	    	//当前城市
            locationResult: function () {
            	if (this.location) return this.location;
            }
        },
		methods: {
			//获取当前地址
			// suggestionLocation: function (event,callback) {
			suggestionLocation: function (callback) {
				let this_=this;
				if (this.inputVaule) {
					// let keyword=event.target.value;
					let keyword=this.inputVaule;
					console.log(keyword);
					//post方法
					this.axios.post('http://localhost:3390/position/locationsuggestion', {
					    keyword:'知春路',
						cityName:'北京'
					}, {
	                    headers:{
	                        'Content-Type': 'application/x-www-form-urlencoded'
	                    }
	                })
					.then(function (response) {
						if (response.data.status==0) {
							// resolve(response.data.result)
							this_.location=[].concat(response.data.data);
						}
					  	console.log(response.data);
					})
					.catch(function (error) {
					  	console.log(error);
					});		
				}
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
		background: @bg_color;
		.search-box{
			background-color: #fff;
			color: #4b4b4b;
			box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.1);
			border-bottom: none;
			top: 0;
			position: fixed;
			border-top-width: 0;
			width: 100%;
			height: 36px;
			padding: 0.3em 4%;
			box-sizing: border-box;
			.search-bar{
				height: 100%;
				width: 100%;
				.search-form{
					display: block;
					height: 100%;
					width: 100%;
					.search-logo{
						color: transparent;
						background-size: 100% 100%;
						display: inline-block;
						width: 1.25rem;
						height: 1.25rem;
						position: absolute;
						left: 1.25rem;
						top: 0.625rem;
					}
					.search-input{
						background-color: #f5f5f5;
						width: 100%;
						height: 100%;
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
