<template>
  <el-container>
    <el-header>
      <nav-menu></nav-menu>
      <person-status
        :username = "username"
        :status = "status"
      ></person-status>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
  import NavMenu from "@/components/common/NavMenu";
  import PersonStatus from "@/components/common/PersonStatus";
    export default {
        name: "IndexView",
        date() {
            return {
                username: "",
                status: ""
            }
        },
        components:{
            NavMenu,
            PersonStatus
        },
        created(){
            this.setUsernameAndStatus("dxs", "在线");
        },
        methods: {
            setUsernameAndStatus(username, status){
              this.username = username;
              this.status = status;
            }
        }
    }
</script>

<style scoped>

</style>
