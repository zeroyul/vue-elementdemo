<template>
  <div id="app" class="fillcontain">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo:{
  	title:'Default Title',
  	titleTemplate:'%s | My Awesome Webapp'
  }
}
</script>

<style>
    @import './style/common.less';
    #app{
        min-width: 1280px;
    }
</style>
