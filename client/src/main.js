import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import vuetify from "./plugins/vuetify";
=======
import vuetify from './plugins/vuetify';
import store from './store'
>>>>>>> 6271190508c54a1d115c121e0dee5739983c96f7

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
