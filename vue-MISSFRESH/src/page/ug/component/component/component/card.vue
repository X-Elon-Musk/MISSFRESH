<template>
	<div class="clearfix card-wrap">
		<div class="wrap-left f_l">
			<!-- <a href="/" class="card-wrap-img card-wrap-0">
				<img src="~images/card-wrap-0.png">
			</a> -->
            <router-link :to="{path: '/',query:{id: categoryareas[0].product_id,index: categoryareas[0].product_index}}" tag="div" class="card-wrap-img">
                <img :src="categoryareas[0].image">
            </router-link>
		</div>
		<div class="wrap-right f_r">
            <div class="wrap-right-top">
                <!-- <a href="/" class="card-wrap-img card-wrap-1">
                    <img src="~images/card-wrap-1.png">
                </a> -->
                <router-link :to="{path: '/',query:{id: categoryareas[1].product_id,index: categoryareas[1].product_index}}" tag="div" class="card-wrap-img">
                    <img :src="categoryareas[1].image">
                </router-link>
            </div>
			<div class="clearfix wrap-right-bottom">
				<!-- <a href="/" class="card-wrap-img card-wrap-2">
    				<img src="~images/card-wrap-2.png">
    			</a>
    			<a href="/" class="card-wrap-img card-wrap-3">
    				<img src="~images/card-wrap-3.png">
    			</a> -->
                <router-link v-for="(item,index) in categoryareas" v-if="index>1" :to="{path: '/',query:{id: categoryareas.product_id,index: categoryareas.product_index}}" :key="index" tag="div" class="f_l card-wrap-img">
                    <img :src="item.image">
                </router-link>

			</div>
		</div>
  	</div>
</template>
<script>

	export default{
		data(){
			return {
				
			}
		},
        props: ['categoryareas']
	}
</script>
<style lang="less">
    @import '~src/style/mixin';
	.card-wrap{
		.wh(118px);
    	padding: 0 15px;
    	box-sizing: border-box;
        .card-wrap-img{
            .wh(100%);
            img{
                .wh(100%);
            }
        }
    	.wrap-left{
    		.wh(100%,53.7%);
    		position: relative;
    		overflow: hidden;
    		border-radius: 4px;
    	}
    	.wrap-right{
    		.wh(100%,44.4%);
            .wrap-right-top{
                height: 60px;
            }
    		.wrap-right-bottom{
    			margin-top: 5px;
    			.wh(53px);
                display: flex;
                .card-wrap-img{
                    .wh(100%,48%);
                    &:nth-of-type(2){
                        margin-left: 4%;
                    }
                }
    		}
    	}
	}
</style>