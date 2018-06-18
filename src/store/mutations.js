export default {
  SET_INFO: (state, payload) => {
    state.info = payload.info;
  },
  GET_DATA:(state) => {
    state.dataList = [1,2,3,4,5,6];
  }
};