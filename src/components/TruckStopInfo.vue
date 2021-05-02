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
      <div v-for="(path, index) in amenitiesImages"
          :key="index" >
          <img
            class="amenities-icon"
            @click="displayName(amenitiesName[index])"
            :src="path"
            alt="Amenities-icon"
          />
        <button class="amenities-name" 
        v-if="getStore.displayIconName === true && amenitiesName[index] === getStore.chosenIcon">
        {{getStore.chosenIcon}}
        </button>
      </div>
    </div>

    <div class="payments">
      <div v-for="(path, index) in paymentsImages"
          :key="index">
        <img
          class="payments-icon"
          @click="displayName(paymentsName[index])"
          :src="path"
          alt="payments-icon"
        />
        <button class="payments-name" 
      v-if="getStore.displayIconName === true && paymentsName[index] === getStore.chosenIcon">
      {{getStore.chosenIcon}}
      </button>
      </div>
    </div>

    <div class="restaurants">
      <div v-for="(path, index) in restaurantsImages"
        :key="index">
      <img
        class="restaurants-icon"
        @click="displayName(restaurantsName[index])"
        :src="path"
        alt="restaurants-icon"
      />
      <button class="restaurants-name" 
      v-if="getStore.displayIconName === true && restaurantsName[index] === getStore.chosenIcon">
      {{getStore.chosenIcon}}
      </button>
    </div>
    </div>
    <img :src="selectedTestPhoto" />
  </div>
</template>

<script>
export default {
  name: "TruckStopInfo",
  components: {

  },

  computed: {
    getStore(){
      return this.$store.state;
    },
    selectedTestPhoto() {
      return this.$store.state.selectedPhoto
    },
  },

  data() {
    return {
      amenitiesImages: [],
      paymentsImages: [],
      restaurantsImages: [],
      amenitiesName: [],
      paymentsName: [],
      restaurantsName: [],
    };
  },

  mounted() {
    this.getIcon();
  },

  methods: {
    getIcon() {
      for (let item of this.$store.state.chosenTruckstop.amenities) {
        if(item === 'DEF # of Lanes') this.amenitiesImages.push(require(`@/assets/icons/DEF of Lanes.png`));
        else if(this.amenitiesName.includes(item)) {}
        else {
          this.amenitiesImages.push(require(`@/assets/icons/${item}.png`));
          this.amenitiesName.push(item);
        } 
      }
      for (let item of this.$store.state.chosenTruckstop.payments) {
        this.paymentsImages.push(require(`@/assets/icons/${item}.png`));
        this.paymentsName.push(item);
      }
      for (let item of this.$store.state.chosenTruckstop.restaurants) {
        this.restaurantsImages.push(require(`@/assets/icons/${item}.png`));
        this.restaurantsName.push(item);
      }
    },

    displayName(iconName) {
      this.$store.commit("displayIconDetail", iconName);
    }
  },
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

.amenities {
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-auto-rows: 50px;
  gap: 10px, 10px;
}

.payments {
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-auto-rows: 50px;
  gap: 5px, 5px;
}

.restaurants {
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  grid-auto-rows: 80px;
  gap: 5px, 5px;
}

.amenities-icon {
  margin-top: 5px;
  height: min(100%, 40px);
  width: min(100%, 40px);
}

.amenities-icon:hover {
  transform: scale(1.1);
}

.payments-icon {
  margin-top: 5px;
  height: min(100%, 40px);
  width: min(100%, 40px);
}

.payments-icon:hover {
  transform: scale(1.1);
}

.restaurants-icon {
  margin-top: 5px;
  margin-left: 50px;
  height: min(100%, 80px);
  width: min(100%, 100px);
}

.restaurants-icon:hover {
  transform: scale(1.1);
}

.payments {
  margin-top: 10px;
}

.resturants {
  margin-left: 20px;
  margin-top: 10px;
}

img {
  width: 90%;
  display: block;
  border-radius: 5%;
  border: 4px solid black;
  box-shadow: 5px 5px 5px black;
  margin-top: 5%;
  margin-left: -3%;
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

.amenities-name {
  position: absolute;
  display: block;
  z-index: 7;
}
.payments-name {
  position: absolute;
  display: block;
  z-index: 7;
}
.restaurants-name {
  position: absolute;
  display: block;
  z-index: 7;
}
</style>
