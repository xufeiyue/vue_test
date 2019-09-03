<template>
  <div class="block">
    <van-nav-bar title="智能代还" style="background-color:#39a9ed;"/>
    <div class="card_list" v-if="show">
      <div class="card_list_item" v-for="(msgs, index) in all_msgs" :key="index">
        <img :src='msgs.list_card_img'/>
        <p class="card_msg">
          <span>{{msgs.card_name}}</span>
          <span>{{msgs.card_no}}</span>
        </p>
        <div class="card_list_date">
          <div class="card_list_l">
            <span>账单日:</span>
            <span>{{msgs.card_account_day}}日</span>
          </div>
          <div class="card_list_r">
            <span>还款日:</span>
            <span>{{msgs.card_repayment_day}}日</span>
          </div>
        </div>
        <div class="reserve">
          <span @click="href_to1" :title="msgs.card_id">预约列表</span>
          <span @click="href_to2" :title="msgs.card_id">预约还款</span>
        </div>
      </div>
    </div>
    <div class="no_info" v-else>
      <img src="../assets/img/no_creditbill_icon.png"/>
      <p>没有相关数据</p>
    </div>
    <div class="add_card" @click="real_name_auth">
      <van-icon name="plus" size="26px"/>
      <span>添加信用卡</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "z_card_list",
    data(){
      return{
        all_msgs:[],
        show:true
      }
    },
    created() {
      this.card_list();
    },
    methods:{
      card_list(){
        const tokens = localStorage.getItem('Authorization')
        if(!tokens) {
          $(".card_list").hide();
        }else{
          axios({
            method: 'post',
            url: '/api/Xrepayment/card_list',
            data: {token: tokens}
          }).then(res => {
            if (res.data.error == 0) {
              console.log(res)
              this.show = this.show;
              for (var i = 0; i < res.data.data.length; i++) {
                this.all_msgs = res.data.data;
              }
            } else {
              this.show = !this.show;
            }
          }).catch(error => {

          });
        }
      },
      real_name_auth(){
        console.log(111)
        var tokens = localStorage.getItem('Authorization')
        axios({
          method: 'post',
          url: '/api/my/info',
          data: {token: tokens}
        }).then(res => {
          if (res.data.error == 0) {
            console.log(222)
            if(res.data.data.user_isactivation == 0){
              this.$router.push({ path:'/binding_card'})
              if(res.data.data.user_real == 0){
                console.log(444)
                Dialog.confirm({
                  title: '标题',
                  message: 'qqqqqq'
                }).then(() => {
                  console.log(1)
                  // on confirm
                }).catch(() => {
                  console.log(2)
                  // on cancel
                });
              }

            }else{

            }

          }
        }).catch(error => {

        });
      },
      href_to1(e){
        const card_id = e.target.getAttribute('title');
        console.log(card_id)
        this.$router.push({
          path:'/reservation_list',
          name:'reservation_list',
          query:{
            card_id :card_id
          }
        })
      },
      href_to2(e){
        const card_id = e.target.getAttribute('title');
        this.$router.push({
          path:'/reservation_payment',
          name:'reservation_payment',
          query:{
            card_id :card_id
          }
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .van-ellipsis {
    color: white
  }
  .van-icon-plus {
    font-size: 26px;
    float: left;
  }
  .van-field__control {
    color: #9c9c9e !important;
  }
</style>
