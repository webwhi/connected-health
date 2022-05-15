<template>
  <div>
       <div class="picture">
         <img src="@/assets/res.png" alt="">
       </div>
       <div class="about">
         <div class="a">
         <h2>关于我们</h2>
         <div class="passage">
           <p></p>
           <p>互联医疗是基于人工智能来为大量医疗数据进行智能分析提供技术服务,
           目前主要业务是为分析肺癌与基因调控的关系提供云计算分析技术支持。</p>
           <p>医生或研究员可以通过自定义输入数据检测,通过控制变量的方式来进行差异分析,
             互联医疗会对海量数据提供强大的算了支持,帮助相关的工作人员更高效的工作。</p>
             <p>互联医疗正积极与广大医院和医学研究院寻求积极合作,帮助相关行业进行转型
               与互联网+相结合,实现更高效的工作。
             </p>
             <p>互联医疗不仅只会提供肺癌检查相关的技术支持,未来还会扩展更多跟医疗相关的业务,
                引领智能医疗行业的发展。
             </p>
         </div>
         </div>
         <div class="photo"><img src="@/assets/photo.png" alt=""></div>
       </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
h2{
  color: rgb(64, 158, 255);
}
.a{
  width: 600px;
  margin-right: 100px;
}
.picture{
  width: 100%;
}
.picture img{
  width: 100%;
}
.about{
  width: 1100px;
  margin-left: 450px;
  margin-top: 40px;
  display: flex;
  background-color: rgb(255, 255, 255);
}
.passage{
  width: 600px;
  height: 400px;
  background-color: rgb(255,255,255);
  color: rgb(182, 157, 182);
  margin-top: 30px;
}
.photo{
  width: 400px;
  height: 460px;
}
.photo img{
width: 100%;
height: 100%;
}
</style>

