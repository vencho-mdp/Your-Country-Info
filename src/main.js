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
    FirstCountryInformation: undefined,
    SecondCountryInformation: undefined,
    SecondCountryName: undefined
  },
  mutations: {
    changeFirstCountryName(state, country) {
      state.FirstCountryName = country;
    },
    changeFirstCountryInformation(state, countryInfo) {
      state.FirstCountryInformation = countryInfo
    },
    changeSecondCountryInformation(state, countryInfo) {
      state.SecondCountryInformation = countryInfo
    },
    changeSecondCountryName(state, country) {
      state.SecondCountryName = country
    },
  }
  //At this point we don't have to use "Getters" because the project is quite simple
})

//Directives
Vue.directive('bigger', {
  update(el, binding) {
    if (store.state.FirstCountryInformation && store.state.SecondCountryInformation) {
      let firstCountryData = Number(store.state.FirstCountryInformation[binding.value.search].replace(/[^0-9]/g, ''))
      let secondCountryData = Number(store.state.SecondCountryInformation[binding.value.search].replace(/[^0-9]/g, ''))

      let element = Number(store.state[binding.value.numberOfCountry][binding.value.search].replace(/[^0-9]/g, ''))

      if (element > secondCountryData) {
        el.style.color = "rgb(40, 104, 203)"
      } else if (element > firstCountryData) {
        el.style.color = "rgb(40, 104, 203)"
      } else {
        el.style.color = "rgb(0, 64, 133)"
      }
    }
  }
})

new Vue({
  render: function (h) {
    return h(App);
  },
  store
}).$mount("#app");


