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
            <!-- <li><span></span><h4>抢30元红包</h4></li>
            <li><span></span><h4>水果</h4></li>
            <li><span></span><h4>蔬菜</h4></li>
            <li><span></span><h4>乳品</h4></li>
            <li><span></span><h4>肉类</h4></li>
            <li><span></span><h4>零食</h4></li>
            <li><span></span><h4>酒饮</h4></li>
            <li><span></span><h4>水产</h4></li>
            <li><span></span><h4>速食</h4></li>
            <li><span></span><h4>熟食</h4></li>
            <li><span></span><h4>粮油</h4></li>
            <li><span></span><h4>轻食</h4></li>
            <li><span></span><h4>日百</h4></li>
            <li><span></span><h4>明日早餐</h4></li> -->
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
            closeButton: function () {
                this.$emit("closeClassify");
            },
            iconClick: function (index) {
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
            // width: 100%;
            // height: 40px;
            .wh(40px);
            position: relative;
            text-align: center;
            line-height: 40px;
            border-bottom: 1PX solid #e6e6e6;
            .close-icon{
                position: absolute;
                right: 0;
                bottom: 0;
                // width: 40px;
                // height: 40px;
                // background: #fff url(~images/icon/close.png) no-repeat center center;
                // background-size: 1.2rem;
                .bg(40px,40px,#fff,'~images/icon/close.png',1.2rem);
                // z-index: 15;
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
                // width: 33.33%;
                // height: 60px;
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
            /* li:nth-of-type(1){
                span{
                    background-image: url(~images/classify/classify_0.png);
                }
            }
            li:nth-of-type(2){
                span{
                    background-image: url(~images/classify/classify_1.png);
                }
            }
            li:nth-of-type(3){
                span{
                    background-image: url(~images/classify/classify_2.png);
                }
            }
            li:nth-of-type(4){
                span{
                    background-image: url(~images/classify/classify_3.png);
                }
            }
            li:nth-of-type(5){
                span{
                    background-image: url(~images/classify/classify_4.png);
                }
            }
            li:nth-of-type(6){
                span{
                    background-image: url(~images/classify/classify_5.png);
                }
            }
            li:nth-of-type(7){
                span{
                    background-image: url(~images/classify/classify_6.png);
                }
            }
            li:nth-of-type(8){
                span{
                    background-image: url(~images/classify/classify_7.png);
                }
            }
            li:nth-of-type(9){
                span{
                    background-image: url(~images/classify/classify_8.png);
                }
            }
            li:nth-of-type(10){
                span{
                    background-image: url(~images/classify/classify_9.png);
                }
            }
            li:nth-of-type(11){
                span{
                    background-image: url(~images/classify/classify_10.png);
                }
            }
            li:nth-of-type(12){
                span{
                    background-image: url(~images/classify/classify_11.png);
                }
            }
            li:nth-of-type(13){
                span{
                    background-image: url(~images/classify/classify_12.png);
                }
            }
            li:nth-of-type(14){
                span{
                    background-image: url(~images/classify/classify_13.png);
                }
            }
            li:nth-of-type(15){
                span{
                    background-image: url(~images/classify/classify_14.png);
                }
            } */
        }
    }
    .section-classify ::-webkit-scrollbar {
        // width: 0;
        // height: 0;
        .wh(0,0);
    }
</style>