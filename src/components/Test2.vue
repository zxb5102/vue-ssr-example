<template>
    <div>
        <h1 class="msg_">
            test2.vue page
        </h1>
        <ul>
            <li v-for="(item,dex) in dataList" :key="dex">
                <span>{{item}}</span>
            </li>
        </ul>
    </div>   
</template>
<script>
export default {
  asyncData({ store }) {
    store.dispatch("GET_DATA");
  },
  computed: {
    dataList() {
      return this.$store.getters.dataList;
    }
  }
};
</script>
<style lang="stylus">
.msg_ {
    color: blue;
}
</style>



