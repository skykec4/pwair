import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
// import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

Vue.use(Vuetify, {
  iconfont: "md" // 'md' || 'mdi' || 'fa' || 'fa4'
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
