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
    zoomOnStopToggle: false,
    clientLocation: "",
    availableTruckstops: [], 
    center: { lat: 39.5, lng: -98.35 },
    zoom: 5,
    filterPage: false,
    detailsPage: false,
    chosenTruckStop: {},
    filterPageDetails: false,
    tempLocations: [],
    formInfo: {
      "Cash Accepted": null
    },
    selectedPhoto: null,
    allPhotos: [
      require('@/assets/images/photo1.jpg'), 
      require('@/assets/images/photo2.jpg'), 
      require('@/assets/images/photo3.jpg'), 
      require('@/assets/images/photo4.jpg'), 
      require('@/assets/images/photo5.jpg'), 
      require('@/assets/images/photo6.jpg'), 
      require('@/assets/images/photo7.jpg'), 
      require('@/assets/images/photo8.jpg'), 
      require('@/assets/images/photo9.jpg'), 
      require('@/assets/images/photo10.jpg'), 
      require('@/assets/images/photo11.png'), 
      require('@/assets/images/photo12.jpg'), 
      require('@/assets/images/photo13.gif'), 
      require('@/assets/images/photo14.jpg'), 
      require('@/assets/images/photo15.jpg'), 
      require('@/assets/images/photo16.jpg'), 
      require('@/assets/images/photo17.png'), 
      require('@/assets/images/photo18.jpg'), 
      require('@/assets/images/photo19.jpg') 
      
    ],

    defaultLocation: {
      amenities: ["24-Hour Road Service", "Open 24-Hours", "Copy & Fax Services", "Wireless Internet", "ATM",  "Overnight Parking", "Parking Spaces", "Private Showers", "Light Mechanical" ],
      restaurants: ["FlyingK Subs Burritos", "Subway", "McDonald's", "Arby's", "Chester's", "Godfather's Pizza", "Del Taco", "Taco Bell", "Wendy's"],
      payments: ["FlyingK Express", "All Major Credit Cards", "Cash Accepted", "EBT/SNAP", "Multiservice", "T-Chek"]
    },
    chosenIcon: "",
    displayIconName: false,
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
    zoomOnStop(state) {
      state.center = {
        lat: state.chosenTruckstop.position.lat,
        lng: state.chosenTruckstop.position.lng
      };
      state.zoom = 14;
      state.zoomOnStopToggle = true;
    },
    filterDetails(state) {
      if (state.filterPage) {
        state.filterPage = false;
      } else {
        state.filterPage = true;
      }
    },
    detailsPageCall(state, payload) {
      state.chosenTruckstop = payload
      state.detailsPage = true;
    },
    populateFilterPage(state) { 
      state.filterPageDetailsToggle = true;   
    },
    truckStopsBack(state){
      state.locations = [];
      state.zoomOnStateToggle = false;
      state.zoomOnStopToggle = false;
      state.clientLocation = "";
      state.availableTruckstops = [];
      state.center = { lat: 39.5, lng: -98.35 };
      state.zoom = 5;
      state.filterPage = false;
      state.detailsPage = false;
    },
    truckStopsInfoBack(state){
      state.zoomOnStateToggle = true;
      state.zoomOnStopToggle = false;
      state.center= {
        lat: state.chosenTruckstop.position.lat,
        lng: state.chosenTruckstop.position.lng
      };
      state.zoom = 7;
      state.filterPage = false;
      state.detailsPage = false;
      state.chosenTruckstop = {};
    },
    submitData(state, value ) {
      state.formInfo["Cash Accepted"] = value;
      console.log("FORM DATA >>>>", state.formInfo);
    },
   
    selectPhoto(state, allPhotos) {
      let randomIndex = Math.floor(Math.random() * state.allPhotos.length);
      state.selectedPhoto = state.allPhotos[randomIndex];
      console.log(state.selectedPhoto);
    },

    clearAllFilters(state) {
      state.locations = state.tempLocations;
    },

    filterStops(state, payload) {

      console.log("STORE'S filterStops was called")
      console.log("Payload is:")
      console.log(payload)
      
      state.tempLocations = state.locations;

      const filteredLocations = [];

      console.log("State > Locations is: ")
      console.log(state.locations)
      
      for (let el of state.locations) {

        console.log("el is: ")
        console.log(el)
        console.log("Iterated el.amenities is: ")
        console.log(el.amenities)
        if (el.amenities.includes(payload.amenities)) {
          console.log("MATCH FOUND")
          out.push(el);
        }
      }

      for (let el of state.locations.payments) {
        for (let i = 0; i < payload.payments.length; i++) {
          if (el.payments.includes(payload.payments[i])) {
            out.push(el);
          }
        }
      }

      for (let el of state.locations.restaurants) {
        if (el.restaurants.includes(payload.restaurants)) {
          out.push(el);
        }
      }
      console.log("Filtered Locations is: ")
      console.log(filteredLocations)
      state.locations = filteredLocations;
    },

    displayIconDetail(state, iconName) {
      state.chosenIcon = iconName;
      state.displayIconName = !state.displayIconName;
    }
    
  },

  actions: {
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get(`/api/?state=${this.state.clientLocation}`); // ES6 destructuring & aliasing
        const markers = locations.map((location) => ({
          position: {
            lat: location.latitude,
            lng: location.longitude
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
