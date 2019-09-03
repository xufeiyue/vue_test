<template>
  <div class="block">
    <van-nav-bar title="智能代还" style="background-color:#39a9ed;"/>
    <img class="smart_banner" src="../assets/img/zhineng_bg.png" alt="">
    <div class="repay_methods">
      <div class="repay_methods1" id="repay_methods1">
        <img src="../assets/img/huan_1.png"/>
        <span class="repay_methods_span1">智能还</span>
        <button>
          <router-link to='z_card_list'>
            <span class="repay_methods_span2">去还款</span>
          </router-link>

          <img class="to_repay" src="../assets/img/shoushi1.png"/>
        </button>
        <p>最低预留2%-5%,即可还全额账单</p>
      </div>
      <div class="repay_methods1" id="repay_methods2">
        <img src="../assets/img/huan_2.png"/>
        <span class="repay_methods_span1">养卡还</span>
        <button>
          <span class="repay_methods_span2">去还款</span>
          <img class="to_repay" src="../assets/img/shoushi1.png"/>
        </button>
        <p>多通道,多次数,多商户,多金额,还款更养卡</p>
      </div>
      <div class="repay_methods1" id="repay_methods3">
        <img src="../assets/img/huan_3.png"/>
        <span class="repay_methods_span1">多卡还</span>
        <button>
          <span class="repay_methods_span2">去还款</span>
          <img class="to_repay" src="../assets/img/shoushi1.png"/>
        </button>
        <p>用单卡最少资金同时还多张卡账单</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "reimbursement_means",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>
<style scoped lang="less">
  .van-ellipsis{
    color:white
  }
  .block{
    background-color:#efeff4;
  }
  .smart_banner{
    width: 100%;
  }
  .repay_methods{
    width: 90%;
    margin: 0 auto;
    margin-bottom:30px;
    text-align:left;
    padding: 0 0 30px 0;
  }
  .repay_methods1{
    overflow: hidden;
    /* border: 1px solid #CCCCCC; */
    margin-top: 18px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
  }
  .repay_methods1 img:nth-of-type(1){
    width: 50px;
    height: 50px;
    float: left;
  }
  .repay_methods_span1{
    float: left;
    font-size:18px;
    margin-top: 10px;
    margin-left:10px;
  }
  .repay_methods1 img:nth-of-type(2){
    width:45px;
    height:38px;
    float: left;
    margin-top: 5px;
    margin-left: 8px;
  }
  .repay_methods1 p{
    width: 88%;
    margin: 0 auto;
    float: left;
    margin-top: 10px;
    font-size:14px;
  }
  .repay_methods1 img:nth-of-type(3){
    width:40px;
    height:36px;
    float: left;
    margin-top:5px;
  }
  .repay_methods1 button{
    float: right;
    background-color: #46A4F9;
    border: 1px solid #46A4F9;
    color: white;
    height:30px;
    line-height:28px;
    border-radius:10px;
  }
  .repay_methods_span2{
    font-size:16px;
    float:left;
    color:white;
  }
  .to_repay{
    width: 28px !important;
    margin-top:-3px;
    height: 30px !important;
    float:right !important;
    margin-right:-5px;
  }
</style>
