<!--<template>-->
<!--  <van-tabbar v-model="active" class="active_tab">-->
<!--    <van-tabbar-item>-->
<!--      <router-link to="/home">-->
<!--        <span>首页</span>-->
<!--      </router-link>-->
<!--      <template slot="icon" slot-scope="props">-->
<!--        <img :src="props.active ? home_icon.active : home_icon.normal"/>-->
<!--      </template>-->
<!--    </van-tabbar-item>-->

<!--    <van-tabbar-item>-->
<!--      <router-link to="/category">-->
<!--        <span>卡管家</span>-->
<!--      </router-link>-->
<!--      <template slot="icon" slot-scope="props">-->
<!--        <img :src="props.active ? category_icon.active : category_icon.normal"/>-->
<!--      </template>-->
<!--    </van-tabbar-item>-->

<!--    <van-tabbar-item>-->
<!--      <router-link to="/message">-->
<!--        <span>帮助</span>-->
<!--      </router-link>-->
<!--      <template slot="icon" slot-scope="props">-->
<!--        <img :src="props.active ? message_icon.active : message_icon.normal"/>-->
<!--      </template>-->
<!--    </van-tabbar-item>-->

<!--    <van-tabbar-item>-->
<!--      <router-link to="../user/user_index">-->
<!--        <span>我的</span>-->
<!--      </router-link>-->
<!--      <template slot="icon" slot-scope="props">-->
<!--        <img :src="props.active ? cart_icon.active : cart_icon.normal"/>-->
<!--      </template>-->
<!--    </van-tabbar-item>-->
<!--  </van-tabbar>-->

<!--</template>-->
<!--<script>-->
<!--  export default {-->
<!--    name: 'tabbar',-->
<!--    data() {-->
<!--      return {-->
<!--        active: 0,-->
<!--        home_icon: {-->
<!--          normal: require('./../assets/img/tab_shouye_1.png'),-->
<!--          active: require('./../assets/img/tab_shouye_1_1.png')-->
<!--        },-->
<!--        category_icon: {-->
<!--          normal: require('./../assets/img/tab_cardm_1.png'),-->
<!--          active: require('./../assets/img/tab_cardm_1_1.png')-->
<!--        },-->
<!--        message_icon: {-->
<!--          normal: require('./../assets/img/tab_bz_1.png'),-->
<!--          active: require('./../assets/img/tab_bz_1_1.png')-->
<!--        },-->
<!--        cart_icon: {-->
<!--          normal: require('./../assets/img/tab_wode_1.png'),-->
<!--          active: require('./../assets/img/tab_wode_1_1.png')-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->
<!--<style lang="less" scoped>-->
<!--  .van-tabbar-item&#45;&#45;active {-->
<!--    color:#1989fa;-->
<!--  }-->
<!--</style>-->



<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="item.name">
        <span>{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active:0,
        tabbars:[
          {
            name: "/",
            title: "首页",
            normal: require("./../assets/img/tab_shouye_1.png"),
            active: require("./../assets/img/tab_shouye_1_1.png")
          },
          {
            name: "reimbursement_means",
            title: "卡管家",
            normal: require("./../assets/img/tab_cardm_1.png"),
            active: require("./../assets/img/tab_cardm_1_1.png")
          },
          {
            name: "cart",
            title: "帮助",
            normal: require("./../assets/img/tab_bz_1.png"),
            active: require("./../assets/img/tab_bz_1_1.png")
          },
          {
            name: "../user/user_index",
            title: "我的",
            normal: require("./../assets/img/tab_wode_1.png"),
            active: require("./../assets/img/tab_wode_1_1.png")
          }
        ]
      }
    },
    created(){
      this.upactive();
    },
    updated(){
      this.upactive();
    },
    methods:{
      upactive(){
        this.nowPath=this.$route.path;
        //vue提供的方法
        if(this.nowPath=="/"){
          this.active=0
        }else if(this.nowPath=="/reimbursement_means"){
          this.active=1
        }else if(this.nowPath=="/Myclass"){
          this.active=2
        }else if(this.nowPath=="/user/user_index"){
          this.active=3
        }
      }
    },
  }
</script>
<style lang="less" scoped>
  .van-tabbar-item--active {
    color:#1989fa;
  }
</style>











<!--<template>-->
<!--    <van-tabbar v-model="active">-->
<!--        <van-tabbar-item>-->
<!--            <span>首页</span>-->
<!--            <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">-->
<!--        </van-tabbar-item>-->
<!--        <van-tabbar-item dot>-->
<!--            <span>消息</span>-->
<!--            <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">-->
<!--        </van-tabbar-item>-->
<!--        <van-tabbar-item>-->
<!--            <span>卡管家</span>-->
<!--            <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">-->
<!--        </van-tabbar-item>-->
<!--        <van-tabbar-item>-->
<!--            <span>帮助</span>-->
<!--            <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">-->
<!--        </van-tabbar-item>-->
<!--      <van-tabbar-item to="/user/user_index">-->
<!--        <span>我的</span>-->
<!--        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">-->
<!--      </van-tabbar-item>-->
<!--    </van-tabbar>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "tabbar",-->
<!--        data() {-->
<!--            return {-->
<!--                active: 0,-->
<!--                icon: {-->
<!--                    normal: require("../assets/img/nav_1.png"),-->
<!--                    active: require("../assets/img/nav_1_1.png")-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    .van-tabbar {-->
<!--        position: relative;-->
<!--        &-item {-->
<!--            cursor: pointer;-->
<!--        }-->
<!--    }-->
<!--</style>-->
