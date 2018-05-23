import Vue from 'vue'
import Router from 'vue-router'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:login
    },
    {
      path:'/Manage',
      component:Manage,
      name:'',
      children:[{
        path:'',
        component:Home,
        meta:[],
      },{
        path:'/ShopClassify',
        component:ShopClassify,
        meta:['标品管理','标品分类'],
      },{
        path:'/ShopList',
        component:ShopList,
        meta:['标品管理','标品列表'],
      },{
        path:'/AddShop',
        component:AddShop,
        meta:['标品管理','标品添加'],
      },{
        path:'/UserList',
        component:UserList,
        meta:['用户管理','用户列表'],
      },{
        path:'/AddUser',
        component:AddUser,
        meta:['用户管理','添加用户'],
      },{
        path:'/OrderList',
        component:OrderList,
        meta:['订单管理','订单列表'],
      },{
        path:'/OrderAnalysis',
        component:OrderAnalysis,
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
