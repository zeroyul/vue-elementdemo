<template>
	<div class="pdftest">
		<h2>pdf测试</h2>
		<p class="pdfitem" @click="cpdf(item.src, item.title)" v-for="(item,index) in pdfList" :key="index">
			{{item.title}}
		</p>
		<el-dialog :title="title" :visible.sync="dialogVisible" width="50%" :center="true" :show-close="false">
			<pdf :src="src" :page="page" @num-pages="pageCount = $event" @page-loaded="currentPage = $event">
			</pdf>
			<el-pagination class="pagination"  
                            background
                            layout="prev, pager, next, jumper"
                            :total=pageCount
                            :page-size="1"
                            :page-count="1"
                            :current-page=page
                            @current-change="handleCurrentChange">
            </el-pagination>
		</el-dialog>
		<h2>tab切换测试</h2>
		<ul class="tab-title">
			<li :class="{active:activeIndex == index }" v-for="(item,index) in titleList" :key="index" @click="TabChange(index)">{{item}}</li>			
		</ul>
		<ul class="tab-content">
			<li v-if="activeIndex == 0">show1</li>
			<li v-if="activeIndex == 1">show2</li>
			<li v-if="activeIndex == 2">show3</li>
			<li v-if="activeIndex == 3">show4</li>
		</ul>

		

		
	</div>
</template>

<script>
	import pdf from 'vue-pdf'
	export default {
		components: {
			pdf
		},
		data() {
			return {
				pdfList: [{
					src: '/static/pdf/1.pdf',
					title: '《关于促进互联网金融健康发展的指导意见》',
				}, {
					src: '/static/pdf/2.pdf',
					title: '《网络借贷信息中介机构业务活动管理暂行办法》',
				}],
				src: '/static/pdf/1.pdf',
				title:'pdf标题',
				currentPage: 0,
				pageCount: 0,
				dialogVisible:false,
				page:1,
				titleList:['头1','头2','头3','头4'],
				activeIndex:0,
			}
		},
		methods:{
			cpdf(src,title){
				this.src = src;
				this.title = title;
				this.page = 1;
				this.dialogVisible = true
			},
			handleCurrentChange(val){
				this.page = val
			},
			TabChange(index){
				console.log(index);
				this.activeIndex = index;
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.pdfitem {
		font-size: 30px;
		line-height: 60px;
	}
	.tab-title{
		width: 100%;
		display: flex;
		justify-content: space-around;
		li{
			border: 1px solid coral;
			font-size: 20px;
			padding: 20px 30px;
			flex: 1;
		}
		.active{
			background: greenyellow;
		}
	}
	.tab-content{
		width: 100%;
		height: 300px;
		font-size: 24px;
		color: blueviolet;
		border: 1px solid blue;
	}
</style>