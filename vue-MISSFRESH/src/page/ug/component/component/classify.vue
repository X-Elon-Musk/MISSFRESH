<template>
    <div class="section-classify">
        <div class="header">
            全部分类
            <span class="close-icon" @click="closeButton"></span>
        </div>
        <ul class="clearfix classify-icons">
            <li v-for="(item,index) in categorylist" @click="iconClick(index)">
                <span :style="{backgroundImage:`url(${item.image})`}"></span>
                <h4>{{item.name}}</h4>
            </li>
        </ul>
    </div>
	
</template>
<script>

	export default{
		data(){
			return {
				
			}
		},
        props: ['categorylist'],
        methods: {
            closeButton() {
                this.$emit("closeClassify");
            },
            iconClick(index) {
                // console.log(index);
                this.closeButton();
                this.$emit("tabMove",index);
            }
                   
        }
	}
</script>
<style lang="less">
    @import '~src/style/mixin';
	.section-classify{
        position: fixed;
        left: 0;
        top: 36px;
        bottom: 0;
        z-index: 2;
        width: 100%;
        background: rgba(0,0,0,0.7);
        color: #4d4d4d;
        .header{
            background: #fff;
            .wh(40px);
            position: relative;
            text-align: center;
            line-height: 40px;
            border-bottom: 1PX solid #e6e6e6;
            .close-icon{
                position: absolute;
                right: 0;
                bottom: 0;
                .bg(40px,40px,#fff,'~images/icon/close.png',1.2rem);
            }
        }
        .classify-icons{
            height: auto;
            min-height: 30%;
            max-height: 50%;
            overflow-y: auto;
            background: #fff;
            padding-top: 1em;
            li{
                float: left;
                .wh(60px,33.33%);
                padding-bottom: 1em;
                span{
                    display: inline-block;
                    width: 100%;
                    height: 40px;
                    background-size: 2.25rem;
                    background-position: center center;
                    background-repeat: no-repeat; 
                }
                h4{
                    line-height: 20px;
                    font-size: 0.8em;
                    text-align: center;
                    font-weight: normal;
                }
            }
        }
    }
    .section-classify ::-webkit-scrollbar {
        .wh(0,0);
    }
</style>