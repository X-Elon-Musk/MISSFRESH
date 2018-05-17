<template>
    <div class="mprompt" v-show="mprompt">
    	<div class="mprompt-content">
    		<div class="popup">
	        	<div class="popup-head">
	        		<h3 class="popup-title">您确定删除该商品么?</h3>
	        	</div>
	        	<div class="clearfix popup-buttons">
	        		<div class="f_l button button-cancel" @click="cancelAction">取消</div>
	        		<div class="f_r button button-confirm">确定</div>
	        	</div>
	        </div>
    	</div>
        
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import {mapState,mapMutations} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		computed: {
	    	...mapState([
                's_mpromptStatus'
            ]),
            //提示信息的状态
            mprompt: function () {
                return this.s_mpromptStatus;
            }
        },
		mounted (){
			
		},
		methods: {
			...mapMutations([
                'SET_MPROMPT'
            ]),
			cancelAction: function () {
				this.SET_MPROMPT({status: false});	
			}
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.mprompt{
		.fullscreen(3);
		background: rgba(0,0,0,0.7);
		.mprompt-content{
			border-radius: 15px;
		    .wh(6em,70%);
		    .positionCenter();
		    background: transparent;
		    overflow: hidden;
		    line-height: 3em;
		    font-size: 1.1em;
		}
		.popup{
			.wh(100%,100%);
		    background-color: rgba(255,255,255,.9);
		    animation-name: superScaleIn;
			animation-duration: .2s;
			.popup-head{
				height: 3em;
				text-align: center;
			}	
			.popup-buttons{
				.button{
					.wh(3em,50%);
					text-align: center;	
				}
				.button-confirm{
					position: relative;
					&:before{
						.border(0,0,100%,1px,#ddd,0);
					}
				}
			}
		}
	}
	@keyframes superScaleIn{
		from{
			transform:scale(1.2);
			opacity:0
		}
		to{
			transform:scale(1);
			opacity:1
		}
	}
</style>
