<template>
  <div class="block">
    <van-nav-bar title="一键收款" style="background-color:#39a9ed;"/>
    <div class="card_list" v-if="show">
      <div class="card_list_item" v-for="(msgs, index) in all_msgs" :key="index">
        <img :src='msgs.list_card_img'/>
        <p class="card_msg">
          <span>{{msgs.card_name}}</span>
          <span>{{msgs.card_no}}</span>
        </p>
        <div class="reserve">
          <span @click="href_to1" :title="msgs.card_id">收款</span>
          <span @click="href_to2" :title="msgs.card_id">收款记录</span>
        </div>
      </div>
    </div>
    <div class="no_info" style="display: none">
      <img src="../assets/img/no_creditbill_icon.png" />
      <p>没有相关数据</p>
    </div>
    <div class="add_card" style="display: none">
      <van-icon name="plus" size="26px"/>
      <span>添加信用卡</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "sk_card_management",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
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
      href_to1(e){
        const card_id = e.target.getAttribute('title');
        console.log(card_id)
        const tokens = localStorage.getItem('Authorization');
        axios({
          method: 'post',
          url: '/api/Xrepayment/check_user_payment_authorize_sk',
          data: {
            token: tokens,
            cid:card_id
          }
        }).then(res => {
          if (res.data.is_open == 1) {
            console.log(1)
            this.$router.push({
              path:'/sk_channel_status',
              name:'sk_channel_status',
              query:{
                card_id :card_id,
                res:res.data.res
              }
            })
          } else {
            console.log(2)
              this.$router.push({
                path:'/sk',
                name:'sk',
                query:{
                  card_id :card_id
                }
              })
          }
        }).catch(error => {});
      },
      href_to2(e){
        const card_id = e.target.getAttribute('title');
        console.log(card_id)
        this.$router.push({
          path:'/sk_record',
          name:'sk_record',
          query:{
            card_id :card_id
          }
        })
      }
    }
  }

</script>

<style scoped lang="less">
  .block{
    background-color:#efeff4;
  }
  .van-button{
    height: 38px;
    line-height: 38px;
    border-radius: 30px;
  }
  .van-ellipsis{
    color: white
  }
  .van-icon-plus{
    font-size: 26px;
    float: left;
  }
  .reserve{
    top:75%;
  }
  .reserve span:nth-child(2) {
    margin-left:18px;
  }
/*.sk_btn{*/
/*  width: 78%;*/
/*  font-size:16px;*/
/*  color: white;*/
/*  position: absolute;*/
/*  top: 58%;*/
/*  left: 10%;*/
/*}*/
/*  .sk_btn_l{*/
/*    float: left;*/
/*    padding: 5px;*/
/*    border-radius: 5px;*/
/*  }*/
/*  .sk_btn_r{*/
/*    float: right;*/
/*    padding: 5px;*/
/*    border-radius: 5px;*/
/*  }*/
</style>
