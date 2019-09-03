<template>
  <div class="block">
    <div class="user_top">
      <p>我的</p>
      <div class="user_info">
        <div class="portrait">
          <img src="../../assets/img/avater_image.png" alt="" @click="upload_head_pic">
        </div>
        <div class="log_reg">
          <p class="user_name">登录/注册</p>
          <p class="user_name">未认证</p>
          <!--              <p class="vip_level">级别:普通会员</p>-->
        </div>
        <div class="qr_code_sample">
          <img src="../../assets/img/er_icon.png" alt="">
          <van-icon class="arrow" name="arrow" color='#FFFFFF'/>
        </div>
      </div>
    </div>
    <div class="user_fot">
      <div class="user_fot_item">
        <img src="../../assets/img/user_1.png" alt="">
        <van-cell title="面对面邀请" is-link/>
      </div>
      <!--        <div class="user_fot_item">-->
      <!--          <img src="../../assets/img/user_2.png" alt="">-->
      <!--          <van-cell title="面对面邀请" is-link />-->
      <!--        </div>-->
      <div class="user_fot_item">
        <img src="../../assets/img/user_3.png" alt="">
        <van-cell title="我的交易" is-link/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_4.png" alt="">
        <van-cell title="我的分润" is-link/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_5.png" alt="">
        <van-cell title="办卡进度" is-link/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_6.png" alt="">
        <van-cell title="我的订单" is-link/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_7.png" alt="">
        <van-cell title="我的银行卡" is-link/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_8.png" alt="">
        <van-cell title="我的费率" is-link/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_9.png" alt="">
        <van-cell title="升级加盟" is-link/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_10.png" alt="">
        <van-cell title="资料认证" is-link to="data_authentication" value="未认证"/>
      </div>
      <div class="user_fot_item">
        <img src="../../assets/img/user_11.png" alt="">
        <van-cell title="设置中心" is-link/>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from '@/components/tabbar.vue'

  export default {
    name: "user_index",
    components: {
      tabbar
    },
    methods: {
      upload_head_pic() {
        this.$router.push({path: '/user/upload_head_pic'})
      }
    }
  }
</script>

<style scoped lang="less">
  .user_top {
    position: relative;
    width: 100%;
    background: url(../../assets/img/user_bg.png) no-repeat center;
    background-size: 100% auto;
    padding: 10px 0 15px 0;

    p {
      color: white;
    }
  }

  .user_info {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;

    .portrait {
      float: left;

      img {
        width: 80%;
      }
    }

    .log_reg {
      float: left;
      line-height: 8px;

      p {
        margin-left: 10px;
        font-size: 14px;
      }
    }

    .qr_code_sample {
      float: right;

      img {
        width: 25%;
        margin-top: 11px;
      }
    }
  }

  .user_fot_item {
    width: 90%;
    margin: 0 auto;
    text-align: left;
    overflow: hidden;

    img {
      width: 7%;
      float: left;
      margin-top: 12px;
    }

    .van-cell {
      width: 90%;
      float: right;
      padding-left: 0;
    }
  }
</style>
