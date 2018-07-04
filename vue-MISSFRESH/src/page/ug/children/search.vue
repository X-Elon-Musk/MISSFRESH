<template>
    <div class="product-search page-search">
        <div class="clearfix search-box">
        	<span class="f_l back" @click="goBack"></span>
        	<div class="f_l search-bar">
        		<form class="search-form" v-on:submit.prevent>
	        		<i class="search-logo"></i> 
	        		<input type="text" autofocus="autofocus" class="search-input" required v-model='inputVaule' placeholder="请输入商品名称">
	        		<input type="submit" name="submit" class="search-submit" @click='suggestionProducts' value="提交">
	        		<i class="search-close" v-show="inputVaule" @click='clearValue'></i> 
	        	</form>
        	</div>
        	<span class="f_r search-button" @click="suggestionProducts">搜索</span>
        </div>
		<ul class="search-result">
			<li class="search-association-title" v-show="searchResult.trans_title">{{searchResult.trans_title}}</li>
			<router-link :to="{path: '/ug/productDetail',query:{product_id: item.product_id,product_index: item.product_index}}" tag="li" class="search-list" v-for="(item,index) in searchResult.active_item" :key="index">{{item.displayName}}</router-link>	
		</ul>
    </div>  
</template>
<script>
	import {suggestionProductsAxios} from 'src/service/getData'
	export default{
		data(){
			return {
				inputVaule: '',
				searchResult: {}
			}
		},
		methods: {
			// 商品搜索
			suggestionProducts() {
				let _this=this;
				if (this.inputVaule) {
					let name=this.inputVaule;
					suggestionProductsAxios(name).then(response=>{
						if (response.code==0) {
							this.searchResult=response.data[0];
						}
					})		
				}
			},
			// 回到上一页
			goBack(){
				this.$router.go(-1);
			},
			clearValue(){
				this.inputVaule='';
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.product-search{
		background-color: #f5f5f5;
		.search-box{
			.back{
				.bg(10%,100%,transparent,'~src/images/icon/back-image.png',70% 70%);
				margin-right: 2%;
			}
			.search-bar{
				.wh(100%,72%);
				.search-close{
					position: absolute;
					right: 0;
					top: 1px;
					.bg(24px,24px,transparent,'~images/icon/close.png',66% 66%);
				}
			}
			.search-button{
				.wh(100%, 16%);
				text-align: center;
				line-height: 24px;
				font-size: 0.875rem;
			}
		}
		.search-result{
			padding: 42px 0 0;
			background: none;
			li{
				line-height: 2em;
				font-size: 0.8em;
				padding: 0 4%;
			}
			.search-association-title{
				color: #969696;
			}
			.search-list{
				padding: 0 4%;
				line-height: 3em;
				background: #fff;
				white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			}
		}
	}
</style>
