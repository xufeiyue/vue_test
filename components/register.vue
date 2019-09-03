<template>
  <div class="block">
    <van-nav-bar title="注册" style="background-color:#39a9ed;"/>
    <div class="logo_div">
      <img src="./../assets/img/logo.png" alt="">
    </div>
    <form action="" class="login_form" id="login_form">
      <div class="form_item">
        <img src="./../assets/img/phone_icon.png" alt="">
        <input type="number" v-model="loginForm.phone" placeholder="请输入您的手机号">
      </div>
      <div class="form_item">
        <img src="./../assets/img/sms_icon.png" alt="">
        <input type="number" v-model="loginForm.smscode" placeholder="请输入短信验证码" style="width:60%">
        <button v-show="sendCode" type="button" class="get_sms_code" @click="getSms">获取验证码</button>
        <button v-show="!sendCode" type="button" disabled="disabled" class="get_sms_code blue">{{auth_time}}s</button>
      </div>
      <div class="form_item">
        <img src="./../assets/img/password_icon.png" alt="">
        <input type="password" v-model="loginForm.keywords" placeholder="请输入密码(6-16位数字或字母)">
      </div>
      <div class="form_item">
        <img src="./../assets/img/sms_icon.png" alt="">
        <input type="text" v-model="loginForm.recommend" placeholder="请输入邀请码(没有可不填)">
      </div>
<!--      <div class="no_get_sms_code_reg">-->
<!--        <span>收不到验证码?</span>-->
<!--      </div>-->
      <button id="login_btn" @click="register">注册</button>
    </form>
    <div class="agree_to">
      <van-checkbox class="van-checkbox" v-model="checked"></van-checkbox>
      <p><span>我已阅读并同意</span><span>注册协议</span></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "register",
    data(){
      return{
        checked: false,
        loginForm:{
          phone: '',
          keywords: '',
          smscode: '',
          recommend:''
        },
        auth_time: 0,
        sendCode: true,
      }
    },
    methods: {
      register() {
        var _this = this;
        var phone_flag = /^1[3456789]\d{9}$/;
        if (this.loginForm.phone === '') {
          alert('手机号不能为空');
        }else if(this.loginForm.newpassword === ''){
          alert('密码不能为空');
        }else if(this.loginForm.code === ''){
          alert('验证码不能为空');
        }else if(!phone_flag.test(this.loginForm.phone)){
          alert('手机号格式不正确');
        }else {
          axios({
            method: 'post',
            url: 'api/Main/register',
            data: _this.loginForm
          }).then(res => {
            if (res.data.error == 0) {
              alert('注册成功');
              // _this.$router.push('/');
            } else {
              alert(res.data.msg);
            }

          }).catch(error => {
            //alert('手机号或密码错误');
          });
        }
      },
      getSms() {
        if (this.loginForm.phone === '') {
          alert('手机号不能为空');
        } else {
          axios({
            method: 'get',
            url: 'api/Main/getsms',
            params: {
              phone: this.loginForm.phone,
              type: "1"
            }
          })
            .then(function (response) {
              console.log("请求成功", response)
            }, function (error) {
              console.log("请求失败", error);
            })
          this.sendCode = false;
          //设置倒计时秒
          this.auth_time = 60;
          var auth_timetimer = setInterval(() => {
            this.auth_time--;
            if (this.auth_time <= 0) {
              this.sendCode = true;
              clearInterval(auth_timetimer);
            }
          }, 1000);
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .van-ellipsis{
    color: white
  }
</style>
