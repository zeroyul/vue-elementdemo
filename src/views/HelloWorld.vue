<template>
  <div class="hello">
    <h1>{{ msg }}</h1><!-- 这里是展示数据中的  -->
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="test-computed">    	
    	<span @click="clickComputed">
    		测试计算属性computed厉害了 测试湫湫湫
    	</span>
    	<div  :class="{colorgreen:isLogin}">computed</div>
    	<div>计算属性的反转 {{reverseMsg}}</div>
    </div>
    <div>
    	<h1>watch测试</h1>
    	<input v-model="question" />
    	<p>{{answer}}</p>
    </div>
    <div>
    	<input type="text" @change="change" v-model="inputchange"/>
    	<p>{{inputchange}}</p>
    	<input v-model.lazy="msg"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello', /* 这个name暂时不知道用啥用，根据官方文档说的是方便排错的 */
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', /* 这里是数据，一定记住数据一定要放data中然后用return返回 */
    	question:'',
    	inputchange:'',
    	answer:'I cannot give'
    }
  },
  watch:{
  	question:function(newQuestion,oldQuestion){
  		console.log(newQuestion,oldQuestion)
  		this.answer = 'waiting for you'
  		this.doSomething()
  	}
  },
  computed:{
  	isLogin(){
  		const _islogin = true;
  		if(_islogin){
  			return true;
  		}else{
  			return false;
  		}
  	},
  	reverseMsg(){
  		console.log('computed')
  		return this.msg.split('').reverse().join('')
  	}
  	
  },
//beforeCreate:function(){
//	console.log("beforeCreate")
//	console.log(this.msg)
//},
//created:function(){
//	console.log("created")
//	console.log(this.msg)
//},
//beforeMount:function(){
//	console.log("beforeMount")
//	console.log(this.msg)
//},
//mounted:function(){
//	console.log("mounted")
//	console.log(this.msg)
//},
//beforeUpdate:function(){
//	console.log("beforeUpdate")
//	console.log(this.msg)
//},
//updated:function(){
//	console.log("updated")
//	console.log(this.msg)
//},
//beforeDestroy:function(){
//	console.log("beforeDestroy")
//	console.log(this.msg)
//},
//destroyed:function(){
//	console.log("destroyed")
//	console.log(this.msg)
//},
  methods:{
  	
  	clickComputed(){
  		console.log(this.msg,this.reverseMsg,this.isLogin);
  	},
  	doSomething(){
  		console.log('dosometing')
  	},
  	change(){
  		console.log(this.inputchange)
  	}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> /* scoped的意思是这里的样式只对当前页面有效不会影响其他页面，还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less  */
h1, h2 {
  font-weight: normal;
}
.test-computed{
	span{
		color: blue;
	}
	.colorgreen{
		color: green;
	}
	.colorred{
		color:red;
	}
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
