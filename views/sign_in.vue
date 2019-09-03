<template>
  <div class="block">
    <van-nav-bar title="签到" style="background-color:#39a9ed;"/>
    <div class="sign_in_content">
      <div class="click_sign_in">点我签到</div>
      <div id="singIn"></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    name: "sign_in"
  }

  var calUtil = {
    /*
                获取每个月的总天数
            */
    getDaysOfMonth: function (_YEAR, _MONTH) {
      var date = new Date(_YEAR, _MONTH, 0);
      var days = date.getDate();
      return days;
    },
    /*
                构建当前日历
            */
    bulidCal: function (_YEAR, _MONTH) {
      /* 初始化日历 */
      var signArray = new Array();
      signArray[0] = new Array(7);
      signArray[1] = new Array(7);
      signArray[2] = new Array(7);
      signArray[3] = new Array(7);
      signArray[4] = new Array(7);
      signArray[5] = new Array(7);
      signArray[6] = new Array(7);
      signArray[0][0] = "一";
      signArray[0][1] = "二";
      signArray[0][2] = "三";
      signArray[0][3] = "四";
      signArray[0][4] = "五";
      signArray[0][5] = "六";
      signArray[0][6] = "日";
      var dCalDate = new Date(_YEAR, _MONTH - 1, 0);
      var iDayOfFirst = dCalDate.getDay();
      var iDaysInMonth = calUtil.getDaysOfMonth(_YEAR, _MONTH);
      var iVarDate = 1;
      var d, w;
      for (d = iDayOfFirst; d < 7; d++) {
        signArray[1][d] = iVarDate;
        iVarDate++;
      }
      for (w = 2; w < 7; w++) {
        for (d = 0; d < 7; d++) {
          if (iVarDate <= iDaysInMonth) {
            signArray[w][d] = iVarDate;
            iVarDate++;
          }
        }
      }
      return signArray;
    },
    /*已经签到的 显示高亮*/
    ifHassSigned: function (signList, day) {
      var signed = false;
      for (var i = 0; i < signList.length; i++) {
        var _date = new Date(signList[i]).getDate();
        if (_date == day) {
          signed = true;
        }
      }
      return signed;
    },
    /*
渲染到页面
            */
    drawCal: function (_YEAR, _MONTH, signList) {
      var currentYearMonth = _YEAR + "年" + _MONTH + "月";
      var myMonth = calUtil.bulidCal(_YEAR, _MONTH);
      var _RenderDate = new Array();
      _RenderDate.push('<div class="sinBox">');
      _RenderDate.push('<p class="singDate">' + '<span class="continu_sign_in">' + "您已累计签到20天" + '</span>' + '<span class="current_date">' + currentYearMonth + '</span>' + '</p>');
      _RenderDate.push('<div>');
      _RenderDate.push('<span>' + myMonth[0][0] + '</span>');
      _RenderDate.push('<span>' + myMonth[0][1] + '</span>');
      _RenderDate.push('<span>' + myMonth[0][2] + '</span>');
      _RenderDate.push('<span>' + myMonth[0][3] + '</span>');
      _RenderDate.push('<span>' + myMonth[0][4] + '</span>');
      _RenderDate.push('<span>' + myMonth[0][5] + '</span>');
      _RenderDate.push('<span>' + myMonth[0][6] + '</span>');
      _RenderDate.push('</div>');
      var d, w;
      for (var w = 1; w < 7; w++) {
        _RenderDate.push('<div>');
        for (var d = 0; d < 7; d++) {
          var ifHasSigned = calUtil.ifHassSigned(signList, myMonth[w][d]);
          if (ifHasSigned) {
            _RenderDate.push('<span class="signSelect" weekday=' + myMonth[w][d] + '>' + (!isNaN(myMonth[w][d]) ? myMonth[w][d] :
              " ") + '</span>' + '<img src="./../../img/对号.png"/>');
          } else if (myMonth[w][d] < (new Date().getDate())) {
            _RenderDate.push('<span class="noSign" weekday=' + myMonth[w][d] + '>' + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") +
              '</span>' + '<img src="./../../img/错误.png"/>');
          } else if (myMonth[w][d] == (new Date().getDate())) {
            _RenderDate.push('<span class="nowSign" weekday=' + myMonth[w][d] + '>' + (!isNaN(myMonth[w][d]) ? myMonth[w][d] :
              " ") + '</span>' + '<img class="nowSign_img" style="width:8%;margin-top:3px;margin-left:-10%;transform: rotate(45deg);" src="./../../img/圆圈.png"/>');
          } else {
            _RenderDate.push('<span weekday=' + myMonth[w][d] + '>' + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + '</span>');
          }
        }
        _RenderDate.push('</div>');
      }
      _RenderDate.push('</div>');
      return _RenderDate.join('');
    }
  }
  var signList = ['2018/10/20', '2018/10/15'];
  var current = new Date();
  var str = calUtil.drawCal(current.getFullYear(), current.getMonth() + 1, signList);
  console.log(str)
  $("#singIn").append(str);


  /*
            点击签到
        */
  $(function () {
    $(".click_sign_in").click(function () {
      var signDays = $(".sinBox div");
      for (var r = 0; r < signDays.length; r++) {
        for (var y = 0; y < signDays[r].children.length; y++) {
          if ((new Date().getDate()) == signDays[r].children[y].getAttribute("weekday")) {
            if (signDays[r].children[y].getAttribute("class") == "signSelect") {
              alert("您已经签到了，无需多次签到！");
            } else {
              $(".nowSign_img").attr("src", "./../../img/对号.png");
              $(".nowSign_img").css("width", "6%");
              $(".nowSign_img").css("margin-top", "23px");
              $(".nowSign_img").css("margin-left", "-9%");
              $(".nowSign_img").css("transform", "none");
              signDays[r].children[y].classList.remove("nowSign");
              signDays[r].children[y].classList.add("signSelect");
              alert("签到成功");
            }
          }
        }
      }
    });
  })

