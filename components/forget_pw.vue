<template>
  <div class="block">
    <van-nav-bar title="忘记密码" style="background-color:#39a9ed;"/>
    <div class="logo_div">
      <img src="./../assets/img/logo.png" alt="">
    </div>
    <form action="" class="login_form" id="login_form">
      <div class="form_item">
        <img src="./../assets/img/phone_icon.png" alt="">
        <input type="text" v-model="loginForm.phone" placeholder="请输入您的手机号">
      </div>
      <div class="form_item">
        <img src="./../assets/img/sms_icon.png" alt="">
        <input type="number" v-model="loginForm.code" placeholder="请输入短信验证码" style="width:60%">
        <button v-show="sendCode" type="button" class="get_sms_code" @click="getSms">获取验证码</button>
        <button v-show="!sendCode" type="button" disabled="disabled" class="get_sms_code blue">{{auth_time}}s</button>
      </div>
      <div class="form_item">
        <img src="./../assets/img/password_icon.png" alt="">
        <input type="password" v-model="loginForm.newpassword" placeholder="重新设置密码(6-16位数字或字母)">
      </div>
<!--      <div class="no_get_sms_code_reg">-->
<!--        <span>收不到验证码?</span>-->
<!--      </div>-->
      <button id="login_btn" @click="login">确定</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "forget_pw",
    data() {
      return {
        loginForm: {
          phone: '',
          newpassword: '',
          code: ''
        },
        auth_time: 0,
        sendCode: true,
      };
    },

    methods: {
      login() {
        var _this = this;
        if (this.loginForm.phone === '') {
          alert('手机号不能为空');
        }else if(this.loginForm.newpassword === ''){
          alert('密码不能为空');
        }else if(this.loginForm.code === ''){
          alert('验证码不能为空');
        } else {
          axios({
            method: 'post',
            url: 'api/Main/ForgetPass',
            data: _this.loginForm
          }).then(res => {
            if (res.data.error == 0) {
              alert('修改成功');
              // _this.$router.push('/');
            } else {
              alert(res.data.msg);
            }

          }).catch(error => {
            alert('手机号或密码错误');
          });
        }
      },
      getSms() {
        if (this.loginForm.phone === '') {
          alert('手机号不能为空');
          // $(".get_sms_code").attr("disabled",true);
        } else {
          axios({
            method: 'get',
            url: 'api/Main/getsms',
            params: {
              phone: this.loginForm.phone,
              type: "2"
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
