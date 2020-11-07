import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuex from 'vuex'

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.use(Vuex)

Vue.config.productionTip = false;

//Vuex
const store = new Vuex.Store({
  state: {
    FirstCountryName: undefined,
    FirstCountryInformation: null
  },
  mutations: {
    changeCountryName(state, country) {
      state.FirstCountryName = country;
    },
    countryInformation(state, countryInfo) {
      state.FirstCountryInformation = countryInfo
    },
  }
  //At this point we don't have to use "Getters" because the project is quite simple
})

new Vue({
  render: function (h) {
    return h(App);
  },
  store
}).$mount("#app");
