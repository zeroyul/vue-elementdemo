<template>
  <div>
  <div>
    {{msg}}
  </div>
  <div class="httpbtn" @click="get">get请求</div>
  <div class="httpbtn" @click="post">post请求</div>


  </div>
</template>
<script>
export default {

    data() {
      return {
        msg: '表单测试',

      }
    },
    created(){


      this.$http.post('Web/Courses/getCourseOrderList',null, r => {
        console.log(r)
      })

    },
    methods: {
      get(){
        this.$ajax({
          method:'get',
          url:'https://t.api.air-cooking.com/Api/CookBook/cookBookList',
          data:{}
        }).then(function(res){
          console.log(res)

        }).catch(function(err){
          console.log(err)
        })

        this.$ajax.get('../../static/json/httpdemo.json').then(function(res){
          console.log(res.data)
        }).catch(function(err){
          console.log(err)
        })


      },
      post(){
        console.log(this.msg)
        var that = this
        this.$ajax({
          method:'post',
          url:'https://t.api.air-cooking.com/WxApp/Theme/GetCategoryTwo?categoryno=009',
          data:{}
        }).then(function(res){
          console.log(res)
          that.msg = res.data.secondarycategorylist[0].categoryname
        }).catch(function(err){
          console.log(err)
        })

        this.$ajax.post('https://t.api.air-cooking.com/WxApp/Theme/GetCategoryTwo?categoryno=009').then(function(res){
          console.log(res)
        }).catch(function(err){
          console.log(err)
        })


      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*scoped的意思是这里的样式只对当前页面有效不会影响其他页面，还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less  */
.httpbtn{
  color:green;
  border:1px solid pink;
}
</style>
