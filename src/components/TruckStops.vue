<template>
  <div class="truck-stops">
    <div class="truck-stops-pane">YESSSSSSSS! RUSSSSSSEELLLLLLLLLL</div>
    <TruckStopInfo
      :data="truckstopData"
      :message="this.$store.state.selectedTruckstop"
    />
    <FilterPage class="filter-results" />
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
};
</script>

<style scoped>
.truck-stops-pane {
  position: absolute;
  background-color: hsla(342, 87%, 58%, 0.95);
  border-radius: 20px;
  margin: 5px 5px;
  width: 500px;
  height: 100%;
  top: 0%;
  left: 0%;
}
</style>
