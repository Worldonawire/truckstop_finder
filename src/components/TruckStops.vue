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
    <TruckStopInfo v-if="this.$store.state.detailsPage === true" />
    </div>
    <div id="buttons-container">
     <button class="filter-button" @click="openFilterPage"></button>
     <button class="go-back-button" @click="goBack"></button>
    </div>
    <FilterPage class="filter-results" v-if="this.$store.state.filterPage === true" />
  </div>
</template>

<script>
import TruckStopInfo from "./TruckStopInfo.vue";
import { gmapApi } from "vue2-google-maps";

export default {
  name: "TruckStops",
  computed: {
    google: gmapApi,

    locations() {
      return this.$store.state.locations;
    },
  },

  components: {
    TruckStopInfo,
  },
  methods: {
    openFilterPage() {
      this.$store.commit('filterDetails');
    },
    detailsPageCall(location){
      this.$store.commit('detailsPageCall', location)
      this.$store.commit('zoomOnStop', location);
      this.$store.commit('selectPhoto')
    },
    goBack() {
      if (!this.$store.state.detailsPage) {
        this.$store.commit("truckStopsBack");
      } else {
        this.$store.commit("truckStopsInfoBack");
      }
    }
  }
};
</script>

<style scoped>

.keyDetails > * {
  color: #E65A25;
}

#buttons-container {
  display: flex;
  position: absolute;
  top: 1%;
  right: 7%;  
  z-index: 2;
}

.filter-button {
  background: url("../assets/icons/settings.png") no-repeat;
  border-radius: 50%;
  border: none;
  height: 66px;
  width: 66px;
  background-size: cover;
  z-index: 2;
}

.go-back-button {
  background: url("../assets/icons/back-button.png") no-repeat;
  cursor: pointer;
  border:none;
  width: 66px;
  height: 66px;
  background-size: cover;
  position: absolute;
  right: 110%;
  z-index: 2;
}

.truck-stops-pane::-webkit-scrollbar {
  width: 11px;
  
}

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
  position: absolute;
  flex-direction: column;
  overflow-y: auto;
  background-color: hsla(232, 78.9%, 33.5%, 0.95);
  border-radius: 20px;
  margin: 5px 5px;
  width: 33vw;
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
  height: 20vh;
  width: 100%;
  background: #122499;
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

@media screen and (min-width: 360px) and (max-width: 374px) {
  .truck-stops-pane {
    top:-1%;
    left: -1.5%;
    border-radius: 5px;

  }

  .truck-stop-details {
    font-size: 40%;
  }

  .keyDetails {
    margin:auto;
  }

  .extraDetails {
    display:none

  }
}

@media screen and (min-width: 375px) and (max-width: 390px) {
  .truck-stops-pane {
    top:-1%;
    left: -1.5%;
    border-radius: 5px;

  }

  .truck-stop-details {
    font-size: 40%;
  }

  .keyDetails {
    margin:auto;

  }

  .extraDetails {
    display:none

  }
}

@media screen and (min-width: 400px) and (max-width: 420px) {
  .truck-stops-pane {
    top:-1%;
    left: -1.5%;
    border-radius: 5px;

  }

  .truck-stop-details {
    font-size: 40%;
  }

  .keyDetails {
    margin:auto;

  }

  .extraDetails {
    display:none

  }
}

@media screen and (min-width: 768px) and (max-width: 900px) {
  .truck-stops-pane {
    top:-0.5%;
    left: -1.5%;
    border-radius: 10px;

  }

  .truck-stop-details {
    font-size: 60%;
  }

  .keyDetails {
    margin:auto;

  }

  .extraDetails {
    display:none

  }
}

  /* .filter-results {
  position: absolute;
  background-color: black;
  height: 95vh;
  width: 95%;
  top: 0px;
  z-index: 3;

  
} */
</style>
