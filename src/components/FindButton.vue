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
    </button>
    <AutoComplete
      :items="[
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ]"
    />
  </div>
</template>

<script>
import AutoComplete from "./AutoComplete.vue";

export default {
  name: "FindButton",
  components: {
    AutoComplete,
  },

  methods: {
    zoomToState() {
      this.$store.commit("zoomOnState");
    },
  },
};
</script>

<style scoped>
button {
  position: absolute;
  border-radius: 50%;
  /* background-color: #bbb; */
  background-color: hsla(342, 87%, 58%, 0.95);
  border: none;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
  height: 400px;
  width: 400px;
  left: 41%;
  top: 33%;
}

span {
  font-weight: bold;
  font-size: 300%;
}

@media screen and (min-width: 360px) and (max-width: 767px) {
  button {
    height: 200px;
    width: 200px;
    left: 25%;
    top: 35%;
  }

  span {
    font-size: 30px;
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
