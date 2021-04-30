<template>
  <div className="truck-stops">
    <div>YESSSSSSSS! RUSSSSSSEELLLLLLLLLL</div>
    <GmapMap
      :zoom="7"
      :center="{ lat: 31, lng: -100 }"
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
    <TruckStopInfo />
    <FilterPage />
  </div>
</template>

<script>
import TruckStopInfo from "./TruckStopInfo.vue";
import FilterPage from "./FilterPage.vue";

export default {
  name: "TruckStops",
  components: {
    TruckStopInfo,
    FilterPage,
  },
};
</script>

<style scoped></style>
