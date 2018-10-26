// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import api from './api/api.js'
import ElementUI from 'element-ui'

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

//引入mockjs
require('./mock/mock.js')
//filter数据
require('./filter/filter')  

import echarts from 'echarts'
import 'lib-flexible/flexible.js'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/font/iconfont.css'//字体图标引入
//Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.$http = api
Vue.prototype.$ajax = axios

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
