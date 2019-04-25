<template>
  <div class="hello">
    <h1>{{ msg }}</h1><!-- 这里是展示数据中的  -->
   <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
   <el-tree
  :data="data2"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
</el-tree>

<div class="buttons">
  <el-button @click="getCheckedNodes">通过 node 获取</el-button>
  <el-button @click="getCheckedKeys">通过 key 获取</el-button>
  <el-button @click="setCheckedNodes">通过 node 设置</el-button>
  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
  <el-button @click="resetChecked">清空</el-button>
</div>
  <el-button type="text" @click="open2">点击打开Message Box</el-button>
   <el-button type="text" @click="open4">点击打开 Message Box</el-button>
   <el-button plain @click="open">不会自动关闭</el-button>
   <div class="newlesstest">
   <p>less测试一下</p>
   
   </div>
   <!--插槽套组件-->
   <div class="name-title">插槽套组件</div>
   <AlertBox><AlertBox/>come on !slot插槽功能</AlertBox>
   <!--插槽-->
   <div class="name-title">插槽</div>
   <AlertBox>come on !slot插槽功能</AlertBox>
   <div class="move-block">
   	<h2>动态组件</h2>
   		<button
   			v-for="tab in tabs"
   			:key="tab.name"
   			:class="['tab-button',{active:currentTab.name === tab.name}]"
   			@click="currentTab = tab"
   			>{{tab.name}}</button>
   		<component
   			:is="currentTab.component"
   			:callbackdata="callbackdata"
   			class="tab"
   			
   			>	
   			</component>
   </div>
</div>
</template>
<script>
	import AlertBox from '@/components/alertBox/alertBox.vue'
	import testMove from '@/components/inputComponent/index.vue'
	var tabs = [
	  {
	    name: 'Home', 
	    component: testMove
	  },
	  {
	    name: 'Posts',
	    component: {
	      template: '<div>Posts component</div>'
	    }
	  },
	  {
	    name: 'Archive',
	    component: {
	      template: '<div>Archive component</div>',
	    }
	  }
	]
  export default {
    data() {
      return {
      	callbackdata:{
      		name:"动态组件gogogo"
      	},
        msg: '树形结构and分页',
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
      	tabs:tabs,
				currentTab: tabs[0]
      };
    },
    components: {
	    AlertBox
	  },
    methods: {
      open(){
        this.$notify({
          title:'提示',
          message:'这是条神器的天路哎哎',
          duration: 0,
          position: 'bottom-right',
          offset: 300
        })
      },
      open2() {
        this.$confirm('此操作将永久删除该文件，是否继续？','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',

          type:'warning'
        }).then(() => {
          this.$message({
            type:'success',
            message:'删除成功！'
          });
        }).catch( () => {
          this.$message({
            type:'info',
            message:'已取消删除'
          });
        })
      },

      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          cancelButtonClass:'colorred',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        }).catch( () => {
          this.$message({
            type:'info',
            message:'已取消删除'
          })
        });
      },

      handleNodeClick(data) {
        console.log(data);
      },
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'> /* scoped的意思是这里的样式只对当前页面有效不会影响其他页面，还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less  */
.colorred{
  color:red;
  background:#ff671b;
}
.newlesstest{
  background:blue;
   p{
   color:#fff;
   }
}
.name-title{
	color: green;
	font-size: 24px;
}
.move-block{
	color: orangered;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
