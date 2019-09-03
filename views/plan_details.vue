<template>
  <div class="block">
    <van-nav-bar title="计划详情" style="background-color:#39a9ed;"/>
    <div class="plan_top">
      <div class="select_area">
        <p><span>*</span>选择消费地区</p>
        <div class="area_r_input" @click="show">
          <input class="addr-input province" v-model="province" placeholder="请选择地区" readonly/>
          <input class="addr-input city" v-model="city" readonly/>
        </div>
      </div>
      <van-popup v-model="flag" position="bottom">
        <van-area :area-list="areaList" :columns-num="2" @confirm="onAddrConfirm" @cancel="shut" :value="addrCode"/>
      </van-popup>
      <ul class="channel_ul" v-for="(msgs, index) in td_all_msgs" :key="index">
        <li>{{msgs.payment_code}} {{msgs.payment_name}}</li>
        <!--          <li>通道2</li>-->
        <!--          <li>通道3</li>-->
      </ul>
      <div class="line"></div>
      <van-row type="flex" justify="space-around" class="hk_msg">
        <van-col span="6">还款金额</van-col>
        <van-col span="6">总手续费</van-col>
        <van-col span="6">预留总额度</van-col>
      </van-row>
      <van-row type="flex" justify="space-around" class="hk_msg_num">
        <van-col span="6">{{hk_num}}</van-col>
        <van-col span="6">{{sxf_num}}</van-col>
        <van-col span="6">{{yl_num}}</van-col>
      </van-row>
    </div>
    <div class="reset_plan">
      <div class="reset_plan_btn" @click="reset">
        重置计划
      </div>
    </div>
    <div class="plan_fot">
      <div class="plan_list_item" v-for="(msgs, index) in plan_all_msgs" :key="index">
        <div class="plan_list_title">
          <van-row>
            <van-col span="3">{{msgs.payment_info.payment_name}}</van-col>
            <van-col span="8">还款:￥{{msgs.hk.list}}</van-col>
            <van-col span="12">{{msgs.hk.times_list}}</van-col>
          </van-row>
        </div>
        <div class="statement">
          <div class="statement_l">
            <p v-for="(msg, index) in msgs.xf.list">消费:{{msg}}</p>
          </div>
          <div class="statement_r">
            <p v-for="(msg1, index) in msgs.xf.times_list">{{msg1}}</p>
          </div>
        </div>
        <!--          <van-field :value="value_industry" label="行业:" readonly @click="industry_area = true"/>-->
        <!--          <van-icon name="arrow" class="you_icon"/>-->
        <!--          <van-popup v-model="industry_area" position="bottom">-->
        <!--            <van-picker show-toolbar :columns="columns" @cancel="industry_area = false" @confirm="onConfirm"/>-->
        <!--          </van-popup>-->
      </div>
    </div>
    <div class="plan_btn_fot" @click="sub_plan">
      提交计划
    </div>
    <!--      <div class="plan_btn_fot_">-->
    <!--          <div class="plan_btn_fot_l">-->
    <!--              查看下一次计划-->
    <!--          </div>-->
    <!--          <div class="plan_btn_fot_r">-->
    <!--              提交计划-->
    <!--          </div>-->
    <!--      </div>-->
  </div>
</template>

