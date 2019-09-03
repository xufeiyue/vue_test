<template>
  <div class="block">
    <van-nav-bar title="智能代还" style="background-color:#39a9ed;"/>
    <div class="binding_card_content">
      <div class="binding_card_list">
        <van-cell-group>
          <van-field value="姓名" label="持卡人" disabled/>
        </van-cell-group>
        <van-cell-group>
          <van-field value="身份证号" label="身份证" disabled/>
        </van-cell-group>
        <van-cell-group>
          <van-field label="银行卡" placeholder="银行卡号" oninput="value=value.replace(/[^\d]/g,'')"/>
        </van-cell-group>
        <van-cell-group>
          <van-field value="银行卡类型" label="卡类型" disabled/>
        </van-cell-group>
        <van-cell-group>
          <van-field label="信用额度" placeholder="信用额度" oninput="value=value.replace(/[^\d]/g,'')"/>
        </van-cell-group>



        <van-cell-group>
          <van-field :value="value_yxq" label="有效期" readonly right-icon="question-o"
                     @click-right-icon="show = true" @click="currentDate = true"/>
        </van-cell-group>
        <van-popup v-model="currentDate" position="bottom">
          <van-datetime-picker type="year-month" @cancel="currentDate = false" @confirm="onConfirm_yxq" :formatter="formatter"/>
        </van-popup>



        <van-cell-group>
          <van-field label="CVN2" placeholder="卡背后三位" right-icon="question-o" oninput="value=value.replace(/[^\d]/g,'')"
                     @click-right-icon="show1 = true"/>
        </van-cell-group>


        <van-cell-group>
          <van-field :value="value" label="账单日" readonly @click="showPicker = true"/>
        </van-cell-group>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker show-toolbar title="日" :columns="columns" @cancel="showPicker = false" @confirm="onConfirm"/>
        </van-popup>


        <van-cell-group>
          <van-field :value="value1" label="还款日" readonly @click="showPicker1 = true"/>
        </van-cell-group>
        <van-popup v-model="showPicker1" position="bottom">
          <van-picker show-toolbar title="日" :columns="columns" @cancel="showPicker1 = false" @confirm="onConfirm1"/>
        </van-popup>



        <van-cell-group>
          <van-field label="预留手机" placeholder="银行预留手机号" oninput="value=value.replace(/[^\d]/g,'')"/>
        </van-cell-group>
        <button class="upload_card">
          上传银行卡
        </button>
        <van-popup v-model="show">
          <div class="contact_popup">
            <p>有效期示例</p>
            <img src="../assets/img/card_validate_sample.png"/>
            <p class="contact_close" @click="show = false">关闭</p>
          </div>
        </van-popup>
        <van-popup v-model="show1">
          <div class="contact_popup">
            <p>CVN示例</p>
            <img src="../assets/img/card_cvn_sample.png"/>
            <p class="contact_close" @click="show1 = false">关闭</p>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "binding_card",
    data() {
      return {
        show: false,
        show1: false,
        value: '请选择账单日',
        value1: '请选择还款日',
        value_yxq: '请选择有效期 如:0324',
        showPicker: false,
        showPicker1: false,
        currentDate: false,
        columns: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
      }
    },
    methods: {
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
      onConfirm1(value){
        this.value1 = value;
        this.showPicker1 = false;
      },
      onConfirm_yxq(value){
        var vals = value.toString();
        var d = new Date(vals);
        var datetime_y = d.getFullYear();
        var y = datetime_y.toString();
        var y_ = y.substring(2);
        var datetime_m = d.getMonth() + 1;
        if(d.getMonth()<9){
          datetime_m = '0'+(d.getMonth() + 1);
        }else{
          datetime_m = d.getMonth() + 1;
        }
        this.value_yxq = datetime_m + y_;
        this.currentDate = false;
      },
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return value;
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
  .binding_card_list {
    text-align: left;
  }
  .upload_card {
    width: 85%;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    padding: 12px;
    background: #30ABFB;
    border: none;
    border-radius: 3px;
    color: #fff;
  }

  /*有效期弹窗*/
  .contact_popup {
    width: 52%;
    margin: 0 auto;
    p {
      text-align: center;
    }
    img {
      width: 100%;
    }
  }
  .contact_close {
    color: #1989fa;
  }
</style>
