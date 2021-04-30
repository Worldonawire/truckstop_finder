<template>
  <div class="filter-page">
    <button>Filter results</button>
  </div>
</template>

<script>
export default {
  name: "FilterPage",
  components: {},

  mounted() {
    // this.getLocations();
  },
};
</script>

<style scoped>
.filter-page {
  position: absolute;
  border-radius: 50%;
  /* background-color: #bbb; */
  background-color: hsla(342, 87%, 58%, 0.95);
  border: none;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
  height: 30px;
  width: 30px;
  left: 41%;
  top: 33%;
}
</style>
