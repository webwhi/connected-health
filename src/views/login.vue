<template>
<div class="global">
    <div class="text">
        <div class="chinese">{{chinese}}</div>
        <div class="english">{{english}}</div>
    </div>
    <div class="login_box">
        <div class="title">互联医疗  <span class="version">v1.0.0</span></div>
        <div class="container_boxs">
        <div class="input_box" ref="box1">
            <p>用户名/工号</p>
            <input type="text" ref="input1" v-model="username" @focus="click_input1" @blur="blur_input1" class="input">
            <p>密码</p>
            <input type="password" ref="input2" v-model="password" @focus="click_input2" @blur="blur_input2" class="input">
            <div class="remember">
                <el-checkbox v-model="remember_username">记住账号</el-checkbox>
                <el-checkbox v-model="remember_password">记住密码</el-checkbox>
            </div>
            <el-button class="login" @click="login_yixi">立即登录</el-button>
            <div class="text1">还没有帐号?
                <span class="anotherlogin" @click="anotherlogin">使用教务系统帐号登录</span>
            </div>
            <a href="http://doc.cloudschool.shadowfish0.top/" target="blank" class="what">什么是亦习校园</a>
        </div>
        <div class="input_box2" ref="box2">
            <p>学校</p>
            <el-cascader
    v-model="school"
    :options="options"
    ></el-cascader>
            <p>用户名</p>
            <input type="text" ref="input3" @focus="click_input3" @blur="blur_input3" class="input">
            <p class="mim">密码
                <el-tooltip class="item" effect="dark" content="受湖工大认证系统调整影响，请尝试身份证后八位" placement="top-start">
                <i class="el-icon-question"></i>
                </el-tooltip>
                </p>
            <input type="password" ref="input4" @focus="click_input4" @blur="blur_input4" class="input">
            <span class="text2">未注册亦习校园的用户可通过此方法注册</span>
            <el-button class="login2">使用教务系统账号登录</el-button>
            <div class="text1">已有帐号?
                <span class="anotherlogin" @click="anotherlogin_yixi">使用亦习校园帐号登录</span>
            </div>
        </div>
        </div>
        <div class="last_text">
          <div class="textt1"></div>
          <div class="textt2">建议使用&nbsp;<a href="javascript:;" class="huohu">火狐</a>&nbsp;或&nbsp;<a href="javascript:;" class="chor">chorme</a>&nbsp;访问本网站</div>
          <div class="textt3">本网站由&nbsp;<img src="../assets/you.png" width="45px" alt="">&nbsp;提供CDN加速/云存储服务</div>
          <div class="textt4"><a class="geshi" href="https://beian.miit.gov.cn/#/Integrated/index">浙ICP备20004343号</a>  <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33102102331503"  style="display: inline-block; text-decoration: none; height: 20px;  color: black; margin-left: 10px;"><img src="https://doge.shadowfish0.top/shadowimagehost/2020/08/16/29a8bfa57c1b8.png"  > 浙公网安备 33102102331503号 <br data-v-8d5626da=""></a></div>
          <div class="textt5"></div>
          <div class="textt6"></div>
          <div class="textt7"></div>
        </div>
    </div>
</div>
</template>

<script>
import { TextAPI } from '../Myaxios/api'
export default {
  data () {
    return {
      english: 'Connected medical analytics make testing more efficient  .',
      chinese: '互联医疗分析让检测更加高效',
      tupian: '',
      username: '',
      password: '',
      remember_username: false,
      remember_password: false,
      school: 'hbut',
      options: [{
        value: 'hbut',
        label: '湖北工业大学校医院'
      }, {
        value: 'hbuttech',
        label: '武汉大学人民医院'
      }]
    }
  },
  created () {
    TextAPI().then(success => {
      console.log(success)
    })
    this.username = '' || localStorage.getItem('username')
    this.password = '' || localStorage.getItem('password')
  },
  methods: {
    click_input1 () {
      this.$refs.input1.style.borderColor = 'rgb(129, 138, 212)'
    },
    blur_input1 () {
      this.$refs.input1.style.borderColor = '#CFCFCF'
    },
    click_input2 () {
      this.$refs.input2.style.borderColor = 'rgb(129, 138, 212)'
    },
    blur_input2 () {
      this.$refs.input2.style.borderColor = '#CFCFCF'
    },
    click_input3 () {
      this.$refs.input3.style.borderColor = 'rgb(129, 138, 212)'
    },
    blur_input3 () {
      this.$refs.input3.style.borderColor = '#CFCFCF'
    },
    click_input4 () {
      this.$refs.input4.style.borderColor = 'rgb(129, 138, 212)'
    },
    blur_input4 () {
      this.$refs.input4.style.borderColor = '#CFCFCF'
    },
    anotherlogin () {
      this.$refs.box1.style.left = '-100%'
      this.$refs.box2.style.right = '0%'
    //   let time1 = 0
    //   let time2 = -100
    //   const a = setInterval(() => {
    //     this.$refs.box1.style.left = time1 + '%'
    //     this.$refs.box2.style.right = time2 + '%'
    //     time1 -= 1
    //     time2 += 1
    //   }, 2)
    //   if (time2 === -1) { clearInterval(a) }
    },
    anotherlogin_yixi () {
      this.$refs.box1.style.left = '0%'
      this.$refs.box2.style.right = '-100%'
    },
    login_yixi () {
      // this.$router.push('/index')
      if (this.remember_username === true) {
        localStorage.setItem('username', this.username)
      }
      if (this.remember_password === true) {
        localStorage.setItem('password', this.password)
      }
    }
  }
}
</script>

