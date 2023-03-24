import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    devices: [],
  },
  getters: {
    DEVICES(state) {
      return state.devices;
    },
    IPADS(state) {
      return state.devices;
    },
  },
  mutations: {
    SET_DEVICES_TO_STATE: (state, devices) => {
      state.devices = devices;
    },
    SET_IPADS_TO_STATE: (state, devices) => {
      state.devices = devices;
    },
  },
  actions: {
    GET_DEVICES_FROM_API({ commit }) {
      return axios("http://localhost:3000/Iphone", {
        method: "GET",
      }).then((devices) => {
        commit("SET_DEVICES_TO_STATE", devices.data);
        return devices;
      });
    },
    GET_IPADS_FROM_API({ commit }) {
      return axios("http://localhost:3000/iPads", {
        method: "GET",
      }).then((devices) => {
        commit("SET_IPADS_TO_STATE", devices.data);
        return devices;
      });
    },
  },
  modules: {},
});
