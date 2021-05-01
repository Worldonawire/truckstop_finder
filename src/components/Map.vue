<template>
  <div class="map-container">
    <GmapMap
      :zoom="this.$store.state.zoom"
      :center="this.$store.state.center"
      map-type-id="terrain"
      style="width: 100%; height: 98vh"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.name"
        :position="location.position"
        :animation="location.defaultAnimation"
        @rightclick="markerRightClicked"
      />
    </GmapMap>
    <FindButton
      id="find-button"
      v-if="this.$store.state.zoomOnStateToggle === false"
    />
    <TruckStops v-if="this.$store.state.zoomOnStateToggle === true" />
    <FilterPage class="filter-results" v-if="this.$store.state.filterPage === true" />

  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
import FindButton from "./FindButton.vue";
import TruckStops from "./TruckStops.vue";
import FilterPage from "./FilterPage"

export default {
  name: "Map",
  components: {
    FindButton,
    TruckStops,
    FilterPage
  },

  computed: {
    locations() {
      return this.$store.state.locations;
    },
    google: gmapApi,
  },

  methods: {
    getLocations() {
      this.$store.dispatch("loadMarkers");
    },
    markerRightClicked() {},
  },
};
</script>

<style>

.map-container {
  display: flex;
  position: relative;
}

</style>
