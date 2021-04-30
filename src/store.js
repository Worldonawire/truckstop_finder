import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import usStateCoords from "../src/utils/stateCoords";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    zoomOnStateToggle: false,
    clientLocation: "",
    center: { lat: 39.5, lng: -98.35 },
    zoom: 5,
  },

  mutations: {
    setLocation(state, payload) {
      state.clientLocation = payload;
    },

    setLocations(state, locations) {
      state.locations = locations;
    },

    zoomOnState(state) {
      state.center = usStateCoords[_.capitalize(state.clientLocation)];
      state.zoom = 7;
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
