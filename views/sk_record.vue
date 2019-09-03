<template>
  <div class="block">
    <van-nav-bar title="收款记录" style="background-color:#39a9ed;"/>
    <div class="channel_status_content">
      <ul class="trade_list">
        <li>
          <div class='left logo' style='width:25%;'>
            <img src='../assets/img/profit_cash_icon.png'/>
          </div>
          <div class='left info'>
            <p class='trade_name'>支付中</p>
            <p class='trade_time'>2019年7月28日 10时58分</p>
          </div>
          <div class='right money'>+50.00</div>
          <div class='clear'></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sk_record",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>

<style scoped lang="less">
  .block{
    background-color:#efeff4;
  }
  .van-button {
    height: 38px;
    line-height: 38px;
    border-radius: 30px;
  }

  .van-ellipsis {
    color: white
  }
  .trade_list li{
    width:92%;
    background: #fff;
    padding: 10px 15px ;
    border-top: 1px solid #eee;
    align-items:center;
    display: -webkit-flex;
    font-size: 14px;
    text-align: left;
    p{
      margin: 0;
    }
    .time{
      font-size: 12px;
    }
    .name_h{
      font-size: 13px;
      color: #A3A3A3;
    }
    .name{
      color: #333;
    }
    .left{
      width: 70%;
    }
    .right{
      width: 30%;
      text-align: right;
      font-size: 22px;
      color: #A3A3A3;
    }
  }

</style>
