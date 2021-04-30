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
    truckStopDeets: false,
   
  },

  mutations: {
    setLocation(state, payload) {
      state.clientLocation = stateInitials[payload];
    },

    setLocations(state, locations) {
      state.locations = locations;
    },

    // setStateDetails() {
    // for (let object of state.locations) {
    //   if (objects.state === state.clientLocation) {
    //     state.allTruckStopsInState.push(object)
    //   }
    //  }
    // },
      
    zoomOnState(state) {
      state.center = usStateCoords[state.clientLocation];
      state.zoom = 7;
      state.zoomOnStateToggle = true;
    },
    filterDetails(state) {
      state.filterPage = true;
    },
    truckStopInfo(state) {
      state.truckStopDeets = true
    }
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
          key: location.name,
          address: location.address,
          state: location.state,
          city: location.city,
          amenities: location.amenities,
          payments: location.payments,
          restaurants: location.restaurants,
          defaultAnimation: 2,
        }));
        commit("setLocations", markers);
        } catch (err) {
        console.error(err);
      }
    },
  },
 
});