<style scoped>
.geshi{
  margin-top: 7px;
}
img{
  vertical-align: center;
}
.global{
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/bgi.png);
    background-size: cover;
    background-repeat: no-repeat;
    position:relative;
}
.english{
    margin-top: 2vh;
}
.chinese,.english{
    color:#FFFFFF;
    width:50vw;
    word-break: break-all;
    word-wrap: break-word;
    font-size: 18px;
}
.text{
    position: absolute;
    left:3vw;
    bottom:21vh;
    overflow: hidden;
}
.login_box{
    width: 50%;
    height: 100%;
    margin-left: 50%;
    position: relative;
    z-index: 2;
    background-color: hsla(0,0%,100%,.85);
    overflow: hidden;
}
.title {
    text-align: center;
    font-size: 28px;
    letter-spacing: 4px;
    font-family: 微软雅黑;
    font-weight: 500;
    color: rgb(64, 158, 255);
    margin-bottom: 50px;
    margin-top: 6vh;
}
.version {
    font-size: .6em;
    letter-spacing: normal;
    padding-left: 3px;
}
.container_boxs{
    width: 70%;
    height:390px;
    position: relative;
    overflow: hidden;
    margin-left:15%;
}
.input_box2{
    width: 100%;
    height:390px;
    /* background-color: red; */
    position:absolute;
    top:0;
    right:-100%;
    transition:all;
    transition-duration: 1s;
    overflow: hidden;
}
.input_box{
    width: 100%;
    height:390px;
    position: absolute;
    transition:all;
    transition-duration: 1s;
}
    p {
    display: block;
    font-size: 14px;
    color: #4d5259;
    font-weight: 700;
}
.input{
    width:100%;
    height:40px;
    background-color: transparent;
    outline: none !important;
    border-color:#CFCFCF;
    border-style: solid;
    border-width: 1px;
    text-indent: 1.5em;
    border-radius: 2%;
    margin-top: 10px;
}
.input:hover{
    border-color:#A8A8A8 !important;
}
p:nth-of-type(2)
{
    margin-top: 18px;
}
.remember{
    width:100%;
    margin-top:18px;
}
.login{
    width:100%;
    background-color: rgb(64, 158, 255);
    color:#FFFFF8;
    margin-top: 18px;
}
.login2{
    width:100%;
    background-color: rgb(64, 158, 255);
    color:#FFFFF8;
    margin-top:3px;
}
.login:hover,.login2:hover{
    background-color: #9AA1DD;
    color:#FFFFF8;
}
.text1{
    text-align: center;
    width:100%;
    line-height:25px;
    height:25px;
    font-size: 14px;
    font-weight: 400;
}
.anotherlogin{
    color:rgb(64, 158, 255);
    cursor: pointer;
    font-weight: bold;
}
.what{
    color:rgb(64, 158, 255);
    cursor: pointer;
    font-weight: bold;
    margin-left:77%;
    margin-top:52px;
    text-decoration: none;
}
.mim{
        margin-top: 18px;
}
.text2{
    height:30px;
    line-height: 30px;
    display: inline-block;
    margin-left:50%;
    font-size: 14px;
    color:#4D5259;
}
/* /deep/ .el-cascader{
      background: transparent;
    } */
    .last_text{
      width:70%;
      margin-left:15%;
      height:140px;
      /* background-color: yellow; */
    }
    div[class^="textt"]
    {
      width:100%;
      height:14.285%;
      text-align: center;
      display: flex;
      flex-wrap: nowrap;
      justify-content:center;
      align-items: center;
      font-size: 13px;
      color:#000000;
      text-decoration: none;
    }
    .huohu,.chor{
       color:rgb(129, 138, 212);
       cursor:pointer;
       text-decoration: none;
    }
    a{
      text-decoration: none;
      color:#000000
    }
    .textt4{
    }
</style>
