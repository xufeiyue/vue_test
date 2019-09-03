<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
  export default{
    created(){
      //在页面刷新时将vuex里的信息保存到localStorage里
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
      })
      //在页面加载时读取localStorage里的状态信息
      localStorage.getItem("messageStore") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));
    }
  }
</script>
<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #fff;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
