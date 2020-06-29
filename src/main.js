import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import AOS from "aos";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
