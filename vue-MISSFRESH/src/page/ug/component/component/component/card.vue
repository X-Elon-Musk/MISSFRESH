<template>
	<div class="clearfix card-wrap">
		<div class="wrap-left f_l">
            <router-link v-for="(item,index) in categoryareas" v-if="index<1" :to="{path: '/'}" :key="index" tag="div" class="card-wrap-img">
                <img :src="item.image">
            </router-link>
		</div>
		<div class="wrap-right f_r">
            <div class="wrap-right-top">
                 <router-link v-for="(item,index) in categoryareas" v-if="index==1" :to="{path: '/'}" :key="index" tag="div" class="card-wrap-img">
                    <img :src="item.image">
                </router-link>
            </div>
			<div class="clearfix wrap-right-bottom">
                <router-link v-for="(item,index) in categoryareas" v-if="index>1" :to="{path: '/'}" :key="index" tag="div" class="f_l card-wrap-img">
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