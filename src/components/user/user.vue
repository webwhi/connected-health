<template>
  <div>
      <div class="main">
          <div class="user">
              <h2>个人信息</h2>
               <el-avatar 
               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
               class="large">
               </el-avatar>
               <span>用户</span>
               <div class="move">2110300115</div>
               <div class="infomation">
               <el-descriptions title="UID:1517">
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="医龄">8年</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small" class="doctor">医生</el-tag>
    </el-descriptions-item>
      <el-descriptions-item label="邮箱">2745265392@qq.com</el-descriptions-item>
</el-descriptions>
</div>
          </div>
          <div class="power">
              <div class="son">我们的服务</div>
              <div class="roard el-icon-tickets">优惠券码<b>></b></div>
              <div class="roard el-icon-s-goods">购买记录<b>></b></div>
              <div class="roard el-icon-edit-outline">检测报告<b>></b></div>
              <div class="roard el-icon-service">联系客服<b>></b></div>
              <div class="roard el-icon-question">快速上手<b>></b></div>
               <div class="roard el-icon-search">敬请期待<b>></b></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            task:["优惠券码","购买记录","检测报告","联系客服","快速上手"]
        }
    },
}
</script>

<style  scoped>
b{
    margin-left: 260px;
}
.son{
    height: 100px;
    line-height: 100px;
    text-align:center;
    font-size: 30px;
    margin-bottom: 10px;
}
.roard{
    margin-top: 5px;
    height: 40px;
    margin-left: 20px;
    font-size: 20px;
    line-height: 40px;
    background-color: rgb(242, 243, 251);
}
.doctor{
    color: rgb(64, 158, 255);
}
.infomation{
    margin-top: 70px;
    margin-left: 20px;
}
.move{
    margin-left: 210px;
    margin-top: 10px;
    color: rgb(158, 147, 166);
}
span{
    margin-left: 40px;
    margin-bottom: -60px;
    font-size: 30px;
}
h2{
    margin-top: 10px;
    margin-left: 10px;
}
.user{
    height: 400px;
    width: 620px;
    background-color: rgb(255,255,255);
    margin-right: 20px;
    margin-left: 10px;
    border-radius: 15px;
}
.power{
    height: 400px;
    width: 400px;
    background-color: rgb(255,255,255);
    border-radius: 15px;
}
.main{
    display: flex;
    width: 1200px;
   transform: translate(440px,40px);
}
.large{
    width:150px;
    height: 150px;
    margin-left: 20px;
    margin-top: 10px;
}
</style>

