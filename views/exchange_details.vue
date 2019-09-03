<template>
  <div class="block">
    <van-nav-bar title="兑换详情" style="background-color:#39a9ed;"/>
    <div class="ex_details_content">
      <img src="../assets/img/ex_3.png" />
    </div>
    <div class="exchange_steps">
      <div class="exchange_steps_content">

      </div>
    </div>
    <div class="plan_btn_fot_">
      <van-popup v-model="show">
        <div class="contact_popup">
          <p>联系客服</p>
          <div class="contact_online">
            <img src="../assets/img/客服.png" alt="">
            <span>在线客服</span>
            <img class="contact_jintou" src="../assets/img/右箭头.png" alt="">
          </div>
          <p class="contact_close" @click="show = false">关闭</p>
        </div>
      </van-popup>
      <van-popup v-model="show1">
        <div class="contact_popup">
          <input type="text" placeholder="请输入兑换码">
          <div class="contact_popup_btn">
            <div class="popup_btn_l" @click="show1 = false">
              取消
            </div>
            <div class="popup_btn_r" @click="show1 = false">
              确认
            </div>
          </div>
        </div>
      </van-popup>
      <div class="plan_btn_fot_l" @click="show = true">
        联系客服
      </div>
      <div class="plan_btn_fot_r" @click="show1 = true">
        立即兑换
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "exchange_details",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
    data() {
      return {
        show: false,
        show1: false
      }
    }
  }
</script>

<style scoped lang="less">
  .van-ellipsis{
    color: white
  }
  .block{
    background-color:#efeff4;
  }
  .van-popup{
    width: 96%;
  }
  .contact_popup{
    width:96%;
    height:118px;
    margin: 0 auto;
    input{
      margin-top: 33px;
      padding: 5px 0px 5px 12px;
    }
  }
  .contact_online{
    text-align:left;
    border-bottom: 1px solid #f1e9e9;
    overflow: hidden;
    img{
      width:12%;
      float:left;
    }
    span{
      float:left;
      margin-top:3%;
      margin-left:5%;
    }
    .contact_jintou{
      width:10% !important;
      float:right;
      margin-top:2%;
    }
  }
  .contact_popup_btn{
    width:60%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 10px;

  }
  .popup_btn_l{
    width:48%;
    text-align: center;
    float: left;
    border-right:1px solid #f1e9e9;
  }
  .popup_btn_r{
    width: 48%;
    text-align: center;
    float: right;
    color:#1989fa;
  }
  .contact_close{
    text-align: right;
    color:#1989fa;
  }
</style>
