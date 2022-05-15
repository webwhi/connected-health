<template>
<!-- 这里制作测试组件 -->
<div>
    <div class="main">
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic"
        >
  <el-form-item
    prop="email"
    label="主检查项"
    :rules="[
      { required: true, message: '请输入检查项', trigger: 'blur' },
      { type: 'email', message: '请输入正确的检查项', trigger: ['blur', 'change'] }
    ]">
    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'检查项' + (index+1)"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: '检查项不能为空', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
  </el-form-item>
  <el-form-item>
      <div class="together">
     <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将样本图拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<el-upload
  class="upload-demo move"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="large" type="primary" class="el-icon-upload report">点击上传病例报告单检测</el-button>
</el-upload>
</div>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')" class="commit">提交</el-button>
    <el-button @click="addDomain">新增检查项</el-button> 
    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    <el-descriptions title="检查记录">
    <el-descriptions-item label="检查时间">2022年5月15日16:15</el-descriptions-item>
    <el-descriptions-item label="检测样本号">18100000000</el-descriptions-item>
    <el-descriptions-item label="检测项">5</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">实验</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="分析结果">检查分析还需更多的样本数</el-descriptions-item>
</el-descriptions>
  </el-form-item>
</el-form>
    </div>
</div>
</template>

<script>
   export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style scoped>
.main{
    background-color: rgb(255,255,255);
    transform: translate(30%,150px);
    width: 1200px;
    border-radius: 15px;
}
.el-input{
    width: 50%;
    margin-right: 20px;
}
.commit{
    background-color: rgb(64, 158, 255);
}
.together{
    display: flex;
}
.move{
    margin-left: 80px;
    margin-top:80px;
}
.report{
    font-size: 25px;
    background-color: rgb(64, 158, 255);
}
</style>