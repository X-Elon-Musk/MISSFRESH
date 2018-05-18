# vue-missfresh

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


***
#### 问题解决:

- 跨域解决方法：jsonp只能解决get请求的跨域，xmlhttprequest可以实现post跨域
- backgroundImage中url的使用
- image的src引入图片
    方法一：通过相对路径去查找`<img src="../../images/fresh-news/0.jpg">`
    方法二：用require方法将图片作为模块加载进去
    方法三：`<img src="~src/images/fresh-news/0.jpg">`
- mint-ui的引入
- swiper的使用
- @impot引入less问题

    ```
    <style lang='less' scoped rel="stylesheet/less">
        @import 'src/style/mixin'(报错)
        @import 'src/style/mixin';(报错)
        @import '~src/style/mixin';(正确)
    </style>
    ```

-报错：`Cannot use v-for on stateful component root element because it renders multiple elements.`
 原因：

    ```
        <template>
            <div class="product" v-for="product in products">
            ···
            </div> 
        </template>
    ```
- vue无法进行超过三层的数据传递
```
<p :price="product.vip_price_pro.price_up.price"></p>   //报错
```
- vue 项目中 “父组件” 异步获取数据之后，传递给子组件不显示

```
<productHot :products="products"></productHot>  //父组件

<div v-for="(item,index) in productsShow" :key="index">    //子组件
this.productsShow=this.products.slice(0,4);
```
因为进来的时候，products默认为空数组，子组件渲染的时候，props的值还没有传输进来，所以productsShow等于空数组。解决方法：
1.直接渲染products，不要渲染productsShow
2.建立一个watch,监听products变化，再赋值给productsShow
- nodejs服务器读取图片返回给前端（浏览器）显示
```
app.get('/public/images/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})
```
- axios在node中的post使用
```
import qs from 'qs';(qs模块axios自带)
axios.post('/test',qs.stringify(data))
.then((res)=>{

})
```