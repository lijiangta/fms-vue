<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
  import NavMenu from "../components/common/NavMenu";
    export default {
        name: "IndexView",
        components:{NavMenu}
    }
</script>

<style scoped>

</style>
