<template>
  <div class="truck-stop-info">
    <div class="info">
      <h1>
        {{ this.$store.state.chosenTruckstop.name }} -
        {{ this.$store.state.chosenTruckstop.state }}
      </h1>
      <h2></h2>
      <h2>{{ this.$store.state.chosenTruckstop.address }}</h2>
      <h2>{{ this.$store.state.chosenTruckstop.type }}</h2>
    </div>

    <div class="amenities">
      <img
        class="amenities-icon"
        v-for="(path, index) in amenitiesImages"
        :key="index"
        :src="path"
        alt="Amenities-icon"
      />
    </div>

    <div class="payments">
      <img
        class="amenities-icon"
        v-for="(path, index) in paymentsImages"
        :key="index"
        :src="path"
        alt="Amenities-icon"
      />
    </div>

    <div class="restaurants">
      <img
        class="amenities-icon"
        v-for="(path, index) in restaurantsImages"
        :key="index"
        :src="path"
        alt="Amenities-icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TruckStopInfo",
  components: {},

  data() {
    return {
      amenitiesImages: [],
      paymentsImages: [],
      restaurantsImages: [],
    };
  },

  mounted() {
    this.getIcon();
  },

  methods: {
    getIcon() {
      for (let item of this.$store.state.chosenTruckstop.amenities) {
        this.amenitiesImages.push(require(`@/assets/icons/${item}.png`));
      }
      console.log(this.amenitiesImages);
    },
  },
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
  display: grid;
  margin-top: 10px;
  background-color: rgb(201, 46, 46);
  border: solid 0.2em;
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  grid-auto-rows: 50px;
  gap: 10px, 10px;
}

.amenities-icon {
  margin-top: 5px;
  height: min(100%, 40px);
  width: min(100%, 40px);
}

.amenities-icon:hover {
  transform: scale(1.1);
}

.payments {
  margin-top: 10px;
}

.resturants {
  margin-top: 10px;
}
</style>
