<template>
  <div class="truck-stop-info">
  <div class="info">
    <h1>{{this.$store.state.chosenTruckstop.name}} 
      - {{this.$store.state.chosenTruckstop.state}}</h1>
    <h2></h2>
    <h2>{{this.$store.state.chosenTruckstop.address}}</h2>
    <h2>{{this.$store.state.chosenTruckstop.type}}</h2>
  </div>

  <div class="amenities">
    <h3>{{this.$store.state.chosenTruckstop.amenities}}</h3>
  </div>

  <div class="payments">
    <h3>{{this.$store.state.chosenTruckstop.payments}}</h3>
  </div>

  <div class="restaurants">
    <h3>{{this.$store.state.chosenTruckstop.restaurants}}</h3>
  </div>
</div>
</template>

<script>
export default {
  name: "TruckStopInfo",
  components: {},

  methods: {

  }
};
</script>

<style scoped>
.truck-stop-info {
  display: flex;
  position: absolute;
  flex-direction: column;
  overflow-y: auto;
  background-color: hsla(342, 87%, 58%, 0.95);
  border-radius: 20px;
  width: 500px;
  height: 100%;
  top: 0px;
}

.info {
  border: solid black 0.5em;
}
.amenities {
  margin-top: 10px;
  background-color: rgb(201, 46, 46);
}

.payments {
  margin-top: 10px;
}

.resturants {
  margin-top: 10px;
}
</style>
