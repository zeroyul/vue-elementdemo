<template>
    <div>
        <headTop></headTop>
        <div class="search-table">
            <el-input v-model="input" placeholder="请输入内容" class="searchinput"></el-input>
            <template>
              <el-select v-model="firstvalue" placeholder="一级分类">
                <el-option
                  v-for="item in optionsOne"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>

            <template>
              <el-select v-model="secondvalue" placeholder="二级分类">
                <el-option
                  v-for="item in optionsTwo"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <el-checkbox v-model="checked">库存预警</el-checkbox>
            <el-button type="primary" @click="onSubmit">立即查询</el-button>
        </div>
        <div class="table-container">

          <el-table
            border
            :data="tableData2"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
              prop="ID"
              label="商品ID"
              >
            </el-table-column>
            <el-table-column
              prop="shopname"
              label="商品名"
             >
            </el-table-column>
            <el-table-column
              prop="supplier"
              label="供应商">
            </el-table-column>
            <el-table-column
              prop="shoptype"
              label="商品类型">
            </el-table-column>
            <el-table-column
              prop="price"
              label="商品价格">
            </el-table-column>
            <el-table-column
              prop="stock"
              label="库存">
            </el-table-column>
            <el-table-column
              prop="warningStock"
              label="预警库存">
            </el-table-column>
            <el-table-column
              prop="classify"
              label="单品类型（一级）">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态">
              <template slot-scope="scope">
              <!-- v-if条件渲染 -->
              <div v-if="scope.row.state == 1">
                  上架
              </div>
              <div v-else>
                  下架
              </div>
              </template>
            </el-table-column>

            <el-table-column

              label="操作">
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

                tableData2: [],
                currentPage:1,
                count:123,
                optionsOne: [{
                  value: 'id1',
                  label: '黄金糕'
                }, {
                  value: 'id2',
                  label: '双皮奶'
                }, {
                  value: 'id3',
                  label: '蚵仔煎'
                }, {
                  value: 'id4',
                  label: '龙须面'
                }, {
                  value: 'id5',
                  label: '北京烤鸭'
                }],
                optionsTwo: [{
                  value: '凯尔特',
                  label: '塔图姆'
                }, {
                  value: '火箭',
                  label: '格林'
                }, {
                  value: '勇士',
                  label: '伊戈达拉'
                }, {
                  value: '骑士',
                  label: '希尔'
                }, {
                  value: '总冠军',
                  label: '杰伦布朗'
                }],
                firstvalue: '',
                secondvalue:'',
                input:'',
                checked:true
            }
        },
        created(){
            const that = this;
            this.$ajax.get('../../static/json/shoplist.json').then(function(res){
                //console.log(res.data)
                that.tableData2 = res.data ;
            }).catch(function(err){
                console.log(err)
            })
        },
        components:{
            headTop
        },
        methods:{
            tableRowClassName({row,rowIndex}){
                //console.log(row)
                return row.stock <= row.warningStock ? 'danger-row':'';
                // if (rowIndex === 1){
                //     return 'warning-row';
                // }else if (rowIndex === 3){
                //     return 'success-row';
                // }
                // return '';
            },
            //请求第N页数据
            handleCurrentChange(val){
                const that = this;
                this.currentPage = val;
                console.log(val)
                this.$ajax.get('../../static/json/shoplist.json').then(function(res){
                    console.log(res.data)
                    that.tableData2 = res.data.reverse() ;
                }).catch(function(err){
                    console.log(err)
                })
            },
            //编辑商品
            handleEdit(val){
                console.log(val)
                this.$message.error('错了，西八');
                this.$router.push({ path: 'addShop', query: { id: val.ID }})
            },
            //删除商品 整个弹窗试试
            handleDelete(val){
                console.log(val)
                this.$message({
                    message:'你的权限不足',
                    type:'warning'
                })
            },
            //上下架操作
            handleShelves(val,index){
                console.log(val,index)

                this.tableData2[index].state = this.tableData2[index].state==1 ? 0:1;

            },
            //表单值获取
            onSubmit(){
                console.log(this.firstvalue,this.secondvalue,this.input,this.checked)

            }


        }

    }
</script>
<style>

  .searchinput{
    width:300px;
  }
  .el-table .warning-row {
    background: oldlace;
  }
  .table-container{
    padding:20px;

  }
  .el-table .cell{
    color:#000;
    text-align:center;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .el-table .danger-row {
    background: oldlace;
  }

  .el-table .colordown{
    color:#ff671b;
  }

  .search-table{
    padding:20px;
  }
</style>