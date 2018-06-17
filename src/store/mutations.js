// import Vue from 'vue'

export default {
    getData:(state)=>{
      // console.log(333);
      // console.log()
      // console.log('111111111111111111111111111111111111111111111111111111111111111');
      state.num =1;
      state.msg = 'test';
            // return {num:1,msg:'test'}
    }
  // SET_ACTIVE_TYPE: (state, { type }) => {
  //   state.activeType = type
  // },

  // SET_LIST: (state, { type, ids }) => {
  //   state.lists[type] = ids
  // },

  // SET_ITEMS: (state, { items }) => {
  //   items.forEach(item => {
  //     if (item) {
  //       Vue.set(state.items, item.id, item)
  //     }
  //   })
  // },

  // SET_USER: (state, { id, user }) => {
  //   Vue.set(state.users, id, user || false) /* false means user not found */
  // }
}
