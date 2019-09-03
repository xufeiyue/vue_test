<template>
    <div class="block">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image.img_img"/>
            </van-swipe-item>
        </van-swipe>
        <van-swipe :touchable="true" indicator-color="#1989fa" id="van_swipe">
            <van-swipe-item class="van-swipe-item">
                <div class="grid_list">
                    <li title="1">
                        <div class="grid_img">
                            <img src="../assets/img/限时秒杀.gif"/>
                        </div>
                        <p>限时秒杀</p>
                    </li>
                    <li title="2">
                        <div class="grid_img">
                            <img src="../assets/img/我要办卡.png"/>
                        </div>
                        <p>我要办卡</p>
                    </li>
                    <li title="3">
                        <div class="grid_img">
                            <img src="../assets/img/借钱花.png"/>
                        </div>
                        <p>借钱花</p>
                    </li>
                    <li title="4">
                        <div class="grid_img">
                            <img src="../assets/img/积分好兑.png"/>
                        </div>
                        <p>积分好兑</p>
                    </li>
                    <li title="5">
                        <div class="grid_img">
                            <img src="../assets/img/测信用.png"/>
                        </div>
                        <p>测信用</p>
                    </li>
                    <li title="6">
                        <div class="grid_img">
                            <img src="../assets/img/社区商城.png"/>
                        </div>
                        <p>社区商城</p>
                    </li>

                    <li title="7">
                        <div class="grid_img">
                            <img src="../assets/img/便民生活.png"/>
                        </div>
                        <p>便民生活</p>
                    </li>
                    <li title="8">
                        <div class="grid_img">
                            <img src="../assets/img/今日活动.png"/>
                        </div>
                        <p>今日活动</p>
                    </li>
                    <li title="9">
                        <div class="grid_img">
                            <img src="../assets/img/e币赚.png"/>
                        </div>
                        <p>e币赚</p>
                    </li>
                    <li title="10">
                        <div class="grid_img">
                            <img src="../assets/img/邀请好礼.png"/>
                        </div>
                        <p>邀请好礼</p>
                    </li>
                    <div class="clear"></div>
                </div>
            </van-swipe-item>
            <van-swipe-item class="van-swipe-item">
                <div class="grid_list1">
                    <li title="1">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>哈哈哈</p>
                    </li>
                    <li title="2">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>智能代还</p>
                    </li>
                    <li title="3">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>一键收款</p>
                    </li>
                    <li title="4">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>会员升级</p>
                    </li>
                    <li title="5">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>在线办卡</p>
                    </li>
                    <li title="6">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>我要贷款</p>
                    </li>

                    <li title="7">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>积分兑换</p>
                    </li>
                    <li title="8">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>卡片管理</p>
                    </li>
                    <li title="9">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>信用测评</p>
                    </li>
                    <li title="10">
                        <div class="grid_img">
                            <img src="../assets/img/icon_h_6.png"/>
                        </div>
                        <p>便民生活</p>
                    </li>
                    <div class="clear"></div>
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="gif" style="height:100px">
            <img src="../assets/img/icon_h_13.png" width="100%" height="100%" style="display:block"/>
        </div>
        <div class="main_content1">
          <div class="main_content1_l">
                <div>
                    <img src="../assets/img/今日活动板块.png" width="80%" height="100%" style="display:block"/>
                </div>
                <div>
                    <img src="../assets/img/我要办卡板块.png" width="80%" height="100%" style="display:block"/>
                </div>
                <div>
                    <img src="../assets/img/积分好兑板块.png" width="80%" height="100%" style="display:block"/>
                </div>
            </div>
            <div class="main_content1_r">
                <div>
                    <img src="../assets/img/e币赚板块.png" width="80%" height="100%" style="display:block"/>
                </div>
                <div>
                    <img src="../assets/img/借钱花板块.png" width="80%" height="100%" style="display:block"/>
                </div>
                <div>
                    <img src="../assets/img/测信用板块.png" width="80%" height="100%" style="display:block"/>
                </div>
            </div>
        </div>
        <div class="main_content2">
            <p>便民生活</p>
            <!--            <p><img style="width: 150px" src="../assets/img/life_title.png" alt=""></p>-->
            <van-row type="flex" justify="space-around">
                <van-col span="6"><img src="../assets/img/life_icon1.png" alt=""></van-col>
                <van-col span="6"><img src="../assets/img/life_icon1.png" alt=""></van-col>
                <van-col span="6"><img src="../assets/img/life_icon1.png" alt=""></van-col>
                <van-col span="6"><img src="../assets/img/life_icon1.png" alt=""></van-col>
            </van-row>
        </div>
        <div class="main_content3">
