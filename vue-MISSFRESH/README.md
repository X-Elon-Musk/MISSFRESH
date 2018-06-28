### 前言
本项目想法来源于每日优鲜官网移动端，用vue最大限度的还原官网。
### 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + axios + less
### 项目运行
```
git clone https://github.com/792884274/node-note.git

cd node-note

npm install

node app.js
```
nginx反向代理部署nodejs后，在Xshell中开启node服务
```
关闭应用
[root@izhp37e37j73ghn6yfwf7qz node-note]# sudo forever stop 0

检视运行中的应用
[root@izhp37e37j73ghn6yfwf7qz node-note]# sudo forever list

开启应用
[root@izhp37e37j73ghn6yfwf7qz node-note]# sudo forever start app.js

```

### 项目完成功能
用户注册
验证码输入验证
短信登录
密码登录
QQ登录
用户名修改
手机号绑定
上传头像
密码修改
备忘录显示
备忘录搜索
删除单条备忘录
备忘录编辑
发布备忘录

#### 问题解决:

- 跨域解决方法：jsonp只能解决get请求的跨域，xmlhttprequest可以实现post跨域
- backgroundImage中url的使用
- image的src引入图片
    方法一：通过相对路径去查找`<img src="../../images/fresh-news/0.jpg">`
    方法二：用require方法将图片作为模块加载进去
    方法三：`<img src="~src/images/fresh-news/0.jpg">`
- mint-ui的引入
```
按需引入
import { Picker } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Picker.name, Picker); 
```
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
不能在最外层遍历数组数据
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
- input输入文字后提交，请求数据
```
<form class="search-form" v-on:submit.prevent>
    <i class="search-logo"></i> 
    <input type="text" autofocus="autofocus" class="search-input" required v-model='inputVaule'>
    <input type="submit" name="submit" class="search-submit" @click='suggestionLocation' value="提交">
</form>
```
通过改变v-model值来进行提交。增加`form`和`input type="submit"`标签是为了在输入文字后，点击enter回车键后再进行提交，发送请求。
```
<input type="text" autofocus="autofocus" class="search-input" required @input='suggestionLocation'>//不合适
```