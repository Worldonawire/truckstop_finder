 v-on:click="openTruckStopInfo"
<template>
  <div>
    <div class="truck-stops-pane">
    <div v-if="this.$store.state.detailsPage === false">
      <button class="truck-stop-details" v-for="location in locations" :key="location.name" @click='detailsPageCall(location)'>
        <div class="keyDetails">
          <h1>{{location.name + " Truck Stop"}}</h1>
            <h2>{{location.address}}</h2>
            <h2>{{location.city+", "+ location.state}}</h2>
        </div>
        <div class="extraDetails">
          <div class="amenities">icon1</div>
          <div class="payments">icon2</div>
          <div class="restaurants">icon3</div>
        </div>
      </button>
    </div>
    <TruckStopInfo v-if="this.$store.state.detailsPage === true"

      :message="this.$store.state.selectedTruckstop"
    />
    </div>
    <div id="buttons-container">
     <button id="filter-button" @click="openFilterPage">Filter</button>
     <button class="go-back-from-list-button" @click="goBackToMain"></button>
     <button class="go-back-from-details-button"></button>
    </div>
    <FilterPage class="filter-results" v-if="this.$store.state.filterPage === true" />
  </div>
</template>

<script>
import TruckStopInfo from "./TruckStopInfo.vue";
import FilterPage from "./FilterPage.vue";
import { gmapApi } from "vue2-google-maps";

export default {
  name: "TruckStops",
  computed: {
    google: gmapApi,
  },

  computed: {
    locations() {
      return this.$store.state.locations;
    },
  },

  components: {
    TruckStopInfo,
    FilterPage,
  },
  methods: {
    openFilterPage() {
      this.$store.commit('filterDetails')
    },
    detailsPageCall(location){
      this.$store.commit('detailsPageCall', location)
    },
    goBackToMain() {
      this.$store.commit("truckStopsBack")
    }
  }
};
</script>

<style scoped>

#buttons-container {
  display: flex;
  position: absolute;
  top: 1%;
  right: 4%;  
}

#filter-button {
  border-radius: 50%;
  /* background-color: #bbb; */
  background-color: hsla(342, 87%, 58%, 0.95);
  border: none;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
  height: 3vw;
  width: 3vw;
}

.go-back-from-list-button, .go-back-from-details-button {
  background: url("../assets/icons/back-button.png") no-repeat;
  cursor: pointer;
  border:none;
  width: 66px;
  height: 66px;
  position: absolute;
  right: 110%;
  filter: invert(100%);
}

.truck-stops-pane::-webkit-scrollbar {
  width: 11px;
  
}
/* 
.truck-stops-pane {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
} */

.truck-stops-pane::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
  
}

.truck-stops-pane::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
  background: #969696;
}
.truck-stops-pane {
  display: flex;   
  /* flex-direction: row; */
  
  position: absolute;
  flex-direction: column;
  overflow-y: auto;
  background-color: hsla(342, 87%, 58%, 0.95);
  border-radius: 20px;
  margin: 5px 5px;
  width: 500px;
  height: 100%;
  top: 0%;
  left: 0%;
}

.truck-stop-details {
  box-sizing: border-box;
  padding: 15px;
  display: flex;    
  flex-direction: row;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
  height: 250px;
  width: 100%;
  
}

.extraDetails {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.amenities {
 display: flex;
 margin: 10px;
  justify-content: space-between;
}
.payments {
 display: flex;
 margin: 10px;
  justify-content: space-between;
}
.restaurants {
 display: flex;
 margin: 10px;
  justify-content: space-between;
}

</style>