<script>
  import axios from 'axios'
  // 导入area.js文件数据
  import AreaList from './../../src/area'
  export default {
    name: "plan_details",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
    data() {
      return {
        value_industry: '请选择地区',
        addrCode: '110000',
        province: '',
        city: '',
        areaList: AreaList,
        flag: false,
        industry_area:false,
        columns: ['01', '02', '03', '04'],
        // 开始时间
        value: '',
        // 结束时间
        value1: '',
        //还款金额
        payment_val:'',
        //卡内余额
        reserved_number:'',
        //银行卡id
        card_id:'',
        hk_num:'',
        sxf_num:'',
        yl_num:'',
        td_all_msgs:[],
        plan_all_msgs:[],
        // 消费明细
        statement:[]
      }
    },
    created () {
      this.init(),this.getquery(),this.get_plan_preview()
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
      onConfirm(value) {
        this.value = value;
        this.industry_area = false;
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
      },
      getquery () {
        // 取到路由带过来的参数
        this.payment_val = this.$route.query.payment_val;
        this.value = this.$route.query.value;
        this.value1 = this.$route.query.value1;
        this.reserved_number = this.$route.query.reserved_number;
        this.card_id = this.$route.query.card_id;
      },
      reset(){
        // window.location.reload();
      },
      sub_plan(){
        if(this.province != ''){
          const tokens = localStorage.getItem('Authorization');
          axios({
            method: 'post',
            url: '/api/Xrepayment/sub_plan',
            data: {
              token: tokens,
              repayment_amount:this.payment_val,
              start_time:this.value,
              end_time:this.value1,
              balance_money:this.reserved_number,
              cid:this.card_id,
              city:this.province + this.city
            }
          }).then(res => {
            console.log(res)
            if (res.data.error_code == 0) {
              alert(res.data.msg)
            }
          }).catch(error => {

          });
        }else{
          alert("请选择消费地区")
        }
      }
    }
  }
</script>
<!--修改vant的默认样式-->
<style>
  @import './../assets/css/ele.css';
</style>
<style scoped lang="less">
  .block{
    background-color:#efeff4;
  }
  .van-ellipsis {
    color: white
  }
  .select_area{
    .van-cell{
      padding: 18px;
      background-color:#1989fa;
      color:white;
    }
  }
  .plan_list_item{
    .van-cell{
      padding: 10px 0;
    }
  }
  .plan_top{
    padding-bottom:20px;
    background-color:white;
  }
  ///////////
  .statement{
    width:92%;
    margin: 0 auto;
    overflow: hidden;
    .statement_l{
      width: 50%;
      float: left;
    }
    .statement_r{
      width: 50%;
      float: right;
    }
    p{
      text-align:left;
    }
  }
  ///////////////
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
    padding: 0 12px;
  }
  .province,.city{
    width:155px;
    border: none;
    float: left;
  }
  .channel_ul{
    width: 80%;
    margin: 0 auto;
    text-align: left;
    padding-bottom: 10px;
    li{
      margin-top: 5px;
    }
  }
  .line{
    width: 100%;
    height: 1px;
    background-color:#ddd;
    margin-bottom:15px;
  }
  .hk_msg{
    font-size:14px;
  }
  .hk_msg_num{
    margin-top:10px;
  }
  .plan_fot{
    width: 100%;
    height: 100%;
    background-color:#efeff4;
    padding-bottom:50px;
  }
  .plan_list_item{
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    background-color: white;
    padding-bottom:7px;
    margin-top:20px;
    font-size:14px;
    overflow: hidden;
  }
  .plan_list_title{
    width: 100%;
    height: 40px;
    background-color:#46A4F9;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    color:white;
    line-height: 40px;
  }
  .industry_consumption{
    color:#777;
    border-bottom:1px solid #ddd;
    padding: 15px 0;
  }
  .you_icon{
    float: right;
    margin-top: -28px;
    margin-right: 58px;
  }
  /*重置按钮*/
  .reset_plan{
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .reset_plan_btn{
    width: 30%;
    margin: 0 auto;
    margin-top:-15px;
    border: 1px solid #46A4F9;
    background: #46A4F9;
    color: white;
    padding: 6px 0;
    border-radius: 30px;
    /* box-shadow:1px 2px 5px #808080; */
    /* font-weight: bold; */
  }
  .plan_btn_fot_{
    width: 100%;
    height: 33px;
    font-size: 14px;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    bottom: 0;
  }
  .plan_btn_fot_l{
    width:70%;
    height: 100%;
    float: left;
    background-color:#FB4E4E;
    color: white;
    text-align:center;
    line-height: 33px;
  }
  .plan_btn_fot_r{
    width: 30%;
    height: 100%;
    float:right;
    background-color:#46A4F9;
    color: white;
    text-align: center;
    line-height: 33px;
  }
  .plan_btn_fot{
    width: 100%;
    height: 33px;
    margin: 0 auto;
    background-color:#46A4F9;
    color: white;
    overflow: hidden;
    text-align: center;
    line-height: 33px;
    position: fixed;
    bottom: 0;
  }
</style>