<!--            <p>卡片管理</p>-->
            <img src="../assets/img/icon_h_13.png" width="100%" height="100%" style="display:block"/>
        </div>
        <div class="main_content4">
<!--            <p>e融讲堂</p>-->
            <!--            <p><img style="width: 150px" src="../assets/img/erong_class.png" alt=""></p>-->
            <img src="../assets/img/icon_h_13.png" width="100%" height="100%" style="display:block"/>
        </div>
        <div class="sign_in_icon" @click="show = true">签到</div>
        <van-popup v-model="show" position="right" :overlay="false">
            <van-button type="primary" @click="show = false">关闭</van-button>
        </van-popup>
        <tabbar></tabbar>
    </div>
</template>
<script>
    import axios from 'axios'
    import tabbar from '@/components/tabbar.vue'

    // export default {
    //     name: 'index',
    //     components: {
    //         tabbar
    //     },
    //     data() {
    //         return {
    //             images: [{
    //                 src: require('../assets/img/img1.jpg')
    //
    //             },
    //                 {
    //                     src: require('../assets/img/img2.jpg')
    //
    //                 },
    //                 {
    //                     src: require('../assets/img/img3.jpg')
    //                 }
    //             ],
    //             show: false
    //         }
    //     }
    // }

    export default {
      name: 'index',
      components: {
        tabbar
      },
      data() {
        return {
          images:[],
          show: false
        }
      },
      created() {
        this.setbannerApi();
      },
      methods:{
        setbannerApi: function() {
          axios({
            method: 'get',
            url: '/api/Img/index',
            params: {
              type: "2"
            }
          }).then(res => {
            console.log(res);
              for (var i = 0; i < res.data.data.length; i++) {
                console.log(this.images)
                console.log(res.data.data[i].img_img)
                //this.images.push(res.data[i].img_img)
                this.images = res.data.data;

              }
          });
        },
      }
    }



</script>
<!--修改vant的默认样式-->
<style>
    @import './../assets/css/ele.css';
</style>

<style lang="less" scoped>
    .van-swipe {
        cursor: pointer;

        &-item {
            color: white;
            font-size: 20px;
            line-height: 150px;
            text-align: center;

            &:nth-child(even) {
                background-color: #39a9ed;
            }

            &:nth-child(odd) {
                background-color: #66c6f2;
            }
        }

        img {
            display: block;
            box-sizing: border-box;
            width: 100%;
            height:180px;
            /*padding: 30px 60px;*/
            background-color: white;
            pointer-events: none;
        }
    }

    &--vertical {
        height: 200px;

        .van-swipe-item {
            line-height: 200px;
        }
    }

    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        color: white;
        font-size: 12px;
        background: rgba(0, 0, 0, .1);
    }

    /*弹出层*/
    .van-button {
        margin-left: 15px;
    }

    .van-popup {
        box-sizing: border-box;
        padding: 20px;

        &--center {
            width: 60%;
        }

        &--bottom {
            width: 100%;
            padding: 0;
        }

        &--top {
            width: 100%;
            color:white;
            line-height: 20px;
            background-color: rgba(0, 0, 0, 0.8);
        }

        &--left,
        &--right {
            width: 100%;
            height: 100%;
        }
    }
</style>
