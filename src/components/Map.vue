<template>
  <div class="map-container">
    <TruckStops v-if="this.$store.state.zoomOnStateToggle === true" />
    <FilterPage class="filter-results" v-if="this.$store.state.filterPage === true" />
    <GmapMap
      :class="[!this.$store.state.zoomOnStateToggle ? 'gmap-default' : 'gmap-clicked']"
      :zoom="this.$store.state.zoom"
      :center="this.$store.state.center"
      map-type-id="terrain"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.name"
        :position="location.position"
        :animation="location.defaultAnimation"
        @click="markerLeftClicked(location)"
      />
    </GmapMap>
    <FindButton
      id="find-button"
      v-if="this.$store.state.zoomOnStateToggle === false"
    />
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
import FindButton from "./FindButton.vue";
import TruckStops from "./TruckStops.vue";
import FilterPage from "./FilterPage.vue"

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
    markerLeftClicked(location) {
      this.$store.commit('detailsPageCall', location)
      this.$store.commit('zoomOnStop', location);
      this.$store.commit('selectPhoto')
    },
    },

};
</script>

<style>

.gmap-default {
  height: 98vh;
  width: 100%;
}

.gmap-clicked {
  height: 98vh;
  width: 67%;
  right: -33%
}

.map-container {
  display: flex;
}

</style>
