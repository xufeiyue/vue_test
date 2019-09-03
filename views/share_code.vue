<template>
    <div class="block">
      <van-nav-bar title="分享"style="background-color:#39a9ed;">
        <div slot="right">
          <slot name="screen"><img class="share_icon" src="../assets/img/code_share.png" alt=""></slot>
        </div>
      </van-nav-bar>
      <div class="main_img">
        <img id="show_big_pic" src="../assets/img/img3.jpg" alt="">
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img ref="qqq" onclick="getsrc(this)" src="../assets/img/img1.jpg" alt=""></div>
          <div class="swiper-slide"><img ref="qqq" onclick="getsrc(this)" src="../assets/img/icon_h_13.png" alt=""></div>
          <div class="swiper-slide"><img ref="qqq" onclick="getsrc(this)" src="../assets/img/img3.jpg" alt=""></div>
          <div class="swiper-slide"><img ref="qqq" onclick="getsrc(this)" src="../assets/img/img2.jpg" alt=""></div>
          <div class="swiper-slide"><img ref="qqq" onclick="getsrc(this)" src="../assets/img/login.png" alt=""></div>
        </div>
      </div>
    </div>
</template>
<script>
  import Swiper from "swiper"
  export default {
    name: "share_code",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
    methods:{
      _initSwiper(){
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 5,
          spaceBetween: 30,
          observer:true,
          observerParents:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      },
      getsrc(whichpic){
        var whichpic =this.$refs.qqq;
        var getTag = whichpic.getAttribute("src");
        var getSrc = document.getElementById("show_big_pic");
        getSrc.setAttribute("src",getTag);
      }
    },
    mounted() {
      this._initSwiper();
    }
  }

</script>
<style>
  @import '../../node_modules/swiper/dist/css/swiper.css';
</style>

<style scoped lang="less">
  .block{
    background-color:#efeff4;
  }
  .van-ellipsis{
    color: white
  }
  .share_icon{
    width: 55%;
    margin-bottom: -6px;
    margin-right: -21px;
  }
  .main_img{
    width: 60%;
    margin: 0 auto;
    /*border: 1px solid red;*/
    margin-top:20px;
    margin-bottom:20px;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  /*一页多个元素轮播图*/

  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
    }
  }

</style>
