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
    }
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
        else this.amenitiesImages.push(require(`@/assets/icons/${item}.png`));
        this.amenitiesName.push(item);
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
  border: solid 0.2em black;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-auto-rows: 50px;
  gap: 10px, 10px;
}

.payments {
  display: grid;
  margin-top: 10px;
  background-color: rgb(201, 46, 46);
  border: solid 0.2em black;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-auto-rows: 50px;
  gap: 5px, 5px;
}

.restaurants {
  display: grid;
  margin-top: 10px;
  background-color: rgb(201, 46, 46);
  border: solid 0.2em black;
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
  margin-top: 10px;
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
