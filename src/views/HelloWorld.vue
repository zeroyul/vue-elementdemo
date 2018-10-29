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
    		测试计算属性computed厉害了 测试椿椿椿
    	</span>
    	<section>我是椿</section>
    	<div  :class="{colorgreen:isLogin}">computed</div>
    	<div>计算属性的反转 {{reverseMsg}}</div>
    	<section class="test-rem">我是湫湫湫</section>
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
    
    <div @click.prevent="getname($event)" data-name="name1">
    	<span>55</span>
    	
    </div>
    <div @click.prevent="getname($event)" data-name="name2">
    	<span>55</span>
    </div>
    <div>小提琴</div>
    <div class="top-head">
    	<ul>
    		<li :class="[{active:item.show}]" @click="changeli(index,item)" v-for="(item,index) in headerData">
    			{{item.name}}{{item.show}}
    				<ul v-show="item.show">
    					<li v-for="(el,index) in item.list" @click.stop="doThis(index)">{{el}}</li>
    				</ul>
    		</li>
    	</ul>
    </div>
    
    <div @click="getMock">mock数据测试</div>
    <h1>filter测试</h1>
    <ul>
    	<li v-for="(item,index) in filterArray">
    		{{item|guaranteeStatus}}
    	</li>
    </ul>
    <h2>电话过滤{{phone|PrivacyPhone}}</h2>
    <h2>银行卡格式化{{cardNo|bankNumber}}</h2>
    <h2>亿万元过滤器{{money|amount}}</h2>
<<<<<<< HEAD
    <section class="testnew"></section>
=======
    <h1>新建分支测试</h1>
    <h2>回滚2</h2>
    <div>假如改了几个版本了，然后要撤回到某一个版本</div>
    <section class="testNew">
    	测试的新区块
    </section>
>>>>>>> test
  </div>
  
</template>
<script>
export default {
  name: 'hello', /* 这个name暂时不知道用啥用，根据官方文档说的是方便排错的 */
  data () {
    return {
    	headerData:[{
    		name:'标题1',
    		list:['子一','子二','子三','子四'],
    		show:false
    	},{
    		name:'标题2',
    		list:['子一','子二','子三','子四'],
    		show:false
    	},{
    		name:'标题3',
    		list:['子一','子二','子三','子四'],
    		show:false
    	},{
    		name:'标题4',
    		list:['子一','子二','子三','子四'],
    		show:false
    	},],
      msg: 'Welcome to Your Vue.js App', /* 这里是数据，一定记住数据一定要放data中然后用return返回 */
    	question:'',
    	inputchange:'',
    	answer:'I cannot give',
    	filterArray:[1,3,2,0,0,2,3],
    	phone:18046597777,
    	cardNo:6226555555555555,
    	money:6000000
    	
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
  	},
  	getname(e){
  		console.log(e,e.target.getAttribute('data-name'),"name")
  	},
  	changeli(ind,item){
  		item.show =!item.show;
  		console.log(item.name);
  		console.log(ind,"index")
  	},
  	doThis(index){
  		console.log(index,'index2');
  	},
  	getMock(){
  		this.$ajax.get('/personList').then(function(res){
          console.log(res)
        }).catch(function(err){
          console.log(err)
        })

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
		font-size: 26px;
	}
	.colorgreen{
		color: green;
	}
	.colorred{
		color:red;
	}
	.test-rem{
		height: 100px;
		font-size: 30px;
	}
}
<<<<<<< HEAD
.testnew{
	background: orange;
	width: 500px;
	height: 200px;
=======
.testNew{
	height: 100px;
	width: 200px;
	background: deepskyblue;
>>>>>>> test
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
.top-head{
	
	width: 300px;
	background-color: #ff5722;
	color: #ffffff;
	>ul {
	    width: 100%;
	    
	    >li {
	        width: 100%;
	        border: 1px solid #ffffff;
	        cursor: pointer; 
	        color: 20px;
	        text-align: center;
	        line-height: 60px;
	        &:hover {
	            background-color: #ff9800;
	        }
	        >ul {
	            width: 100%;
	            background: red;
	            li{
	                &:hover{
	                    background: #c31111;
	                }
	            }
	        }
	    }
	    .active {
	        background-color: #ff9800;
	    }
	}
    
}
</style>
