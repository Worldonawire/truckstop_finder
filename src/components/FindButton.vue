// https://www.w3schools.com/howto/howto_js_autocomplete.asp

<template>
  <div>
    <button className="Trucker"><span>Find Truck Stops</span></button>
    <form autocomplete="off" action="/action_page.php">
      <div class="autocomplete" style="width:300px;">
        <input id="myInput" type="text" name="myState" placeholder="State" />
      </div>
      <!-- <input type="submit"> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "FindButton",
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
  /* left: 41%;
    top: 33%; */
  left: 42%;
  top: 30%;
  /* margin-left: auto;
    margin-right: auto; */
}

input {
  position: absolute;
  height: 40px;
  width: 200px;
  left: 48%;
  top: 85%;
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
    font-size: 150%;
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
    font-size: 150%;
  }
}
</style>
