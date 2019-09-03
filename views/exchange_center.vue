<template>
  <div class="block">
    <van-nav-bar title="兑换中心" style="background-color:#39a9ed;"/>
    <div class="exchange_content">
      <div class="to_change">
        <p class="to_change_p">
          <span>去兑换</span>
          <span>选择方法,兑换现金</span>
        </p>
        <div class="exchange_list">
          <p class="exchange_title">
            <span class="exchange_title_span1">兑里程(自助)</span>
            <button>
              <span class="exchange_title_span2">去兑换</span>
              <img src="../assets/img/shoushi1.png"/>
            </button>
          </p>
          <table border="" cellspacing="" cellpadding="">
            <tr>
              <th>优势</th>
              <th>起兑单位</th>
              <th>兑换次数</th>
              <th>积分价值</th>
            </tr>
            <tr>
              <td>积分价值高</td>
              <td>240000</td>
              <td>不限次数</td>
              <td>8元/万</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="to_calculate">
        <p class="to_calculate_p">算一算</p>
        <div class="integral_num">
          <img src="../assets/img/jifen1.png"/>
          <input type="number" name="" value="" placeholder="请输入您的积分"/>
          <button>点击计算</button>
        </div>
        <div class="result_num">
          <img src="../assets/img/jifen_m.png"/>
          <input type="number" name="" value="" placeholder="不同方法,兑换价值略有不同" readonly="readonly"/>
        </div>
      </div>
      <div class="query_integral">
        <!--短信查询-->
        <div class="text_query">
          <div class="text_query_l">
            <p>短信查询积分</p>
            <p>发帖个人怒又看到人与人一样54537454让角色日晚</p>

          </div>
          <div class="text_query_r">
            <img src="../assets/img/duanxin.png"/>
          </div>
        </div>
        <!--电话查询-->
        <div class="call_query">
          <div class="call_query_l">
            <p>电话查询积分</p>
            <p>发帖个人怒又看到人与人一样54537454让角色日晚gseyryrtdyhdfyhrtdg广东省科技馆日益</p>

          </div>
          <div class="call_query_r">
            <img src="../assets/img/phone.png"/>
          </div>
        </div>
        <!--直接查一查-->
        <div class="check">
          <p>查一查</p>
          <p>付款角色与特给予就是告诉一样看土地容易工具店了解到是哟若跌破移动破人都有人已经到了客家人</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "exchange_center",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>

<style scoped>
  .van-ellipsis{
    color: white
  }
  .block{
    background-color:#efeff4;
  }
</style>
