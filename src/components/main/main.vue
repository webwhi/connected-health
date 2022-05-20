<template>
<!-- 这里制作头部导航栏组件 -->
  <div>
    <el-col :span="24">
    <div class="title">
       <el-col :span="15"><div class="logo">互联医疗</div></el-col>
       <el-col :span="2"><div class="btn"
        v-bind:class="{ active: isActive}"
        @click="change">
       <router-link to="/home" class="same el-icon-zoom-in"
       v-bind:class="{ deepactive: isActive}"
        @click="change"
       >检测分析</router-link></div></el-col>
       <el-col :span="2"><div class="btn"
       v-bind:class="{ active: isActive1}"
       @click="changeone"><router-link to="/about" class="same el-icon-view"
        v-bind:class="{ deepactive: isActive1}"
        @click="changeone">关于我们</router-link></div></el-col>
      <el-col :span="2"><div class="btn"
      v-bind:class="{ active: isActive2}"
      @click="changetwo"><router-link to="/people" class="same el-icon-user"
       v-bind:class="{ deepactive: isActive2}"
        @click="changetwo">用户中心</router-link></div></el-col>
    </div>
    </el-col>
  </div>
</template>

<script>
export default {
data() {
  return {
    isActive:false,
    isActive1:false,
    isActive2:false
  }
},
methods:{
  change(){
    this.isActive=true;
    this.isActive1=false;
    this.isActive2=false;
  },
  changeone()
  {
    this.isActive=false;
    this.isActive1=true;
    this.isActive2=false;
  },
  changetwo()
  {
    this.isActive=false;
    this.isActive1=false;
    this.isActive2=true;
  }
}
}
</script>

<style scoped>
.title{
  height: 70px;
  background-color: rgb(255,255,255);
  border-bottom: 5px solid rgb(64, 158, 255);
}
.same{
  text-decoration: none;
  color: rgb(119, 119, 119);
}
.logo{
  margin-left: 300px;
  height: 70px;
line-height: 70px;
font-size: 50px;
color: rgb(64, 158, 255);
}
.btn{
height: 70px;
line-height: 70px;
font-size: 20px;
margin-right: 10px;
}
.active{
  color: rgb(64, 158, 255);
  border-bottom: 5px solid rgb(64, 158, 255);
}
.deepactive{
  color: rgb(64, 158, 255);
}
</style>

