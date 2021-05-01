<template>
  <div class="truck-stop-info">
    <img :src="selectedTestPhotoy"> 

  </div>
</template>

<script>
export default {
  name: "TruckStopInfo",
  components: {},
  
  computed: {
   selectedTestPhotoy() {
     console.log("Argghhhh", this.$store.state.selectedPhoto);
      return this.$store.state.selectedPhoto
    },
  },

  mounted() {
    // this.getLocations();
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
img {
  width: 90%;
  /* height: 100%; */
  display: block;
}
</style>
