<template>
    <div>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="label-o" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="profile">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:0
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>