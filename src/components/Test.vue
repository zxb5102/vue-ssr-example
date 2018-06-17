<template>
    <div>
    <h1 class="msg">
        {{msg}}
        {{testDataFetch}}
    </h1>
    </div>   
</template>
<script>
export default {
  asyncData({ store }) {
    return store.dispatch("getData");
  },
  data() {
    msg: "test";
  },
  computed: {
    testDataFetch() {
      return this.$store.state.num;
    }
  }
};
</script>
<style lang="less">
.msg{
    color:red;
}
</style>



