import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404'
import HelloWorld from '@/views/HelloWorld'
import Eui from '@/views/Eui'
import FormTest from '@/views/FormTest'
import Table from '@/views/Table'
import TreePagi from '@/views/TreePagi'
import Navigation from '@/views/Navigation'
import Httpdemo from '@/views/httpdemo'
import Ueditor from '@/views/ueditor'
import Echarts from '@/views/echarts'
import Photo from '@/views/photo'

import login from '@/views/login'
import Home from '@/views/Home'
import Manage from '@/views/Manage'
import ShopClassify from '@/views/ShopClassify'
import ShopList from '@/views/ShopList'
import AddShop from '@/views/AddShop'
import UserList from '@/views/UserList'
import AddUser from '@/views/AddUser'
import OrderList from '@/views/OrderList'
import OrderAnalysis from '@/views/OrderAnalysis'
import {setCookie,getCookie} from '../common/js/cookie.js'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path:'/Manage',
      component:Manage,
      name:'',
      children:[{
        path:'',
        component:Home,
        name:'Home',
        meta:[],
      },{
        path:'/ShopClassify',
        component:ShopClassify,
        name:'ShopClassify',
        meta:['标品管理','标品分类'],
      },{
        path:'/ShopList',
        component:ShopList,
        name:'ShopList',
        meta:['标品管理','标品列表'],
      },{
        path:'/AddShop',
        component:AddShop,
        name:'AddShop',
        meta:['标品管理','标品添加'],
      },{
        path:'/UserList',
        component:UserList,
        name:'UserList',
        meta:['用户管理','用户列表'],
      },{
        path:'/AddUser',
        component:AddUser,
        name:'AddUser',
        meta:['用户管理','添加用户'],
      },{
        path:'/OrderList',
        component:OrderList,
        name:'OrderList',
        meta:['订单管理','订单列表'],
      },{
        path:'/OrderAnalysis',
        component:OrderAnalysis,
        name:'OrderAnalysis',
        meta:['订单管理','订单分析'],
      },{
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
        meta:['测试功能','测试首页']
      },
      {
        path: '/eui',
        name: 'Eui',
        component: Eui,
        meta:['测试功能','elementUi']
      },
      {
        path: '/formtest',
        name: 'FormTest',
        component: FormTest,
        meta:['测试功能','表单测试']
      },
      {
        path: '/table',
        name: 'Table',
        component: Table,
        meta:['测试功能','table测试']
      },
      {
        path: '/TreePagi',
        name: 'TreePagi',
        component: TreePagi,
        meta:['测试功能','分页和树形']
      },
      {
        path: '/navigation',
        name: 'Navigation',
        component: Navigation,
        meta:['测试功能','导航']
      },
      {
        path: '/httpdemo',
        name: 'Httpdemo',
        component: Httpdemo,
        meta:['测试功能','http测试']
      },
      {
        path: '/ueditor',
        name: 'Ueditor',
        component: Ueditor,
        meta:['测试功能','ueditor']
      },
      {
        path: '/echarts',
        name: 'Echarts',
        component: Echarts,
        meta:['测试功能','echarts']
      },
      {
        path: '/photo',
        name: 'Photo',
        component: Photo,
        meta:['测试功能','上传图片测试']
      }


      ]
    }
    
  ]
})
router.beforeEach((to,from,next) => {
	console.log('navigation-guards');
	//to: Route:即将要进入的目标路由对象
	//from: Route:当前导航正要离开的路由
	//next: Function:一定要调用该方法来resolve这个钩子。执行效果依赖next方法的调用参数
	const nextRoute = ['ShopClassify','ShopList','Home','AddShop','UserList','AddUser','OrderList']
	let isLogin = getCookie('username')?true:false;
	console.log(isLogin)
	if (nextRoute.indexOf(to.name) >= 0){
		if(!isLogin){
			console.log('未登录');
			router.push({name:'login'})
		}
	}
	//已登录状态；当路由到login时，跳转至home
	if (to.name === 'login'){
		if(isLogin){
			router.push({name:'home'})
		}
	}
	next();

})

export default router;
