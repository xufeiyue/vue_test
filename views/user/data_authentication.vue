<template>
  <div class="block">
    <van-nav-bar title="认证信息" style="background-color:#39a9ed;"/>
    <div class="process">
      <img src="./../../assets/img/approve_no.png" />
      <div class="progress_bar">
        <span>认证度:</span>
        <span class="bar">
						<i class="bar_blue"></i>
					</span>
        <span class="percentage">0%</span>
      </div>
    </div>
    <div class="rz">
        <van-cell title="身份认证" is-link value="去认证" />
        <van-cell title="照片认证" is-link value="去认证" />
        <van-cell title="结算卡认证" is-link value="去认证" />
    </div>
    <div class="tips">
      <p>*完成身份和照片认证后即可进行信用卡还款</p>
      <p>*完成所有认证可进行信用卡还款和信用收款</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "data_authentication",
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
  .van-ellipsis {
    color: white
  }
  .process {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .process{
    img {
      width: 35%;
      margin: 40px auto 10px;
    }
  }

  .progress_bar {
    font-size: 13px;
    width: 66%;
    margin: 0 auto;
  }

  .progress_bar{
    .bar{
      position: relative;
      display: inline-block;
      width: 42%;
      height: 10px;
      background: #9A9A9A;
      border-radius: 20px;
    }
  }

  .bar_blue {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 10px;
    background: #359DFE;
    border-radius: 20px;
  }

  .percentage {
    color: #999999;
  }
  .rz{
    text-align: left;
  }
  .tips {
    margin-top: 30px;
    text-align: center;
    p{
      font-size: 14px;
      color: #8f8f94;
    }
  }
</style>
