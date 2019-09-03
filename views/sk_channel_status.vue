<template>
  <div class="block">
    <van-nav-bar title="通道状态" style="background-color:#39a9ed;"/>
    <div class="channel_status_content">
      <div class="content_item" v-for="(msgs, index) in all_msgs" :key="index">
        <img src="../assets/img/zhineng_bg.png" style="width: 100%"/>
        <div class="repay_methods" >
          <img src="../assets/img/channel_status1.png"/>
          <span class="repay_methods_span1">{{msgs.payment_name}}</span>
          <van-button @click="to_open_td"
                      :title="msgs.payment_id"
                      :content="msgs.payment_controller"
                      :name="msgs.payment_is_verification">
            <span class="repay_methods_span2 to_open_td" v-if="msgs.is_open == '0'">
              去开通
            </span>
            <span class="repay_methods_span2" v-else-if="msgs.is_open == '1'">已开通</span>
            <span class="repay_methods_span2" v-else-if="msgs.is_open == '2'">申请中</span>
            <span class="repay_methods_span2" v-else>开通失败，请重试</span>

          </van-button>
          <van-popup v-model="show">
            <p>请输入验证码</p>
            <input type="text" v-model="value">
            <p>
              <span @click="close_kt">取消</span>
              <span @click="confirm_kt">确认</span>
            </p>
          </van-popup>

<!--          <button>-->
<!--            <span class="repay_methods_span2 to_open_td" v-if="msgs.is_open == '0'" @click="to_open_td"-->
<!--                  :title="msgs.payment_id"-->
<!--                  :content="msgs.payment_controller"-->
<!--                  :name="msgs.payment_is_verification">-->
<!--              去开通-->
<!--            </span>-->
<!--            <span class="repay_methods_span2" v-else-if="msgs.is_open == '1'">已开通</span>-->
<!--            <span class="repay_methods_span2" v-else-if="msgs.is_open == '2'">申请中</span>-->
<!--            <span class="repay_methods_span2" v-else>开通失败，请重试</span>-->
<!--          </button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "sk_channel_status",
        beforeCreate () {
          document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
        },
        beforeDestroy () {
          document.querySelector('body').removeAttribute('style')
        },
        data(){
          return{
            all_msgs:[],
            card_id:'',
            show: false,
            value:''
          }
        },
      created() {
        this.getquery(),this.channel_status_list();
      },
      methods:{
        channel_status_list(){
          const tokens = localStorage.getItem('Authorization');
          axios({
            method: 'post',
            url: '/api/Xrepayment/check_user_payment_authorize_sk',
            data: {
              token: tokens,
              card_id:this.card_id
            }
          }).then(res => {
            if (res.data.is_open == 2) {
              console.log(1)
              this.$router.push({
                path:'/sk',
                name:'sk',
                query:{
                  token: tokens,
                  card_id:this.card_id
                }
              })
            } else {
              console.log(res)
              for (var i = 0; i < res.data.res.length; i++) {
                this.all_msgs = res.data.res;
              }
            }
          }).catch(error => {});
        },
        getquery () {
          // 取到路由带过来的参数
          const routerquery = this.$route.query.card_id;
          // 将数据放在当前组件的数据内
          this.card_id = routerquery;
          console.log(this.card_id)
        },
        to_open_td(e){
          const tokens = localStorage.getItem('Authorization');
          const payment_id = e.target.getAttribute('title');
          const payment_controller = e.target.getAttribute('content');
          const payment_is_verification = e.target.getAttribute('name');
          this.show = true;
          axios({
            method: 'post',
            url: '/api/Xrepayment/go_reg_passageway_test',
            data: {
              token: tokens,
              cid:this.card_id,
              pid:payment_id,
              td_d:payment_controller
            }
          }).then(res => {
            if (res.data.error_code == 0) {
              if(payment_is_verification == 1){
                  confirm_kt(e);
              }else{
                alert(res1.data.msg);
                window.location.reload()
              }
            } else {
              alert(res.data.msg);
              return false;
            }
          }).catch(error => {});
        },
        close_kt(){
          this.show = false;
        },
        confirm_kt(e){
          const tokens = localStorage.getItem('Authorization');
          const payment_id = e.target.getAttribute('title');
          const yzm_code = this.value;
          const _this = this;
          if(this.value != ''){
            axios({
              method: 'post',
              url: '/api/Xrepayment/fastpay_binding_bank_card_advance',
              data: {
                token: tokens,
                cid:this.card_id,
                pid:payment_id,
                ticket:1,
                valid_code:yzm_code
              }
            }).then(res1 => {
              if (res1.data.error_code == 0) {
                alert(res1.data.msg);
                window.location.reload()
              } else {
                alert(res1.data.msg);
                return false;
              }
            }).catch(error => {});
          }else{
            alert('请输入验证码');
            return false;
          }
          this.show = false;
        }
      }
    }
</script>

<style scoped lang="less">
  .block{
    background-color:#efeff4;
  }
  .van-button{
    height: 38px;
    line-height: 38px;
    border-radius: 30px;
  }
  .van-ellipsis{
    color: white;
  }
  .repay_methods{
    width:85%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 25px;
    img{
      width:45px;
      height:45px;
      float: left;
    }
    .repay_methods_span1{
      float: left;
      font-size:18px;
      color: #545454;
      margin-top: 10px;
      margin-left:10px;
    }
    button{
      float: right;
      background-color: #46A4F9;
      border: 1px solid #46A4F9;
      color: white;
      height:30px;
      line-height: 15px;
      border-radius:10px;
      margin-top: 5px;
    }
  }
</style>
