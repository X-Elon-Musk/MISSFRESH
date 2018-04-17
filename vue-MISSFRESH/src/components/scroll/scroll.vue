<template>
	<div class="wrapper" id="wrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return {
				scroll: null
			}
		},
		mounted (){
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll=new BScroll(this.$refs.wrapper, {
						deceleration: 0.001,
	                    bounce: true,
	                    swipeTime: 2000,
						scrollX: true,
						scrollY: false,
		                click: true,
		            });	
		        } else{
					this.scroll.refresh();
				}	
            })
		},
		methods: {
			refresh() {
				this.scroll&&this.scroll.refresh()
			},
			scrollTo() {
				this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)
			}
		}
	}
</script>
<style lang='less'>
#wrapper{
	position: relative;
    z-index: 1;
    height: 40px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden; 
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>