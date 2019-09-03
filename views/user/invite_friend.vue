<template>
  <div class="block">
    <van-nav-bar title="邀请好友" style="background-color:#39a9ed;"/>
  </div>
</template>

<script>
  export default {
    name: "invite_friend",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    }
  }
</script>
<style scoped lang="less">
  .block{
    background-color:#efeff4;
  }
  .van-ellipsis {
    color: white;
  }

</style>
