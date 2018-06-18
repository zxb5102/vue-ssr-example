<template>
    <div>
    <h1 class="msg">
        {{msg}}
    </h1>
    <h1 class="msg">
        {{testDataFetch}}
    </h1>
    </div>   
</template>
<script>
export default {
  asyncData({ store }) {
    store.dispatch("SET_INFO", { info: "test info" });
  },
  data() {
    return {
      msg: "test msg"
    };
  },
  computed: {
    testDataFetch() {
      return this.$store.state.info;
    }
  }
};
</script>
<style lang="less">
.msg {
  color: red;
}
</style>



