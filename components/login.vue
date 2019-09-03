<template>
  <div class="block">
    <van-nav-bar title="密码登录" style="background-color:#39a9ed;"/>
    <router-link to="/register">
      <span class="reg">注册</span>
    </router-link>
    <div class="logo_div">
      <img src="./../assets/img/logo.png" alt="">
    </div>
    <form action="" class="login_form" id="login_form">
      <div class="form_item">
        <img src="./../assets/img/phone_icon.png" alt="">
        <input type="text" v-model="loginForm1.phone" placeholder="请输入手机号">
      </div>
      <div class="switch_content">
        <transition name="fade" mode="out-in">
          <div class="form_item pas" v-if="show" key="1">
            <img src="./../assets/img/password_icon.png" alt="">
            <input type="password" v-model="loginForm1.password" placeholder="请输入密码">
          </div>
          <div class="form_item sms" v-else key="2">
            <img src="./../assets/img/sms_icon.png" alt="">
            <input type="number" v-model="verification" placeholder="请输入短信验证码" style="width:60%">
            <button v-show="sendCode" type="button" class="get_sms_code" @click="getSms">获取验证码</button>
            <button v-show="!sendCode" type="button" disabled="disabled" class="get_sms_code blue">{{auth_time}}s
            </button>
          </div>
        </transition>
      </div>
      <transition name="fade" mode="out-in">
        <div class="password_part" v-if="show">
          <router-link to="/forget_pw">
            <span class="forget_span">忘记密码</span>
          </router-link>
          <van-checkbox v-model="checked" class="van-checkbox">记住密码</van-checkbox>
        </div>
<!--        <div class="no_get_sms_code" v-else>-->
<!--          <span>收不到验证码?</span>-->
<!--        </div>-->
      </transition>
      <button id="login_btn" @click="login">登录</button>
    </form>
    <p class="login_switch" @click="login_switch($event)" ref="login_switch" data-num="1">切换登录方式</p>
  </div>
</template>
<script>
  import axios from 'axios'
  import {mapMutations} from 'vuex';

  export default {
    name: "login",
    data() {
      return {
        checked: false,
        loginForm1: {
          phone: '',
          password: '',
          type: 2
        },
        show: true,
        sendCode: true,
        auth_time: 0,
        verification: "",
      };
    },

    methods: {
      ...mapMutations(['changeLogin']),
      login() {
        // 获取num的值，当num = 1 用密码登录 2 验证码登录
        var _this = this;
        var login_switch_type = this.$refs.login_switch.dataset.num;
        if (login_switch_type == 1) {
          if (this.loginForm1.phone == '' || this.loginForm1.password == '') {
            alert('手机号或密码不能为空');
          } else {
            axios({
              method: 'post',
              url: '/api/Main/login',
              data: {phone: this.loginForm1.phone, type: 2, password: this.loginForm1.password}
            }).then(res => {
              if (res.data.error == 0) {
                alert('登陆成功');
                //localStorage.setItem("token", res.data.token);
                _this.userToken = res.data.token;
                // 将用户token保存到vuex中
                _this.changeLogin({Authorization: _this.userToken});
                // _this.$router.push('/');
              } else {
                alert(res.data.msg);
              }

            }).catch(error => {
              alert('账号或密码错误');
            });
          }
        } else {
          if (this.loginForm1.phone == '' || this.verification == '') {
            alert('手机号或验证码不能为空');
          } else {
            axios({
              method: 'post',
              url: 'api/Main/login',
              data: {phone: this.loginForm1.phone, type: 1, smscode: this.verification}
            }).then(res => {
              if (res.data.error == 0) {
                alert('登陆成功');
                //localStorage.setItem("token", res.data.token);
                _this.userToken = res.data.token;
                // 将用户token保存到vuex中
                _this.changeLogin({Authorization: _this.userToken});
                // _this.$router.push('/');
              } else {
                alert(res.data.msg);
              }

            }).catch(error => {
              alert('账号或密码错误');
            });
          }
        }

      },
      getSms() {
        if (this.loginForm1.phone == '') {
          alert('手机号不能为空');
          // $(".get_sms_code").attr("disabled",true);
        } else {

          axios({
            method: 'get',
            url: 'api/Main/getsms',
            params: {
              phone: this.loginForm1.phone,
              type: "0"
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
      },
      login_switch(e) {
        this.show = !this.show;
        var login_switch_type = this.$refs.login_switch.dataset.num;
        if (login_switch_type == 1) {
          this.$refs.login_switch.dataset.num = 2;
        } else if (login_switch_type == 2) {
          this.$refs.login_switch.dataset.num = 1;
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .van-checkbox {
    float: right;
  }

  .van-ellipsis {
    color: white
  }
</style>
