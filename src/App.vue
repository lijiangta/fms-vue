<template>
  <div id="app">
    <!--<img src="./assets/icon-microservices.svg">
    <h2>微服务架构深得人心</h2>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
img {
  width: 200px;
  height: 200px;
}
</style>
