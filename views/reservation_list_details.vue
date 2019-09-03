<template>
  <div class="block">
    <van-nav-bar title="列表详情" style="background-color:#39a9ed;"/>
    <div class="content_list">
      <img class="cardjm_pic" src="../assets/img/ic_cardjm.png"/>
      <div class="card_info">
        <div class="left">
          <img src="../assets/img/jifen1.png" class="bank_logo"/>
          <span class="bank_name">--</span>
        </div>
        <div class="right hk_status">
          待还款
        </div>
        <div class="clear"></div>
      </div>
      <div class="hk_info">
        <ul>
          <li>
            <p>完成还款时间</p>
            <span class="li_c end_time">2019-7-12</span>
          </li>
          <li>
            <p>总手续费</p>
            <span class="li_c sx_money">￥0.00元</span>
          </li>
          <li>
            <p>还款总金额</p>
            <span class="li_c h_money">￥0.00元</span>
          </li>
          <div class="clear"></div>
        </ul>

        <section>
          <div class="wrap">
            <!--大于180，则class=clip-auto circle，否则：circle-->
            <div class="circle">
              <!--度数为：当前进度*3.6-->
              <div class="percent left rotate"></div>
              <!--大于180，则class=percent right，否则为percent right wth0-->
              <div class='percent right wth0'></div>
            </div>
            <div class="num">
              <p>已还款</p>
              <span class="already_money">0.00</span>
              <div class="frequency">
                第
                <span class="l_num">0</span>
                <span>/</span>
                <span class="r_num">0</span> 次
              </div>
            </div>
          </div>
        </section>
        <p class="upgrade">办理会员省更多 ></p>
        <button type="button" class="repayment_btn">终止计划</button>
      </div>
      <!-- 计划列表-->
      <div class="list_details_item">
        <van-row type="flex" justify="space-between">
          <van-col span="6">还款金额</van-col>
          <van-col span="6">还款笔数</van-col>
          <van-col span="6">手续费</van-col>
        </van-row>
        <van-row type="flex" justify="space-between">
          <van-col span="6">6666</van-col>
          <van-col span="6">666</van-col>
          <van-col span="6">66666</van-col>
        </van-row>
        <div class="line"></div>
        <van-row>
          <van-col span="5">行业:</van-col>
          <van-col span="16" offset="2">沈阳市大东区整栋歌厅</van-col>
        </van-row>
        <div class="line1"></div>
      </div>
      <div class="list_details_item">
        <van-row type="flex" justify="space-between">
          <van-col span="6">还款金额</van-col>
          <van-col span="6">还款笔数</van-col>
          <van-col span="6">手续费</van-col>
        </van-row>
        <van-row type="flex" justify="space-between">
          <van-col span="6">6666</van-col>
          <van-col span="6">666</van-col>
          <van-col span="6">66666</van-col>
        </van-row>
        <div class="line"></div>
        <van-row>
          <van-col span="5">行业:</van-col>
          <van-col span="16" offset="2">沈阳市大东区整栋歌厅</van-col>
        </van-row>
        <div class="line1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "reservation_list_details",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>
<style scoped lang="less">
  .van-ellipsis {
    color: white
  }
  .block {
    background-color: #efeff4;
  }
  .cardjm_pic {
    width: 100%;
    margin: 0 auto;
  }
  .card_info {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background: #ED5A50;
    color: #fff;
    padding: 0 15px;
    .left {
      float: left;

      img {
        float: left;
      }

      span {
        float: left;
      }
    }

    .right {
      float: right;
    }
  }

  .card_info img {
    width: 12%;
    vertical-align: middle;
    margin-top: 8px;
    margin-right: 5px;
  }

  .hk_info {
    padding: 10px;
    background: #fff;
  }

  .hk_info ul li {
    width: calc(100% / 3);
    text-align: center;
    float: left;
    font-size: 14px;
  }

  .hk_info ul li p {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .hk_info ul li span {
    font-size: 14px;
  }

  /*圆环进度条*/

  .hk_info section {
    width: 130px;
    height: 130px;
    margin: 80px auto 10px auto;
    position: relative;
  }

  .hk_info .wrap,
  .hk_info .circle,
  .hk_info .percent {
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  .jump {
    position: absolute;
    top: 38px;
    left: 15px;
    font-size: 22px !important;
    color: #fff;
  }

  .hk_info .wrap {
    top: 0;
    left: 0;
    background-color: #ddd;
  }

  .hk_info .circle {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    border: 1px solid #ccc;
    clip: rect(0, 130px, 130px, 65px);
  }

  .hk_info .clip-auto {
    clip: rect(auto, auto, auto, auto);
  }

  .hk_info .percent {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    top: -1px;
    left: -1px;
  }

  .hk_info .left {
    border: 8px solid #30ABFB;
    clip: rect(0, 65px, 130px, 0);
  }

  .hk_info .right {
    border: 8px solid #30ABFB;
    clip: rect(0, 130px, 130px, 65px);
  }

  .hk_info .wth0 {
    width: 0;
  }

  .hk_info .num {
    position: absolute;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    width: 114px;
    height: 114px;
    line-height: 26px;
    text-align: center;
    left: 8px;
    top: 8px;
    border-radius: 50%;
    background: #fff;
    z-index: 1;
    font-size: 14px;
  }

  .hk_info .num p {
    margin-top: 14px;
    margin-bottom: 0;
    font-size: 13px;
  }

  .hk_info .num .frequency {
    font-size: 15px;
    color: #999;
  }

  .hk_info .num .frequency span {
    font-size: 18px;
    color: #333;
  }

  .hk_info .num .frequency .l_num {
    color: #30ABFB;
  }

  .hk_info .upgrade {
    text-align: center;
    font-size: 14px;
    color: #30ABFB;
  }

  .repayment_btn {
    width: 96%;
    margin: 0 auto;
    color: #fff;
    font-size: 14px;
    background: #30ABFB;
    border: 1px solid #30ABFB;
    padding: 10px 12px;
  }
  .list_details_item{
    width: 96%;
    margin: 0 auto;
    margin: 10px;
    padding-top:8px;
    padding-bottom:8px;
    background-color:white;
    border-radius:3px;
    font-size: 14px;
  }
  .line{
    width: 94%;
    margin: 0 auto;
    margin: 10px auto;
    height: 1px;
    background-color:#dad9d9;
  }
  .line1{
    width: 94%;
    margin: 0 auto;
    margin: 10px auto;
    height: 1px;
    background-color:#dad9d9;
  }
</style>
