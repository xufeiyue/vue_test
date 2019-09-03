<template>
  <div class="block">
    <van-nav-bar title="智能还款" style="background-color:#39a9ed;"/>
    <div class="payment_msg">
      <img class="cardjm_pic" src="../assets/img/ic_cardjm.png"/>
      <div class="payment_form">
        <p class="payment_money">还款金额</p>
        <div class="payment_input-row">
          <span class="sign">￥</span>
          <input type="number" placeholder="请输入还款金额" v-model="payment_val">
          <div class="clear"></div>
        </div>
        <div class="payment_input-row1">
          <van-field :value="value" label="开始时间:" readonly @click="start_click" placeholder="请选择计划开始时间"/>
          <van-popup v-model="startDate" position="bottom">
            <van-datetime-picker type="date" :min-date="minDate" @cancel="startDate = false" @confirm="onConfirm"/>
          </van-popup>
          <div class="clear"></div>
        </div>
        <div class="payment_input-row2">
          <van-field :value="value1" label="结束时间:" readonly @click="end_click" placeholder="请选择计划结束时间"/>
          <van-popup v-model="endDate" position="bottom">
            <van-datetime-picker type="date" :min-date="minDate" @cancel="endDate = false" @confirm="onConfirm1"/>
          </van-popup>
          <div class="clear"></div>
        </div>
        <div class="remain_money_div" v-if="show">
          <p class="remain_money">卡内余额</p>
          <div class="payment_input-row_last">
            <span class="sign">￥</span>
            <input type="number" :placeholder="balance" v-model="reserved_num" value="" id="reserved_num_input">
            <input type="hidden" v-model="reserved_number">
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
    <button @click="get_plan">生成预览计划</button>
  </div>
</template>
<script>
  import axios from 'axios'
    export default {
        name: "reservation_payment",
      data() {
        return {
          value: '',
          value1: '',
          startDate: false,
          endDate: false,
          minDate: new Date(),
          show:false,
          payment_val:'',
          reserved_num:'',
          reserved_number:'',
          balance:'请输入卡内余额',
          card_id:''
        }
      },
      created(){
        this.getquery()
      },
      methods:{
        start_click(){
            if(this.payment_val == ''){
              alert("请输入还款金额")
            }else{
              this.startDate = true;
            }
          },
        end_click(){
          if(this.payment_val == ''){
            alert("请输入还款金额")
          }else if(this.value == ''){
            alert("请选择开始时间")
          }else{
            this.endDate = true;
            this.show = true;
          }
        },
        onConfirm(value) {
          var vals = value.toString();
          var d = new Date(vals);
          var datetime_y = d.getFullYear();
          var datetime_m = d.getMonth() + 1;
          if(d.getMonth()<9){
            datetime_m = '0'+(d.getMonth() + 1);
          }else{
            datetime_m = d.getMonth() + 1;
          }
          var datetime_r = d.getDate();
          if(d.getDate()<9){
            datetime_r = '0'+(d.getDate());
          }else{
            datetime_r = d.getDate();
          }
          this.value = datetime_y + '-' + datetime_m + '-' +datetime_r;
          this.startDate = false;
        },
        onConfirm1(value) {
          var vals = value.toString();
          var d = new Date(vals);
          var datetime_y = d.getFullYear();
          var datetime_m = d.getMonth() + 1;
          if(d.getMonth()<9){
            datetime_m = '0'+(d.getMonth() + 1);
          }else{
            datetime_m = d.getMonth() + 1;
          }
          var datetime_r = d.getDate();
          if(d.getDate()<9){
            datetime_r = '0'+(d.getDate());
          }else{
            datetime_r = d.getDate();
          }
          this.value1 = datetime_y + '-' + datetime_m + '-' +datetime_r;
          this.endDate = false;
          const tokens = localStorage.getItem('Authorization');
          axios({
            method: 'post',
            url: '/api/Xrepayment/get_min_amount_reserved',
            data: {
              token: tokens,
              repayment_amount:this.payment_val,
              start_time:this.value,
              end_time:this.value1
            }
          }).then(res => {
            if (res.data.error_code == 0) {
              this.balance = "预留余额至少"+res.data.amount_reserved+"元";
              this.reserved_number = res.data.amount_reserved;
            }
          }).catch(error => {

          });
        },
        get_plan(){
          if(this.payment_val == '' || this.value == "" || this.value1 == "" || this.reserved_num == ''){
            alert("请补全信息")
            return false;
          }else{
            const tokens = localStorage.getItem('Authorization');
            axios({
              method: 'post',
              url: '/api/Xrepayment/get_min_amount_reserved',
              data: {
                token: tokens,
                repayment_amount:this.payment_val,
                start_time:this.value,
                end_time:this.value1
              }
            }).then(res => {
              if (res.data.error_code == 0) {
                const val = document.getElementById("reserved_num_input").value;
                if(val < res.data.amount_reserved){
                  alert("卡内最低预留余额" + res.data.amount_reserved + "元");
                  return false;
                }else{
                  this.$router.push({
                    path:'/plan_details',
                    name:'plan_details',
                    query:{
                      token: tokens,
                      payment_val:this.payment_val,
                      value:this.value,
                      value1:this.value1,
                      reserved_number:this.reserved_number,
                      card_id:this.card_id
                    }
                  })
                }
              }
            }).catch(error => {

            });
          }
        },
        getquery () {
          // 取到路由带过来的参数
          const routerquery = this.$route.query.card_id;
          // 将数据放在当前组件的数据内
          this.card_id = routerquery;
          console.log(this.card_id)
        }
      }
    }
</script>
<style scoped lang="less">
  .van-ellipsis {
    color: white
  }
  .cardjm_pic{
    width: 100%;
    margin: 0 auto;
  }
  .payment_form{
    width: 90%;
    margin: 0 auto;
    text-align: left;
  }
  .payment_input-row{
    border-bottom: 1px solid #ddd;
    .sign{
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: 30px;
      vertical-align: middle
    }
    input{
      font-size: 14px;
      border: 0;
    }
  }
  .payment_input-row_last{
    border-bottom: 1px solid #ddd;
    .sign{
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: 30px;
      vertical-align: middle
    }
    input{
      font-size: 14px;
      border: 0;
    }
  }
  button{
    width: 80%;
    margin: 0 auto;
    background-color: #46A4F9;
    border: 1px solid #46A4F9;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 20px;
    color: white;
    border-radius:3px;
    margin-top: 30px;
  }
</style>
