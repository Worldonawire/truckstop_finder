 v-on:click="openTruckStopInfo"
<template>
  <div>
    <div class="truck-stops-pane">
    <div class="truck-stop-details">
      <div class="keyDetails">
        <h1>Truck Stop Name</h1>
          <h2>Address</h2>
          <h2>City</h2>
          <h2>State</h2>
      </div>
      <div class="extraDetails">
        <div class="amenities">icon1</div>
        <div class="payments">icon2</div>
        <div class="restaurants">icon3</div>
      </div>
    </div>
    </div>

     <button v-on:click="openFilterPage"></button>
    <!-- <TruckStopInfo v-if="this.$store.state.truckStopDeets === true"
      :data="truckstopData"
      :message="this.$store.state.selectedTruckstop"
    /> -->
  
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
  components: {
    TruckStopInfo,
    FilterPage,
  },
  methods: {
    openFilterPage() {
      this.$store.commit('filterDetails')
    },
    openTruckStopInfo() {
      this.$store.commit('truckStopInfo')
    }
  }
};
</script>

<style scoped>
.truck-stops-pane {
  display: flex;   
  /* flex-direction: row; */
  position: absolute;
  background-color: hsla(342, 87%, 58%, 0.95);
  border-radius: 20px;
  margin: 5px 5px;
  width: 500px;
  height: 100%;
  top: 0%;
  left: 0%;
}
.truck-stop-details {
  display: flex;    
  flex-direction: row;
  
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

button {
  position: absolute;
  border-radius: 50%;
  /* background-color: #bbb; */
  background-color: hsla(342, 87%, 58%, 0.95);
  border: none;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
  height: 50px;
  width: 50px;
  left: 90%;
  top: 10%;
}
</style>
