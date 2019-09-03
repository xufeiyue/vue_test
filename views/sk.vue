<template>
  <div class="block">
    <van-nav-bar title="收款" style="background-color:#39a9ed;"/>
    <div class="payment_msg">
      <img class="cardjm_pic" src="../assets/img/ic_cardjm.png"/>
      <div class="payment_form">
        <p class="payment_money">收款金额</p>
        <div class="payment_input-row">
          <span class="sign">￥</span>
          <input type="number" placeholder="请输入收款金额" v-model="payment_val">
          <div class="clear"></div>
        </div>
        <p>收款地区</p>
        <div class="area_r_input" @click="show">
          <van-icon name="location" class="area_icon" size="26px"/>
          <input class="addr-input province" v-model="province" placeholder="请选择地区" readonly/>
          <input class="addr-input city" v-model="city" readonly/>
        </div>
        <van-popup v-model="flag" position="bottom">
          <van-area :area-list="areaList" :columns-num="2" @confirm="onAddrConfirm" @cancel="shut" :value="addrCode"/>
        </van-popup>
<!--        <div class="channel_select">-->
<!--          <van-radio-group v-model="radio">-->
<!--            <div class="which_channel">-->
<!--              <van-radio name="1"></van-radio>-->
<!--              <p>粉色范围粉色范围粉色范围粉色范围粉色范围粉色范围粉色范围粉色范围</p>-->
<!--            </div>-->
<!--            <div class="which_channel">-->
<!--              <van-radio name="2"></van-radio>-->
<!--              <p>粉色范围粉色范围粉色范围粉色范围粉色范围粉色范围粉色范围粉色范围</p>-->
<!--            </div>-->
<!--          </van-radio-group>-->
<!--        </div>-->
        <div class="custom">
          <div class="left">
            到账卡：
            <span class="bk_name">--</span>
          </div>
          <div class="right">
            到账金额：
            <span class="get_money">￥0.00</span>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <button>立即收款</button>
  </div>
</template>
<script>
  import axios from 'axios'
  // 导入area.js文件数据
  import AreaList from './../../src/area'
  export default {
    name: "sk",
    data() {
      return {
        payment_val:'',
        addrCode: '110000',
        province: '',
        city: '',
        areaList: AreaList,
        flag: false,
        radio: '1'
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        // 初始化地址选择器
        this.areaList = AreaList // 初始化选择器数据
      },
      show () {
        this.flag = true
      },
      onAddrConfirm (e) { // 点击确认，获取所选的省市区数据
        // 确定选择,返回的必定是三元素数组
        // console.log('this.onAddrConfirm=>e', e)
        this.province = e[0].name
        this.city = e[1].name
        this.flag = false
      },
      shut () {
        this.flag = false
      },
      get_plan_preview(){
        const tokens = localStorage.getItem('Authorization');
        axios({
          method: 'post',
          url: '/api/Xrepayment/generate_plan_preview',
          data: {
            token: tokens,
            repayment_amount:this.payment_val,
            start_time:this.value,
            end_time:this.value1,
            balance_money:this.reserved_number,
            cid:this.card_id
          }
        }).then(res => {
          console.log(res)
          if (res.data.error_code == 0) {
            this.hk_num = res.data.res.repayment_amount;
            this.sxf_num = res.data.res.sxf;
            this.yl_num = res.data.res.balance_money;
            if(res.data.res.td_list.length > 0){
              for (var i = 0; i < res.data.res.td_list.length; i++) {
                this.td_all_msgs = res.data.res.td_list;
              }
            }
            if(res.data.res.plan_list.length > 0){
              for (var j = 0; j < res.data.res.plan_list.length; j++) {
                this.plan_all_msgs = res.data.res.plan_list;
              }
            }
          }
        }).catch(error => {

        });
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
  .select_area{
    width: 100%;
    padding:20px 0;
    background-color:#1989fa;
    margin-top: 20px;
    overflow: hidden;
    p{
      color:white;
      text-align: left;
      padding: 0 10px;
      span{
        color: red;
      }
    }
  }
  .area_r_input{
    width: 100%;
    margin: 0 auto;
    border: 1px solid white;
    background-color: white;
    font-size: 14px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }
  .province,.city{
    width:44%;
    border: none;
    float: left;
  }
  .area_icon{
    float: left;
    margin-right:2%;
  }
  .which_channel{
    overflow: hidden;
    .van-radio{
      float:left;
      margin-top:18px;
    }
    p{
      width:80%;
      float:right;
    }
  }
  .custom {
    height: 40px;
    line-height: 40px;
    background: #fff;
    .left{
      font-size: 14px;
      float: left;
      .bank_name {
        font-size: 13px;
        vertical-align: middle;
      }
    }
    .right {
      float: right;
      color: #999999;
      font-size: 14px;
    }
    .get_money {
      color: #D0656D;
      font-size: 13px;
      vertical-align: middle;
    }
  }

</style>
