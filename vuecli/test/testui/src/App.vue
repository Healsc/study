<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">我的</router-link> |
      <router-link to="/test1">test1</router-link> |
      <router-link :to="{name:'test2',params:{name:'zs',age:'20'}}">test2</router-link>|
      <router-link to="/test3/ls/30">test3</router-link> |
      <router-link to="/home">重定向/返回首页</router-link> |
      <router-link to="/heal">别名</router-link>
      <button @click="goBack">back</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
