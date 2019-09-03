<template>
  <div class="block">
    <van-nav-bar title="分享" left-arrow style="background-color:#39a9ed;">
      <div slot="right">
        <slot name="screen"><img @click="shard('http://app.ryr1688.com/')" class="share_icon" src="../assets/img/code_share.png" alt=""></slot>
      </div>
    </van-nav-bar>
    <div class="content swiper-container">
      <ul class="box swiper-wrapper clearfix">
        <li class="item swiper-slide"><img src="../assets/img/test.jpg" alt=""/></li>
        <li class="item swiper-slide"><img src="../assets/img/test.jpg" alt=""/></li>
        <li class="item swiper-slide"><img src="../assets/img/test.jpg" alt=""/></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Swiper from "swiper"
  import wx from 'weixin-js-sdk'
  import axios from 'axios'
  export default {
    name: "share_code1",
    // beforeCreate () {
    //   document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    // },
    // beforeDestroy () {
    //   document.querySelector('body').removeAttribute('style')
    // },
    data () {
      return {
        details: {},
        appId: '',
        nonceStr: '',
        timestamp: '',
        signature: ''
      }
    },
    mounted() {
      this._initSwiper();
      //const url = window.location.href.split("#")[0];
      // console.log(url)
      axios({
        method: 'post',
        url: '/api/Jssdkwx/getSignPackage',
        data: {
          url: 'http://app.ryr1688.com/'
        }
      }).then(res => {
        console.log(res);
        this.details = res
        this.appId = res.data.data.appId
        this.nonceStr = res.data.data.nonceStr
        this.timestamp = res.data.data.timestamp
        this.signature = res.data.data.signature
      })
    },
    methods: {
      _initSwiper() {
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: 3000,
          speed: 1000,
          autoplayDisableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay
          loop: true,
          centeredSlides: true,
          observer: true,
          observerParents: true,
          slidesPerView: 2,
          pagination: '.swiper-pagination',
          paginationClickable: true,//点击分页器是否会切换
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          onInit: function (swiper) {//回调函数，初始化后执行。
            swiper.slides[2].className = "swiper-slide swiper-slide-active";//第一次打开不要动画
          },
        })
      },
      shard (url){
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: this.appId, // 必填，公众号的唯一标识
          timestamp: this.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.nonceStr, // 必填，生成签名的随机串
          signature: this.signature, // 必填，签名，见附录1
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        }),
        wx.onMenuShareTimeline({
          title:'标题标题', // 分享标题
          link: url+'#/...', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: this.details.coverUrl, // 分享图标
          success () {
            alert('分享朋友圈成功')
            // 用户确认分享后执行的回调函数
          },
          cancel () {
            // 用户取消分享后执行的回调函数
          }
        }),
        wx.onMenuShareAppMessage({
          title: '标题标题', // 分享标题
          desc: '描述描述', // 分享描述
          link: url+'#/...', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: this.details.coverUrl, // 分享图标
          type: 'video', // 分享类型,music、video或link，不填默认为link
          dataUrl: this.details.videoUrl, // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            alert('分享给朋友成功')
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      }
    }
  }
</script>
<style>
  @import '../../node_modules/swiper/dist/css/swiper.css';
</style>

<style scoped lang="less">
  /*.block {*/
  /*  background-color:#efeff4;*/
  /*}*/
  .van-ellipsis {
    color: white;
  }
  .van-nav-bar__arrow{
    color: white !important;
  }
  .share_icon {
    width: 55%;
    margin-bottom: -6px;
    margin-right: -21px;
  }
  .content {
    position: relative;
    padding-top:20px;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    float: left;
    width: 200px;
  }

  ul li img {
    width: 100%;
  }

  /*.more {*/
  /*  position: absolute;*/
  /*  top: 25px;*/
  /*  right: -50px;*/
  /*  padding: 10px 15px;*/
  /*  width: 50px;*/
  /*  height: 115px;*/
  /*  font-size: 15px;*/
  /*  color: #323232;*/
  /*  background: #dedede;*/
  /*  transition: all .5s;*/
  /*  border-top-left-radius: 100px;*/
  /*  border-bottom-left-radius: 100px;*/
  /*}*/

  /*.more.tran {*/
  /*  right: 0px;*/
  /*}*/

  .swiper-slide {
    -webkit-transition: transform 1.0s;
    -moz-transition: transform 1.0s;
    -ms-transition: transform 1.0s;
    -o-transition: transform 1.0s;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }

  .swiper-slide-active, .swiper-slide-duplicate-active {
    -webkit-transform: scale(1);
    transform: scale(1);
  }


</style>
