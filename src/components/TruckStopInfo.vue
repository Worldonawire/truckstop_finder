<template>
  <div class="truck-stop-info">
    <div class="info">
      <h1>{{this.$store.state.chosenTruckstop.name}} 
        - {{this.$store.state.chosenTruckstop.state}}</h1>
      <h2></h2>
      <h2>{{this.$store.state.chosenTruckstop.address}}</h2>
      <h2>{{this.$store.state.chosenTruckstop.type}}</h2>
    </div>

    <div class="details-container">
      <ul class="amenities">
        <span class="details-title">Available Amenities</span>
        <li
          class="dropdown-content"
          v-for="(amenity, i) in this.$store.state.chosenTruckstop.amenities"
          :key="i"
        > {{amenity}}
        </li>
      </ul>

      <ul class="payments">
        <span class="details-title">Available Payments</span>
        <li
          class="dropdown-content"
          v-for="(payment, i) in this.$store.state.chosenTruckstop.payments"
          :key="i"
        > {{payment}}
        </li>
      </ul>

      <ul class="restaurants">
        <span class="details-title">Available Restaurants</span>
        <li
          class="dropdown-content"
          v-for="(restaurant, i) in this.$store.state.chosenTruckstop.restaurants"
          :key="i"
        > {{restaurant}}
        </li>
      </ul>
    </div>
    <img :src="selectedTestPhotoy" /> 
  </div>
</template>

<script>
export default {
  name: "TruckStopInfo",
  components: {},
  
  computed: {
   selectedTestPhotoy() {
      return this.$store.state.selectedPhoto
    },
  },

  methods: {

  }
};
</script>

<style scoped>
.details-container {
  display: flex;
  margin-left: -5%;
}

.details-title {
  text-decoration: underline;
  font-weight: bold;
  font-size: 120%;
  text-align: center;
}

.truck-stop-info {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  background-color: hsla(232, 78.9%, 33.5%, 0.95);
  border-radius: 20px;
  width: 33vw;
  height: 100%;
  top: 0px;
  padding-bottom: 3em;
  color: #E65A25;
}

.info {
  border: solid black 0.5em;
}
.amenities {
  margin-top: 10px;
  background-color: #122499f2;
}

.payments {
  margin-top: 10px;
}

.resturants {
  margin-top: 10px;
}

img {
  width: 90%;
  display: block;
  border-radius: 5%;
  border: 4px solid black;
  box-shadow: 5px 5px 5px black;
}

@media screen and (min-width: 360px) and (max-width: 374px) {
  .info {
    font-size: 70%;
  }

  .details-container {
  display: flex;
  flex-direction: column;
  margin-left: -5%;
  font-size: 70%;
  margin-top: 10px;
  margin-left: -18%;
  overflow-wrap: break-word;
  }
}

@media screen and (min-width: 375px) and (max-width: 399px) {
  .info {
    font-size: 70%;
  }

  .details-container {
  display: flex;
  flex-direction: column;
  margin-left: -5%;
  font-size: 70%;
  margin-top: 10px;
  margin-left: -18%;
  overflow-wrap: break-word;
  }
}

@media screen and (min-width: 400px) and (max-width: 420px) {
  .info {
    font-size: 70%;
  }

  .details-container {
  display: flex;
  flex-direction: column;
  margin-left: -5%;
  font-size: 70%;
  margin-top: 10px;
  margin-left: -18%;
  overflow-wrap: break-word;
  }
}

@media screen and (min-width: 768px) and (max-width: 900px) {
  .details-container {
  display: flex;
  flex-direction: column;
  margin-left: -5%;
  margin-top: 10px;
  margin-left: -18%;
  }
}

</style>
