import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    zoomOnStateToggle: false,
    clientLocation: "",
  },

  mutations: {
    setLocation(state, payload) {
      state.clientLocation = payload;
      console.log("THIS IS THE CLIENTS STATE", state.clientLocation);
    },

    setLocations(state, locations) {
      state.locations = locations;
    },

    zoomOnState(state) {
      state.zoomOnStateToggle = true;
    },
  },

  actions: {
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        const markers = locations.map((location) => ({
          position: {
            lat: location.latitude,
            lng: location.longitude,
          },
          key: location.name,
          defaultAnimation: 2,
        }));
        commit("setLocations", markers);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
