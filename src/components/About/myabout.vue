<template>
  <div>
       <div class="picture">
         <img src="@/assets/res.png" alt="">
       </div>
       <div class="about">
         <div class="a">
         <h2>关于我们</h2>
         <div class="passage">
           <p>肺癌的发病率和死亡率在全球排名第一，是全球肿瘤相关死亡的主要原因。随着人类癌症基因组的解码和针对驱动突变的疗法的出现，目前治疗能更精确选择靶向特定基因进行治疗。与常规化学治疗相比，靶向药物具有更高的反应率和更少的毒性。此外，随着对肿瘤细胞与免疫系统相互作用的深入理解，目前还发展出新的针对抗肿瘤免疫的治疗策略 [1]。

然而，虽然研究人员在诊断和治疗方面已取得显著进展，但晚期非小细胞肺癌（non-small cell lung cancer，NSCLC）患者的 5 年总体生存率变化不显著，且肺癌的发病率未见明显下降 [2]。

对于肺癌只有做到「早期检测、正确诊断、精准治疗」，才能从根本上延长患者生存期，提高患者生活质量。人工智能为当前行业科技化发展的核心特征，得益于计算机技术的发展和硬件的提升，将人工智能用于医疗领域大大加速了医学技术革命。鉴于肺癌的高发病率和高死亡率，人工智能在肺癌中的研究和应用进展极为迅速</p>
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

