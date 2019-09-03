<template>
    <div class="block">
      <div class="index_content">
        <img src="../assets/img/444.png" alt="" style="width:100%">
        <div class="grid_list">
          <van-row type="flex" justify="space-around" class="jf_eb">
            <van-col span="8">
              <img src="../assets/img/jf_icon_1.png" alt="">
              <span>e豆:5000</span>
            </van-col>
            <van-col span="10">
              <img src="../assets/img/e币赚.png" alt="">
              <span>e币:5000.0000</span>
            </van-col>
          </van-row>
          <div class="list_item">
            <li title="1">
              <div class="grid_img">
                <img src="../assets/img/签到.png"/>
              </div>
              <p>每日签到</p>
            </li>
            <li title="2">
              <div class="grid_img">
                <img src="../assets/img/贷款.png"/>
              </div>
              <p>借钱花</p>
            </li>
            <li title="3">
              <div class="grid_img">
                <img src="../assets/img/积分.png"/>
              </div>
              <p>积分兑现</p>
            </li>
            <li title="4">
              <div class="grid_img">
                <img src="../assets/img/办卡.png"/>
              </div>
              <p>我要办卡</p>
            </li>
            <div class="clear"></div>
          </div>
        </div>
        <div class="content_details">
          <van-notice-bar text="通知内容" left-icon="volume-o" color="#1989fa" background="#ecf9ff" style="width:82%;margin: 0 auto;"/>
          <img class="yaoqing" src="../assets/img/yaoqing.png" alt="">
          <div class="content_item">
            <div class="content_item_l">
              <img src="../assets/img/农场.png" alt="">
            </div>
            <div class="content_item_r">
              <img src="../assets/img/rewu_icon_1.png" alt="">
              <img src="../assets/img/抢购.png" alt="">
            </div>
          </div>
        </div>
        <tabbar></tabbar>
      </div>
    </div>
</template>

<script>
  import tabbar from '@/components/tabbar.vue'
    export default {
        name: "index1",
        components: {
          tabbar
        }
    }
</script>

<style scoped lang="less">
  .index_content{
    position: relative;
  }
.grid_list{
  position: absolute;
  left: 50%;
  top:18%;
  width: 92%;
  margin-left: -46%;
  padding: 10px 0;
  font-size: 14px;
  color: #333;
  border-radius: 5px;
  background:#fff;
  box-shadow: 0px 6px 6px #d0caca;
}
  .jf_eb{
    .van-col{
      overflow: hidden;
    }
    img{
      width:20%;
      float: left;
    }
    span{
      float: left;
      margin-top: 4px;
      margin-left: 5px;
    }
  }
  .list_item{
    margin-top: 10px;
    li{
      width: calc(100% / 4);
      text-align: center;
      float: left;
      margin: 10px auto 0;
      p{
        line-height:10px;
      }
    }
  }
  .content_details{
    margin-top:80px;
  }
  .content_item{
    width: 95%;
    margin: 0 auto;
    height: 150px;
    margin-top:10px;
    overflow: hidden;
    .content_item_l{
      width: 48%;
      height: 100%;
      float: left;
      img{
        width: 100%;
        height: 100%;
        border-radius:5px;
      }
    }
    .content_item_r{
      width: 50%;
      height: 100%;
      float: right;
      img{
        width: 100%;
        height:48%;
        border-radius:5px;
      }
    }
  }
  .yaoqing{
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    margin-top: 6px;
  }
</style>
