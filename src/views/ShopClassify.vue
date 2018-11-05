<template>
    <div>
        <headTop></headTop>

        <el-row class="classfy-container">
          <el-col :span="8">
              <div class="grid-content ">
                    <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible=true">添加一级分类</el-button>

              </div>
              <ul class="wordcolor  ">
                  <li v-for="item in classifyone"
                  :key = "item.id"
                  >{{item.message}}</li>
              </ul>
          </el-col>
          <el-col :span="8">
              <div class="grid-content ">
                    <el-button type="primary" icon="el-icon-plus">添加二级分类</el-button>
              </div>
              <ul class="wordcolor  ">
                  <li v-for="item in classifytwo"
                  :key = "item.id"
                  >{{item.message}}</li>
              </ul>
          </el-col>
        </el-row>

        <!-- 添加分类 -->
        <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="分类名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="分类描述" :label-width="formLabelWidth">
              <el-input v-model="form.desc" auto-complete="off"></el-input>
            </el-form-item>
            <!-- action 是上传的地址   auto-upload是否在选取文件后立即进行上传 -->
                    <el-form-item label="分类背景图" :label-width="formLabelWidth">
                        <el-upload
                          class="upload-demo"
                          ref = "uploadClassifyone"
                          :limit = "limitNum"
                          action="https://baidu"
                          multiple
                          :auto-upload="false"
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :before-upload="beforeAvatarUpload"
                          :file-list="fileList"
                          >
                          <i class="el-icon-plus"></i>
                          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addClassify">确 定</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<script type="text/javascript">
    import headTop from '../components/headTop/headTop.vue'
    export default {
    	name:'ShopClassify',
    	metaInfo:{
    		title:'第一个',
    		titleTemplate:null
    	},
        data(){
          return {
            classifyone:[
              {
               id:'25',
               message:'肉类'
              },
              {
               id:'35',
               message:'粮油调味'
              },
              {
               id:'45',
               message:'咖啡与茶'
              }
            ],
            classifytwo:[
              {
               id:'250',
               message:'牛肉'
              },
              {
               id:'251',
               message:'烛光晚餐组合'
              }

            ],
            formLabelWidth:"140px",
            form: {
              name: '',
              resource: '',
              desc: ''
            },
            limitNum: 2,
            dialogImageUrl: '',
            dialogVisible: false,
            //读取,删除已有图片时所用
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
            dialogFormVisible: false

          }
        },
        components:{
            headTop
        },
        methods:{
          //添加分类
            addClassify(){
              console.log(this.form)
              const classItem={};
              classItem.message = this.form.name;
              classItem.id = 111;
              this.classifyone.push(classItem)

              //获取图片信息 传送至后台
              this.$refs.uploadClassifyone.submit();
              console.log(this.fileList)
              return
              //dialog隐藏
              this.dialogFormVisible = true
            },
            handlePictureCardPreview(file) {
              this.dialogImageUrl = file.url;
              this.dialogVisible = true;
            },
            beforeAvatarUpload(file) {
              const isJPG = file.type === 'image/jpeg';
              const isLt2M = file.size / 1024 / 1024 < 2;

              if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
              }
              if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
              }
              return isJPG && isLt2M;
            }
        }

    }
</script>
<style scoped lang="less">
  .classfy-container .el-col{
    margin: 20px;
    background:#d3dce6;
    padding:20px ;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {

    border-radius: 4px;
    min-height: 36px;
  }
  .wordcolor{
    color: #ff671b;
    margin-top: 20px;
  }

</style>