import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderNumber: "",
    animation: false,
    isPaged: false
  },
  mutations: {
    setOrderNumber(state, val) {
      state.orderNumber = val;
    },
    setAnimation(state, val) {
      state.animation = val;
    },
    setPagedStatus(state, val) {
      state.isPaged = val;
    }
  },
  actions: {},
  modules: {}
});
