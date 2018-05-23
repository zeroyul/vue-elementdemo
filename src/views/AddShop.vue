<template>
    <div>
        <headTop></headTop>
        <el-form ref="form" :model="form" :rules="rules" refs="ruleForm" @submit.native.prevent  >

            <el-row :gutter="20">
              <el-form-item label="一级分类" label-width="150px" prop="classifyone">

                  <el-col :span="9"><div class="grid-content ">

                      <el-select  v-model="form.classifyone" placeholder="请选择">
                        <el-option
                        v-for="item in optionclassifyone"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>

            </div></el-col>
        </el-form-item >
        <el-form-item label="二级分类" label-width="150px" prop="classifytwo">

          <el-col :span="9"><div class="grid-content ">
              <el-select  v-model="form.classifytwo" placeholder="请选择">
                <el-option
                v-for="item in optionclassifytwo"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div></el-col>
</el-form-item>
</el-row>
<el-row :gutter="0">
  <el-form-item label-width="150px" label="商品名称" prop="name">

      <el-col :span="9"><div class="grid-content ">
          <el-input v-model="form.name" placeholder="建议不超过20个字"></el-input>
      </div></el-col>
  </el-form-item>
  <el-form-item label-width="150px" label="零售系统产品编号"  prop="code">
      <el-col :span="9"><div class="grid-content ">
          <el-input v-model="form.code" placeholder="输入编号"></el-input>
      </div></el-col>
  </el-form-item>
</el-row>
<el-row :gutter="0">

  <el-form-item label-width="150px" label="专家描述"  prop="textarea">
      <el-col :span="9"><div class="grid-content ">
        <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="form.textarea">
        </el-input>
      </div></el-col>
  </el-form-item>
</el-row>
<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content ">封面图片</div></el-col>
  <el-col :span="15"><div class="grid-content ">
    <el-upload
    class="upload-demo"
    ref = "uploadCovermap"
    :limit = "coverlimit"
    action="https://baidu"
    multiple
    :auto-upload="false"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :before-upload="beforeAvatarUpload"

    >
    <i class="el-icon-plus"></i>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>

</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content ">轮播图片</div></el-col>
  <el-col :span="15"><div class="grid-content ">
    <el-upload
    class="upload-demo"
    ref = "uploadClassifyone"

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

</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content ">产品类型</div></el-col>
  <el-col :span="9"><div class="grid-content ">
    <!-- 单选radio -->
    <el-radio-group v-model="form.radiotype">
        <el-radio :label="3">标品</el-radio>
        <el-radio :label="6">生鲜</el-radio>
        <el-radio :label="9">大件</el-radio>
    </el-radio-group>
</div></el-col>
</el-row>
<el-row :gutter="0">
  <el-form-item
  label="商品原价"
  label-width="150px"
  prop="originprice"
  >
  <el-col :span="9"><div class="grid-content ">
    <el-input type="originprice" v-model.number="form.originprice" auto-complete="off"></el-input>
</div></el-col>
</el-form-item>
<el-form-item label-width="150px" label="商品售价"  prop="price">

  <el-col :span="9"><div class="grid-content bg-purple">
      <el-input type="price" v-model.number="form.price" placeholder=""></el-input>
  </div></el-col>
</el-form-item>
</el-row>




<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content ">是否前台显示</div></el-col>
  <el-col :span="9"><div class="grid-content ">
    <el-switch v-model="form.frontshow"></el-switch>
</div></el-col>

</el-row>
<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content ">是否首页推荐</div></el-col>
  <el-col :span="9"><div class="grid-content ">
    <el-switch v-model="form.recommend"></el-switch>
</div></el-col>

</el-row>


<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content ">图文详情</div></el-col>
  <el-col :span="18"><div class="grid-content ">
      <!-- 编辑器 -->
      <div class="components-container">


        <div class="editor-container">
          <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>

      </div>
  </div>
</div></el-col>

</el-row>

<el-row :gutter="20">
  <el-col :span="24"><div class="grid-content center">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
        <el-button>取消</el-button>
    </el-form-item>
</div></el-col>
</el-row>

</el-form>


</div>
</template>
<script type="text/javascript">
    import UE from '../components/ue/ue.vue';
    import headTop from '../components/headTop/headTop.vue'
    export default {
        data(){
            return{
                coverlimit:1,
                defaultMsg: '<span style="orphans: 2; widows: 2; font-size: 22px; font-family: KaiTi_GB2312; "><strong>起风了</strong></span>',
                config: {
                  initialFrameWidth: null,
                  initialFrameHeight: 350
              },
                ue1: "ue1", // 不同编辑器必须不同的id
                form:{
                    age:'',
                    classifyone:'',//所选一级分类
                    classifytwo:'',//所选二级分类
                    name:'',//品名
                    code:'',//商品编码
                    textarea:'',//专家描述
                    radiotype:6,//产品类型
                    originprice:'',//原价
                    price:'',//售价
                    frontshow:true,//是否前台显示
                    recommend:false,//是否首页推荐

                },
                rules:{
                    classifyone:[{
                        required:true,message:'请选择分类',trigger:'change'
                    }],
                    classifytwo:[{
                        required:true,message:'请选择分类',trigger:'change'
                    }],
                    name:[{
                        required:true,message:'请输入商品名称',trigger:'blur'
                    },{
                        min:3,max:5,message:'长度在3到5个字符',trigger:'blur'
                    }],
                    code:[{
                        required:true,message:'请输入商品编码',trigger:'blur'
                    }],
                    price:[
                    { required: true, message: '年龄不能为空'},
                    { type: 'number', message: '年龄必须为数字值'}
                    ],
                    originprice:[
                    { required: true, message: '年龄不能为空'},
                    { type: 'number', message: '年龄必须为数字值'}
                    ],
                    textarea:[{
                        required:true,message:'请输入商品名称',trigger:'blur'
                    },{
                        max:25,message:'建议不超过25字',trigger:'blur'
                    }
                    ]

                },
                optionclassifyone:[{
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
              optionclassifytwo:[{
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
              dialogImageUrl: '',
              dialogVisible: false,
              fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],

          }
      },

      components:{
        headTop,UE
    },
    methods:{

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
    },
    onSubmit() {
        console.log('submit!');
        console.log(this.form)
        this.getUEContent();
        this.getUEContentTxt();
    },
//获取编辑器内容
              getUEContent() {
                let content = this.$refs.ue.getUEContent(); // 调用子组件方法
                this.$notify({
                  title: '获取成功，可在控制台查看！',
                  message: content,
                  type: 'success'
              });
                console.log(content)
            },
              //获取编辑器内容
              getUEContentTxt() {
                let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
                this.$notify({
                  title: '获取成功，可在控制台查看！',
                  message: content,
                  type: 'success'
              });
                console.log(content)
            }
        }


    }
</script>
<style >

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
  }
}
.el-col {
    border-radius: 4px;
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
    line-height: 36px;
}
.center{
    text-align:center;
}
</style>