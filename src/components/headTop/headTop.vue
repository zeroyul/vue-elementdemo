<template>
    <div class="headtop">
    <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
        Head公用
    </div>
</template>
<script type="text/javascript">
    //key 前边要加：
</script>
<style scoped lang="less">
    .headtop{
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: skyblue;
        font-size: 18px;
        align-items: center;
        height:50px;
    }
</style>