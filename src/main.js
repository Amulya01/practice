// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// Vue.config.productionTip = false;
// const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
//   new Vue({
//     el: "#app",
//     router,
//     store,
//     render: h => h(App),
//     created() {
//       if (firebaseUser) {
//         store.dispatch("autoSignIn", firebaseUser);
//       }
//     }
//   });
//   unsubscribe();
// });