</script>

<style scoped lang="less">
  .van-ellipsis {
    color: white
  }

  .sign_in_content {
    background: url(./../assets/img/sign_in_banner.png) no-repeat;
    background-size: cover;
    box-shadow: none !important;
    position: absolute;
    width: 100%;
    height: 85%;
    background-size: 100% 100%;
  }


  .calendar {
    position: absolute;
    left: 50%;
    top: 200px;
    width: 92%;
    margin-left: -46%;
    padding: 10px 15px;
    font-size: 13px;
    color: #333;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 60px;
    overflow: hidden;
  }


  /*日历日历*/

  #singIn {
    width: auto;
    /*margin: 50px auto 0;*/
    /*padding: 10px;*/
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 150px;
    width: 92%;
    margin-left: -46%;
    font-size: 13px;
    color: #333;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 60px;
    overflow: hidden;
  }

  .singTit {
    background: rgb(7, 60, 235);
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-radius: 5px;
    height: 120px;
    overflow: hidden;
    width: 400px;
    margin: 0 auto 15px;
  }

  .singTit span {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: rgb(7, 60, 235);
    line-height: 60px;
    margin: 30px auto 0;
    background: #fff;
    display: block;
    cursor: pointer;
  }

  .sinBox {
    width: 100%;
    margin: 0 auto;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .singDate {
    width: 100%;
    border-bottom: 1px solid #DFDFDF;
    padding: 5px 8px;
    background-color: #DFDFDF;
  }

  .sinBox div {
    text-align: center;
  }

  .sinBox span {
    width: 10%;
    display: inline-block;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .sinBox span:nth-child(7n+1) {
    margin-left: 0;
  }

  /*.sinBox span.noSign {
      border-radius: 100%;
      color: #6b6b6b;
  }

  .sinBox span.nowSign {
      background: #44bdf9;
      border-radius: 100%;
      color: #fff;
  }*/
  /*颜色形式*/
  /*.sinBox span.signSelect {
      background: #ff527c;
      border-radius: 100%;
      color: #fff;
  }*/

  /*图片形式*/
  /*////////////*/
  .sinBox div {
    overflow: hidden;
  }

  .sinBox img {
    width: 6%;
    float: left;
    margin-top: 23px;
    margin-left: -9%;
  }

  .sinBox span {
    width: 13%;
    float: left;
    margin-left: 4px;
  }

  .singDate {
    width: 100%;
    padding: 22px 8px;
  }

  .continu_sign_in {
    line-height: 5px !important;
  }

  .current_date {
    line-height: 5px !important;
  }

  /*////////////*/
  .click_sign_in {
    width: 55px;
    padding: 7px;
    background-color: #ae4aef;
    text-align: center;
    position: absolute;
    right: 10%;
    top: 20%;
    font-size: 14px;
    color: white;
    border-radius: 27px;
    z-index: 1;
  }

  /*.activity_rules{
      width: 70px;
      font-size: 14px;
      padding: 5px;
      background-color:#ec1c1c;
      position: absolute;
      right: 10%;
      top:0;
      color: white;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
  }*/
  .continu_sign_in {
    width: auto !important;
    font-size: 14px !important;
    color: #585858;
  }

  .current_date {
    width: auto !important;
    font-size: 18px !important;
    color: #000000;
  }
</style>
