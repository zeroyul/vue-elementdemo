<template>
    <div>
        <div class="login-wrap" v-show="showLogin">
        	<h3>登录</h3>
        	<p v-show="showTishi">{{tishi}}</p>
        	<input type="text" placeholder="请输入用户名" v-model="username"/>
        	<input type="password" placeholder="请输入密码" v-model="password" />
        	<button @click="login">登录</button>
        	<span @click="ToRegister">没有账号？马上注册</span>
        </div>
        <div class="register-wrap" v-show="showRegister">
        	<h3>注册</h3>
        	<p v-show="showTishi">{{tishi}}</p>
        	<input type="text" placeholder="请输入用户名" v-model="newUsername"/>
        	<input type="password" placeholder="请输入密码" v-model="newPassword"/>
        	<button @click="register">注册</button>
        	<span @click="ToLogin">已有账号？马上登录</span>
        	
        </div>
    </div>
</template>
<script>
	import {setCookie,getCookie} from '../common/js/cookie.js'
	export default{
		data(){
			return{
				showLogin:true,
				showRegister:false,
				showTishi:false,
				tishi:"",
				username:"",
				password:"",
				newUsername:"",
				newPassword:""
			}
		},
		mounted(){
			if(getCookie('username')){
				this.$router.push('/Manage')
			}
		},
		methods:{
			login(){
				if(this.username == ""||this.password == ""){
					alert("请输入用户名或密码")
				}else{
					let data ={'username':this.username,'password':this.password}
					let that = this
					this.$ajax({
			          method:'get',
			          url:'../../static/json/httpdemo.json',
			          data:data
			        }).then(function(res){
			          console.log(res)
						 /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
		              if(res.data.load == -1){
		                  that.tishi = "该用户不存在"
		                  that.showTishi = true
		              }else if(res.data == 0){
		                  that.tishi = "密码输入错误"
		                  that.showTishi = true
		              }else if(res.data == 'admin'){
		              /*路由跳转this.$router.push*/
		                  that.$router.push('/Manage')
		              }else{
		                  that.tishi = "登录成功"
		                  console.log('loading success!')
		                  that.showTishi = true
		                  setCookie('username',that.username,1000*60)
		                  setTimeout(function(){
		                      that.$router.push('/Manage')
		                  }.bind(that),1000)
		              }
			        }).catch(function(err){
			          console.log(err)
			        })
				}
			},
			ToRegister(){
			    this.showRegister = true
			    this.showLogin = false
			},
			ToLogin(){
			    this.showRegister = false
			    this.showLogin = true
			},
			register(){
			    if(this.newUsername == "" || this.newPassword == ""){
			        alert("请输入用户名或密码")
			    }else{
			    	let data = {'username':this.newUsername,'password':this.newPassword}
			    	let that = this
					this.$ajax({
			          method:'get',
			          url:'../../static/json/httpdemo.json',
			          data:data
			        }).then(function(res){
			          console.log(res)
						 /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
		              	if(res.data.login == "ok"){
			                that.tishi = "注册成功"
			                that.showTishi = true
			                that.username = ''
			                that.password = ''
			                 /*注册成功之后再跳回登录页*/
			                setTimeout(function(){
			                    that.showRegister = false
			                    that.showLogin = true
			                    that.showTishi = false
			                }.bind(that),1000)
			            }
			        }).catch(function(err){
			          console.log(err)
			        })
			        
			        
			    }
			}
			
		}
	}
</script>
<style scoped lang="less">
    .login-wrap,.register-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>