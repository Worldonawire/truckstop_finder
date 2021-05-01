<template>
  <div class="truck-stop-info">
    {{this.$store.state.chosenTruckstop}}
  </div>
</template>

<script>
export default {
  name: "TruckStopInfo",

  computed: {
    selectedTruckstop() {
      return this.$store.state.chosenTruckstop
    }
  },

};
</script>

<style scoped>
.truck-stop-info {
  position: absolute;
  background-color: blue;
  height: 90vh;
  width: 90%;
  top: 0px;
}
</style>
