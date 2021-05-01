<template>
  <div class="filter-page">
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
  background-color: white;
  height: 95vh;
  width: 95%;
  top: 0%;
  left: 0%;

  
}
</style>
