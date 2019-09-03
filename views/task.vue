<template>
  <div class="block">
    <van-nav-bar title="任务" style="background-color:#39a9ed;"/>
    <div class="task_content">
      <div class="task_all">
        <div class="task_item">
          <div class="task_item_l">
            充2000元
          </div>
          <div class="task_item_r">
            <p>
              <span>魅力值大礼包</span>
              <span>魅力值增长50分</span>
            </p>
            <img class="only_new_p" src="./../assets/img/only_new_p.png" alt=""/>
<!--            <van-button type="primary" @click="showPopup">-->
<!--              展示弹出层-->
<!--            </van-button>-->
            <button @click="showPopup">去充值</button>
          </div>
          <img class="hot_icon" src="./../assets/img/hot.png"/>
        </div>
        <div class="task_item">
          <div class="task_item_l">
            充2000元
          </div>
          <div class="task_item_r">
            <p>
              <span>魅力值大礼包</span>
              <span>魅力值增长50分</span>
            </p>
            <img class="only_new_p" src="./../assets/img/only_new_p.png" alt=""/>
            <button>去充值</button>
          </div>
          <img class="hot_icon" src="./../assets/img/hot.png"/>
        </div>
        <div class="task_item">
          <div class="task_item_l">
            充2000元
          </div>
          <div class="task_item_r">
            <p>
              <span>魅力值大礼包</span>
              <span>魅力值增长50分</span>
            </p>
            <img class="only_new_p" src="./../assets/img/only_new_p.png" alt=""/>
            <button>去充值</button>
          </div>
          <img class="hot_icon" src="./../assets/img/hot.png"/>
        </div>
        <div class="task_item">
          <div class="task_item_l">
            充2000元
          </div>
          <div class="task_item_r">
            <p>
              <span>魅力值大礼包</span>
              <span>魅力值增长50分</span>
            </p>
            <img class="only_new_p" src="./../assets/img/only_new_p.png" alt=""/>
            <button>去充值</button>
          </div>
          <img class="hot_icon" src="./../assets/img/hot.png"/>
        </div>
      </div>
      <div class="activity_introduce">
        <p><span>活动</span>说明</p>
        <p>1.任务类别：新人任务、每日任务、每月任务;</p>
        <p>2.做任务得e豆，获得的e豆将发放到e豆帐户中，请到e豆帐户查询;</p>
        <p>3.e豆可以到《e农场》版块内参加“种树得e币”游戏，赚取现金;</p>
        <p>4.本次活动最终解释权归团队所有。</p>
      </div>
      <van-popup v-model="show">
        <img class="complete_task_icon" src="./../assets/img/complete_task_icon.png" alt="">
      </van-popup>
    </div>
  </div>
</template>

<script>
  export default {
    name: "task",
    data() {
      return {
        show: false
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      }
    }
  }
</script>

<style scoped lang="less">
  .van-ellipsis {
    color: white;
  }
  *{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
  .task_content {
    padding-top: 70px;
    background: url(./../assets/img/task_banner.png) no-repeat;
    background-size: cover;
    box-shadow: none !important;
  }

  .task_all {
    width: 90%;
    margin: 0 auto;
    margin-top: 42%;
  }

  .task_item {
    width: 100%;
    height: 75px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    margin-top: 18px;
  }

  .task_item_l {
    width: 30%;
    height: 100%;
    float: left;
    background-color: #FFF68F;
    text-align: center;
    line-height: 75px;
  }

  .task_item_r {
    width: 70%;
    height: 100%;
    float:left;
    background-color: white;
    padding: 0 5px;
  }

  .task_item_r p {
    float: left;
    margin-top: 12px;
  }

  .task_item_r p span {
    display: block;
  }

  .task_item_r p span:nth-child(1) {
    font-size: 14px;
    color: #000000;
  }

  .task_item_r p span:nth-child(2) {
    font-size: 12px;
    color: #ccc;
  }

  .only_new_p {
    width: 28%;
    float: left;
    margin-top: 14px;
  }

  button {
    float: right;
    background-color: #FF7F24;
    /*border: 1px solid #FF7F24;*/
    border: 1px solid #fffdfd;
    color: white;
    line-height: 15px;
    border-radius: 14px;
    padding: 5px 4px;
    margin-top: 12px;
    background: linear-gradient(to right, rgb(253, 181, 50), rgb(255, 123, 45));
    font-size:14px;
  }

  .hot_icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 12%;
  }

  .activity_introduce {
    width: 100%;
    background-color: #ffe65f;
    padding: 8px 37px;
    margin-top: 15px;
    text-align: left;
  }

  .activity_introduce p {
    color: #3a3a3c;
  }

  .activity_introduce p:nth-child(1) {
    text-align: center;
    font-size: 16px;
  }

  .activity_introduce p span {
    color: orangered;
    font-weight: bold;
  }
  .van-popup{
    background:none;
  }
  .complete_task_icon{
    width:100%;
  }
</style>
