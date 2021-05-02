this.$store.state.defaultLocation.restaurants
<template>
  <div class="filter-page">
    I AM THE FILTER PAGE! BAHHHHHHH! <br> FEED ME OPTIONS!
    <form @submit.prevent="handleData()">
      <div>Amenities:</div><br>
          <div v-for="(result, i) in defaultAmenitiesInfo.amenities" :key="i">
            <label :id="result">{{ result }}</label>
            <input type="checkbox"
            :name="result" 
            :value="result"
            :id="result"
            v-model="options.amenities"
            />
            <!-- for in 'label' connects to 'id' in input -->
            <!-- <input type="checkbox" name="vehicle1" value="Bike">
            <label for="vehicle1"> I have a bike</label><br> -->
          </div>
          <br>
      <div>Restaurants:</div><br>   
          <div v-for="(result, i) in defaultAmenitiesInfo.restaurants" :key="i">
            <label :id="result">{{ result }}</label>
            <input type="checkbox"
            :name="result" 
            :value="result"
            :id="result"
            v-model="options.restaurants"

            />
          </div>
          <br>
      <div>Payments:</div><br> 
          <div v-for="(result, i) in defaultAmenitiesInfo.payments" :key="i">
            <label :id="result">{{ result }}</label>
            <input type="checkbox"
            :name="result"
            :value="result"
            :id="result"
            v-model="options.payments"
            />
          </div>

        

       <button type="submit" name="submit">I AM HERE</button>

   </form>
  </div>
</template>

<script>
export default {
  name: "FilterPage",
  components: {
  
  },

  data() {
    return {
      options: {
        amenities: [],
        restaurants: [],
        payments: []
      }
    }    
  },

  methods: {
     clearAllFilters() {
       this.$store.commit("clearAllFilters");
     },

     handleData () {
       const options = {
         amenities: this.options.amenities,
         payments: this.options.payments,
         restaurants: this.options.restaurants
       }
       this.$store.commit('filterStops', options)
    }
  },

  computed: {
    
      defaultAmenitiesInfo() {
        console.log(this.$store.state.defaultLocation)
            return this.$store.state.defaultLocation
          },
      photo() {
      return this.$store.state.photo
    }
  },

};
</script>

<style scoped>
input[type=checkbox] {
  margin-left: 2vw;
  -ms-transform: scale(3); /* IE */
  -moz-transform: scale(3); /* FF */
  -webkit-transform: scale(3); /* Safari and Chrome */
  -o-transform: scale(3); /* Opera */
  transform: scale(3);
  padding: 10px;
}
.filter-page {
  position: absolute;
  background-color: black;
  color: white;
  height: 95vh;
  width: 95%;
  top: 3%;
  left: 3%;
  z-index: 1;
  border-style: solid;
  border-color: white;
}
  


</style>
