<template>
  <div class="block">
    <van-nav-bar title="还款列表" style="background-color:#39a9ed;"/>
    <van-tabs v-model="active" color="#1989fa" title-active-color="#1989fa">
      <van-tab title="进行">
        <div class="content_item_all" v-if="show">
          <div class="content_item" v-for="(msgs, index) in all_msgs" :key="index">
            <van-row type="flex" justify="space-between">
              <van-col span="6">还款金额</van-col>
              <van-col span="6">还款笔数</van-col>
              <van-col span="6">手续费</van-col>
            </van-row>
            <van-row type="flex" justify="space-between">
              <van-col span="6">{{msgs.various_money}}</van-col>
              <van-col span="6">{{msgs.various_repayment_times}}</van-col>
              <van-col span="6">{{msgs.various_fee}}</van-col>
            </van-row>
            <div class="line"></div>
            <van-row type="flex" justify="space-between">
              <van-col span="12">
                <div class="start_time">
                  <span>开始时间:{{msgs.various_start_time}}</span>
                </div>
                <div class="end_time">
                  <span>结束时间:{{msgs.various_end_time}}</span>
                </div>
              </van-col>
              <van-col span="10">
                <img class="list_status" ref="list_status" src="../assets/img/ic_repayment_loading.png" alt="">
              </van-col>
            </van-row>
          </div>
          <p class="load_more">点击加载更多</p>
        </div>
        <div class="no_info" v-else>
          <img src="../assets/img/no_creditbill_icon.png" />
          <p>没有相关数据</p>
        </div>
<!--        <van-pagination v-model="currentPage" :total-items="125" :show-page-size="3" force-ellipses/>-->
      </van-tab>
      <van-tab title="成功">内容 2</van-tab>
      <van-tab title="失败">内容 3</van-tab>
      <van-tab title="终止">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "reservation_list",
        beforeCreate () {
          document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
        },
        beforeDestroy () {
          document.querySelector('body').removeAttribute('style')
        },
        data() {
          return {
            active:0,
            show:true,
            all_msgs:[],
            card_id:''
            // ,
            // img_items:[
            //   {
            //     img01: require('../assets/img/ic_repayment_fail.png')
            //   },
            //   {
            //     img02:require("../assets/img/ic_repayment_loading.png")
            //   },
            //   {
            //     img03:require("../assets/img/ic_repayment_success.png.png")
            //   },
            //   {
            //     img04:require("../assets/img/ic_repayment_wait.png.png")
            //   },
            //   {
            //     img05:require("../assets/img/ic_repayment_zz.png.png.png")
            //   }
            // ]
          };
        },
      created(){
        this.getquery(), this.reservation_list()
      },
        methods:{
          reservation_list(){
              const tokens = localStorage.getItem('Authorization');
              axios({
                method: 'post',
                url: '/api/Xrepayment/index',
                data: {
                  token: tokens,
                  cid:this.card_id
                }
              }).then(res => {
                if (res.data.error == 0) {
                  console.log(res)
                  if(res.data.data.data.length > 0){
                    this.show = this.show;
                    for (var i = 0; i < res.data.data.data.length; i++) {
                      this.all_msgs = res.data.data.data;
                    }
                  }else{
                    this.show = !this.show;
                  }
                }
              }).catch(error => {

              });
          },
          getquery () {
            // 取到路由带过来的参数
            const routerquery = this.$route.query.card_id;
            // 将数据放在当前组件的数据内
            this.card_id = routerquery;
          }
        }
    }
</script>
<style scoped lang="less">
  .van-ellipsis {
    color: white
  }
  .block{
    background-color:#efeff4;
  }
  .content_item{
    width: 96%;
    margin: 0 auto;
    margin: 10px;
    padding-top:8px;
    padding-bottom:8px;
    background-color:white;
    border-radius:3px;
    font-size: 14px;
  }
  .van-row{
    margin-top:5px;
  }
  .line{
    width: 94%;
    margin: 0 auto;
    margin: 10px auto;
    height: 1px;
    background-color:#dad9d9;
  }
  .list_status{
    width: 40%;
  }
  .end_time{
    margin-top:3px;
  }
</style>
