<template>
	<div class="demo-alert-box">
      <strong>测试动态组件{{callbackdata.name}}</strong>
      
    </div>
</template>

<script>
	export default {
		props: {
	      callbackdata: {
	        type: Object,
	        default: {}
	      }
	    },
	}    
</script>

<style>
</style>