
<template>
  <div class="filter-page">
    I AM THE FILTER PAGE! BAHHHHHHH! <br> FEED ME OPTIONS!
  </div>
</template>

<script>
export default {
  name: "FilterPage",
  components: {},

  computed: {
    photo() {
      return this.$store.state.photo
    }
  },

};
</script>

<style scoped>
.filter-page {
  position: absolute;
  background-color: black;
  color: white;
  font-size: 900%;
  height: 95vh;
  width: 95%;
  top: 3%;
  left: 3%;
  z-index: 1;
  border-style: solid;
  border-color: white;
  
}


</style>
