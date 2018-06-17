<template>
    <div>
    <h1 class="msg2">
        msg33
        <!-- {{msg}}<br>
        {{testDataFetch}} -->
    </h1>
    </div>   
</template>
<script>
export default {
    // created(){
    //     console.log('333333');
    // },
  asyncData({ store }) {
    //   console.log(222);
    // console.log(store.state, 1);
    store.dispatch("getData");
    // console.log(store.state, 2);
  },
//   data() {
//     return {
//       msg: "test"
//     };
//   },
//   computed: {
//     testDataFetch() {
//         // console.log(22);
//       return this.$store.state.num;
//     }
//   }
};
</script>
<style lang="stylus">
.msg {
    color: red;
}
</style>



