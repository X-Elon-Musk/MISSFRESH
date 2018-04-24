<template>
	<div class="clearfix card-wrap">
		<div class="wrap-left f_l">
			<a href="/" class="card-wrap-img card-wrap-0">
				<img src="~images/card-wrap-0.png">
			</a>
		</div>
		<div class="wrap-right f_r">
            <div class="wrap-right-top">
                <a href="/" class="card-wrap-img card-wrap-1">
                    <img src="~images/card-wrap-1.png">
                </a>
            </div>
			<div class="wrap-right-bottom">
				<a href="/" class="card-wrap-img card-wrap-2">
    				<img src="~images/card-wrap-2.png">
    			</a>
    			<a href="/" class="card-wrap-img card-wrap-3">
    				<img src="~images/card-wrap-3.png">
    			</a>
			</div>
		</div>
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
<style lang="less">
	.card-wrap{
		width: 100%;
        height: 118px;
    	padding: 0 15px;
    	box-sizing: border-box;
        a{
            display: inline-block;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    	.wrap-left{
    		width: 53.7%;
            height: 100%;
    		position: relative;
    		overflow: hidden;
    		border-radius: 4px;
    	}
    	.wrap-right{
    		width: 44.4%;
            height: 100%;
            .wrap-right-top{
                height: 60px;
            }
    		.wrap-right-bottom{
    			margin-top: 5px;
    			width: 100%;
                height: 53px;
                display: flex;
                a{
                    flex: 1;
                }
                a:nth-of-type(2){
                    margin-left: 5px;
                }
    		}
    	}
	}
</style>