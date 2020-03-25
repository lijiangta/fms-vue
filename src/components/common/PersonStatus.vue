<template>
  <div class="person_status">
    <div>{{username}}{{status}}</div>
    <div>退 出</div>
  </div>
</template>

<script>
    export default {
        name: "PersonStatus",
        props: {
            username: {
                type: String,
                default(){
                    return "dxs"
                }
            },
            status: {
                type: String,
                default(){
                    return "离线"
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
  .person_status {

  }
</style>
