<template>
  <div class="truck-stop-info">
  <div class="info">
    <h1>{{this.$store.selectedTruckstop.name}}</h1>
    <h1>HELLO</h1>
    <h2>{{this.$store.selectedTruckstop.type}}</h2>
    <h2>{{this.$store.selectedTruckstop.state}}</h2>
    <h2>{{this.$store.selectedTruckstop.address}}</h2>
  </div>

  <div class="amenities">
    <h3>{{this.$store.selectedTruckstop.amenities}}</h3>
    <h3>{{this.$store.selectedTruckstop.payments}}</h3>
    <h3>{{this.$store.selectedTruckstop.restaurants}}</h3>
  </div>
</div>
</template>

<script>
export default {
  name: "TruckStopInfo",
  components: {},

  mounted() {
    // this.getLocations();
  },
};
</script>

<style scoped>
.truck-stop-info {
  position: absolute;
  flex-direction: column;
  overflow-y: auto;
  background-color: hsla(66, 77%, 49%, 0.95);
  border-radius: 20px;
  margin: 5px 5px;
  width: 500px;
  height: 100%;
  top: 0px;
}
</style>
