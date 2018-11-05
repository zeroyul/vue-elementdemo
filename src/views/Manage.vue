<template>
    <div class="fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
                <el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#B3C0D1"  router
                @open="handleOpen"
                @close="handleClose"
                >
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-document"></i>标品管理</template>
                        <el-menu-item index="ShopClassify">标品分类</el-menu-item>
                        <el-menu-item index="ShopList">标品列表</el-menu-item>
                        <el-menu-item index="AddShop">标品添加</el-menu-item>

                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-plus"></i>用户管理</template>
                        <el-menu-item index="UserList">用户列表</el-menu-item>
                        <el-menu-item index="AddUser">添加用户</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-star-on"></i>订单管理</template>
                        <el-menu-item index="OrderList">订单列表</el-menu-item>
                        <el-menu-item index="OrderAnalysis">订单分析</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-star-on"></i>测试功能</template>
                        <el-menu-item index="HelloWorld">测试首页</el-menu-item>
                        <el-menu-item index="Eui">elementUi</el-menu-item>
                        <el-menu-item index="FormTest">表单测试</el-menu-item>
                        <el-menu-item index="Table">table测试</el-menu-item>
                        <el-menu-item index="TreePagi">分页和树形</el-menu-item>
                        <el-menu-item index="Navigation">导航</el-menu-item>
                        <el-menu-item index="Httpdemo">http测试</el-menu-item>
                        <el-menu-item index="ueditor">ueditor</el-menu-item>
                        <el-menu-item index="Echarts">echarts</el-menu-item>
                        <el-menu-item index="Photo" disabled>上传图片测试</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%;overflow: auto;background:#f1f2f7;">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    //menu里加router  使用vue-router模式，启用该模式会在激活导航时以index作为path进行路由跳转
    //defaultActive 是激活菜单变色  replace是字符串操作方法
    //设置权限问题的话 根据不同id 获得数组里是否禁用  即可disabled
    export default {
		metaInfo:{
    		title:'Manage'
    	},

        computed: {
            defaultActive: function(){
                console.log(this.$route.path)
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>
<style  lang="less">

</style>