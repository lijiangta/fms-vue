<template>
  <div>
    <nav-menu></nav-menu>
    <search-bar></search-bar>
    <router-view/>
  </div>
</template>

<script>
    import NavMenu from "@components/common/NavMenu";
    import SearchBar from "@components/common/SearchBar";
    export default {
        name: 'HelloWorld',
        components:{SearchBar, NavMenu},
        data () {
          return {
            msg: 'Welcome to Your Vue.js App'
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
