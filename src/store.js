import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {usStateCoords, stateInitials} from "../src/utils/stateCoords";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    zoomOnStateToggle: false,
    clientLocation: "",
    availableTruckstops: [], 
    center: { lat: 39.5, lng: -98.35 },
    zoom: 5,
    filterPage: false,
    detailsPage: false,
    chosenTruckstop: {}
  },

  mutations: {
    setLocation(state, payload) {
      state.clientLocation = stateInitials[payload];
    },

    setLocations(state, locations) {
      state.locations = locations;
    },
         
    zoomOnState(state) {
      state.center = usStateCoords[state.clientLocation];
      state.zoom = 7;
      state.zoomOnStateToggle = true;
    },
    filterDetails(state) {
      state.filterPage = true;
    },
    detailsPageCall(state, payload) {
      state.chosenTruckstop = payload
      state.detailsPage = true;
    },
    truckStopsBack(state){
      console.log("iajsdpoijaspo")
      state.locations = [];
      state.zoomOnStateToggle = false;
      state.clientLocation = "";
      state.availableTruckstops = [];
      state.center = { lat: 39.5, lng: -98.35 };
      state.zoom = 5;
      state.filterPage = false;
      state.detailsPage = false;
      state.chosenTruckstop = {};
    },
    
  },

  actions: {
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get(`/api/?state=${this.state.clientLocation}`); // ES6 destructuring & aliasing
        const markers = locations.map((location) => ({
          position: {
            lat: location.latitude,
            lng: location.longitude,
          },
          name: location.name,
          address: location.address,
          state: location.state,
          city: location.city,
          amenities: location.amenities,
          payments: location.payments,
          restaurants: location.restaurants,
          type: location.type,
          defaultAnimation: 2,
        }));
        commit("setLocations", markers);
        } catch (err) {
        console.error(err);
      }
    },
  },
 
});
