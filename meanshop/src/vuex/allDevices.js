import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

let allDevices = new Vuex.Store({
  state: {
    devices: [],
  },
  mutations: {},
  actions: {
    GET_DEVICES_FROM_API({ commit }) {
      return Axios("", {
        commit,
      });
    },
  },
  getters: {
    DEVICES(state) {
      return state.devices;
    },
  },
});

export default allDevices;
