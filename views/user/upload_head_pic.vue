<template>
    <div class="block">
      <van-nav-bar title="修改头像" style="background-color:#39a9ed;"/>
      <div class="head_pic">
        <img src="../../assets/img/avater_image.png" alt="">
      </div>
      <div class="upload_btn">
        上传
      </div>
    </div>
</template>

<script>
    export default {
        name: "upload_head_pic",
        beforeCreate () {
          document.querySelector('body').setAttribute('style', 'background-color:#303030')
        },
        beforeDestroy () {
          document.querySelector('body').removeAttribute('style')
        }
    }
</script>
<style scoped lang="less">
  .block{
    background-color:#303030;
  }
  .van-ellipsis {
    color: white
  }
  .head_pic{
    width:50%;
    margin: 0 auto;
    img{
      width: 100%;
      margin-top: 200px;
    }
  }
  .upload_btn{
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
