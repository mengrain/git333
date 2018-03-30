<template>
  <div class="hello">
     	<table>	
     	<tr>
     		<td>ID</td>
     		<td>标题</td>
     		<td>内容</td>
     	</tr>
     	
     	 <tr v-for="i in arr">
     	 	<td>{{i.id}}</td>
     		<td>{{i.tit}}</td>
     		<td>{{i.con}}</td> 
     	</tr>
     	<tr>
     		<td>
     		<button @click="">添加</button>
     		<button @click="a()">删除</button>
     		</td>
     	</tr>
     	</table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
  	this.$http.get('http://localhost:3000').then(e=>this.arr=e.body) 	
  }, 
  data() {
			return { 
					arr: [],
					page:0
		}
	},
	methods: {
      a(e){
      	alert("删除成功，点击刷新")
      	this.$http.get('http://localhost:4000',{id:1},{"emulateJSON":true})
      	this.arr.splice
      	this.page = e;
      }
	}
}
</script>


<style scoped>
	.hello{
		width: 500px;
		margin: 0 auto;
	}
	tr{
		line-height: 30px;
		 height: 40px;
		 overflow:hidden;
	} 
   tr td{
   	border: 1px solid #CCCCCC;
   	color: #000; 
   }
</style>
