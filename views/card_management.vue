<template>
    <div class="block">
        <van-nav-bar title="标题" style="background-color:#39a9ed;"/>
        <van-row type="flex" justify="space-around" style="margin-top:36px">
            <van-col span="6"><van-button class="van-button" type="info">帮你还</van-button></van-col>
            <van-col span="6"><van-button class="van-button" type="info">收银台</van-button></van-col>
            <van-col span="6"><van-button class="van-button" type="info">卡测评</van-button></van-col>
        </van-row>
        <div class="card_list">
            <div class="card_list_item">
                <img src="../assets/img/img1.jpg" />
                <p class="card_msg">
                    <span>马**</span>
                    <span>**** **** **** 7450</span>
                </p>
                <div class="card_list_date">
                    <div class="card_list_l">
                        <span>账单日</span>
                        <span>5日</span>
                    </div>
                    <div class="card_list_r">
                        <span>还款日</span>
                        <span>7日</span>
                    </div>
                </div>
                <div class="reserve">
                  <span>预约列表</span>
                  <span>预约还款</span>
                </div>
            </div>
        </div>
        <div class="no_info" style="display: none">
            <img src="../assets/img/no_creditbill_icon.png" />
            <p>没有相关数据</p>
        </div>
        <div class="add_card" style="display: none">
            <van-icon name="plus" size="26px"/>
            <span>添加信用卡</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card_management"
    }
</script>

<style scoped lang="less">
    .van-button{
        height: 38px;
        line-height: 38px;
        border-radius: 30px;
    }
    .van-ellipsis{
        color: white
    }
    .van-icon-plus{
        font-size: 26px;
        float: left;
    }

</style>
