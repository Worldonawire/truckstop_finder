<template>
  <div class="filter-page">
    <form>
      <p>Payment Types:</p>
      <label for="credit-cards">All Major Credit Cards</label>
      <input id="credit-cards" name="payment" type="checkbox" value="All Major Credit Cards">
      <br>
      <label for="cash">Cash Accepted</label>
      <input id="Cash Accepted" name="payment" type="checkbox" value="Cash Accepted">
      <br>
      <br>
      <br>
      <p>Truckstop Amenities</p>
      <label for="Private Showers">Shower Facilities</label>
      <input id="Private Showers" name="amenities" type="checkbox" value="Private Showers">
      <br>
      <label for="CAT Scales">CAT Scales</label>
      <input id="CAT Scales" name="amenities" type="checkbox" value="CAT Scales">
      <br>
      <label for="Wireless Internet">Wireless Internet</label>
      <input id="Wireless Internet" name="amenities" type="checkbox" value="Wireless Internet">
      <br>
      <label for="ATM">ATM</label>
      <input id="ATM" name="amenities" type="checkbox" value="ATM">
      <br>
      <label for="Overnight Parking">Overnight Parking</label>
      <input id="Overnight Parking" name="amenities" type="checkbox" value="Overnight Parking">
      <br>
      <label for="Light Mechanical">Light Mechanical</label>
      <input id="Light Mechanical" name="amenities" type="checkbox" value="Light Mechanical">
      <br>
      <label for="Parking Spaces">Parking Spaces</label>
      <input id="Parking Spaces" name="amenities" type="checkbox" value="Parking Spaces">
      <br>
      <br>
      <br>
      <p>Other Amenities</p>
      <label for="ComCheck">ComCheck</label>
      <input id="ComCheck" name="truck-amenities" type="checkbox" value="ComCheck">
      <br>
      <label for="EBT/SNAP Accepted">EBT/SNAP Accepted</label>
      <input id="EBT/SNAP Accepted" name="truck-amenities" type="checkbox" value="EBT/SNAP Accepted">
      <br>
      <label for="Fleet One">Fleet One</label>
      <input id="Fleet One" name="truck-amenities" type="checkbox" value="Fleet One">
      <br>
      <label for="EFS">EFS</label>
      <input id="EFS" name="truck-amenities" type="checkbox" value="EFS">
      <br>
      <label for="FlyingK Express">FlyingK Express</label>
      <input id="FlyingK Express" name="truck-amenities" type="checkbox" value="FlyingK Express">
      <br>
      <label for="Copy & Fax Service">Copy & Fax Service</label>
      <input id="Copy & Fax Service" name="truck-amenities" type="checkbox" value="Copy & Fax Service">
      <br>
      <label for="Overnight Parking">Overnight Parking</label>
      <input id="Overnight Parking" name="truck-amenities" type="checkbox" value="Overnight Parking">
      <br>
      <label for="Loyalty Program">Loyalty Program</label>
      <input id="Loyalty Program" name="truck-amenities" type="checkbox" value="Loyalty Program">
      <br>
      <br>
      <br>
      <input type="submit">
      <br>
      <br>
      <br>
  </form>
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
  background-color: black;
  height: 95vh;
  width: 95%;
  color: white;  
}
</style>
