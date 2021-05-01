//
https://www.digitalocean.com/community/tutorials/vuejs-vue-autocomplete-component
//
https://dev.to/woet/using-v-model-to-bind-user-input-to-state-in-the-vuex-store-2bcl
// const allStates = ['Alabama','Alaska','American
Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District
of Columbia','Federated States of
Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall
Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New
Hampshire','New Jersey','New Mexico','New York','North Carolina','North
Dakota','Northern Mariana
Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode
Island','South Carolina','South
Dakota','Tennessee','Texas','Utah','Vermont','Virgin
Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

<template>
  <div>
    <button class="btn" type="button" @click="zoomToState">
      <span>Find Truck Stops</span>
    <AutoComplete
      :items="[
        'Alabama',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ]"
    />
    </button>
  </div>
</template>

<script>
import AutoComplete from "./AutoComplete.vue";
import { stateInitials } from "../utils/stateCoords"

export default {
  name: "FindButton",
  components: {
    AutoComplete,
  },

  methods: {
    zoomToState() {
      if (this.$store.state.clientLocation !== "") {
        this.getLocations();
        this.$store.commit("zoomOnState");
      }
    },

    getLocations() {
      this.$store.dispatch("loadMarkers");
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 38%;
  left: 40%;
  border-radius: 50%;
  /* background-color: #bbb; */
  background-color: hsla(342, 87%, 58%, 0.95);
  border: none;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
  height: 300px;
  width: 300px;

}

span {
  margin-top: 8vh;
  margin-bottom: 2vh;
  font-weight: bold;
  font-size: 45px;
}

@media screen and (min-width: 360px) and (max-width: 767px) {
  button {
    height: 200px;
    width: 200px;
    left: 25%;
    top: 35%;
  }

  span {
    font-size: 23px;
  }
}

@media screen and (min-width: 768px) and (max-width: 900px) {
  button {
    height: 350px;
    width: 350px;
    left: 29%;
    top: 32%;
  }

  span {
    font-size: 50px;
  }
}
</style>
