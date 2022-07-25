import Vue from "vue";
import App from "./paged/belstar/policy/index.vue";
import store from "./store";
import mixin from "./mixins/index.js";
import axios from "axios";

import "./assets/css/TailWind.css";

//引入echarts
var echarts = require("echarts");
Vue.prototype.$axios = axios;

Vue.prototype.$echarts = echarts;
// Vue.prototype.$da = da;
Vue.config.productionTip = false;
Vue.mixin(mixin);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
