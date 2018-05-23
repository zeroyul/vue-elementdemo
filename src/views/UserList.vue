<template>
    <div>
        <headTop></headTop>
        <div class="user-table">
            <el-input v-model="name" placeholder="客户名" class="searchinput"></el-input>
            <el-input v-model="phone" placeholder="手机号" class="searchinput"></el-input>
            <el-checkbox class="justice-left" v-model="orderchecked">按邀请人数排序</el-checkbox>

                <el-date-picker
                v-model="begintime"
                class="justice-left"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>


                <el-date-picker
                v-model="stoptime"
                class="justice-left"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>

        <el-button class="justice-left" type="primary" @click="onSubmit">立即查询</el-button>
    </div>
        <div class="table-container">

          <el-table
          border
          :data="userList"
          style="width: 100%"
          >
          <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="客户名">
                        <span>{{props.row.name}}</span>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <span>{{props.row.phone}}</span>
                    </el-form-item>
                    <el-form-item label="积分">
                        <span>{{props.row.integral}}</span>
                    </el-form-item>
                    <el-form-item label="等级">
                        <span>{{props.row.level}}</span>
                    </el-form-item>
                    <el-form-item label="下单数">
                        <span>{{props.row.buynum}}</span>
                    </el-form-item>
                    <el-form-item label="累计消费">
                        <span>{{props.row.consumption}}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
        prop="name"
        label="客户名"
        >
    </el-table-column>
    <el-table-column
    prop="phone"
    label="手机号"
    >
</el-table-column>
<el-table-column
prop="comefrom"
label="用户来源">
</el-table-column>
<el-table-column
prop="invitenum"
label="邀请人数">
</el-table-column>
<el-table-column
prop="integral"
label="积分">
</el-table-column>
<el-table-column
prop="level"
label="等级">
</el-table-column>
<el-table-column
prop="buynum"
label="下单数">
</el-table-column>
<el-table-column
prop="consumption"
label="累计消费">
</el-table-column>
<el-table-column
prop="addtime"
label="添加时间">
</el-table-column>


<el-table-column
label="编辑">
<template slot-scope="scope">
  <!-- 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。 -->
  <el-button @click="handleEdit(scope.row)" type="text" ><i class="el-icon-edit"></i></el-button>
  <el-button @click="handleDelete(scope.row)" type="text" ><i class="el-icon-delete"></i></el-button>
  <el-button @click="handleShelves(scope.row,scope.$index)" type="text" >
    <i v-if="scope.row.state == 1" class="el-icon-download"></i>
    <i v-else class="el-icon-upload2 colordown"></i>
</el-button>
</template>
</el-table-column>
</el-table>
<el-pagination
background
layout="total,prev, pager, next"
:current-page="currentPage"
@current-change="handleCurrentChange"
:total="count">
</el-pagination>
</div>


</div>
</template>
<script type="text/javascript">
    import headTop from '../components/headTop/headTop.vue'
    export default {
        data(){
            return {
                userList:[],
                currentPage:1,
                count:12,
                name:'',//搜索名
                phone:'',//搜索电话
                begintime:'',//开始时间
                stoptime:'',//结束时间
                orderchecked:false
            }
        },
        created(){
            const that = this;
            this.$ajax.get('../../static/json/userlist.json').then(function(res){
                that.userList = res.data;
                console.log(that.userList)
            }).catch(function(err){
                console.log(err)
            })
        },
        components:{
            headTop
        },
        methods:{
            //请求第N页数据
            handleCurrentChange(val){
                const that = this;
                this.currentPage = val;
                console.log(val)
                this.$ajax.get('../../static/json/userlist.json').then(function(res){
                    console.log(res.data)
                    that.userList = res.data.reverse() ;
                }).catch(function(err){
                    console.log(err)
                })
            },
            //表单值获取
            onSubmit(){
                console.log(this.name,this.phone,this.begintime,this.stoptime,this.orderchecked)

            }
        }

    }
</script>
<style >
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .table-container{
        padding:20px;
    }
    .el-table .cell{
        color:#000;
        text-align:center;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 49%;
    }
    .searchinput{
        width:150px;
        margin-left:20px;
    }
    .justice-left{
        margin-left:20px;
    }
</style>