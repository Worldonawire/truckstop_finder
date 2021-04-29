<template>
  <div className="map-container">
    <GmapMap
      className="map"
      :zoom="5"
      :center="{ lat: 39.5, lng: -98.35 }"
      map-type-id="terrain"
      style="width: 100%; height: 98vh"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.key"
        :position="location.position"
        :animation="location.defaultAnimation"
        @rightclick="markerRightClicked"
      />
    </GmapMap>
    <FindButton id="find-button" />
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
import FindButton from "./FindButton.vue";

export default {
  name: "Map",
  components: {
    FindButton,
  },

  mounted() {
    this.getLocations();
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
<style scoped>
.map-container {
  position: relative;
}

.map {
  position: absolute;
}
</style>
