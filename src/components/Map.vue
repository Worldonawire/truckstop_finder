<template>
  <div>
    <GmapMap
      :zoom="5"
      :center="{ lat: 39.5, lng: -98.35 }"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.key"
        :position="location.position"
        :animation="location.defaultAnimation"
        @rightclick="markerRightClicked"
      />
      <FindButton />
    </GmapMap>
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
<style scoped></style>
