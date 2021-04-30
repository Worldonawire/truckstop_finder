<template>
  <div class="dropdown-container">
    <input
      v-model="search"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      type="text"
      placeholder="States"
    />
    <ul class="dropdown-contents" v-show="isOpen">
      <li
        class="dropdown-content"
        v-for="(result, i) in results"
        :class="{ 'is-active': i === arrowCounter }"
        :key="i"
        @click="setResult(result)"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AutoComplete",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  data() {
    return {
      search: "",
      results: [],
      isOpen: false,
      arrowCounter: -1,
    };
  },

  methods: {
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },

    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },

    onEnter() {
      if (this.arrowCounter !== -1) {
        this.search = this.results[this.arrowCounter];
      }

      this.arrowCounter = -1;
      this.isOpen = false;
      this.$store.commit("setLocation", this.search);
      this.$store.commit("zoomOnState");
    },

    onChange() {
      this.filterResults();
      this.$store.commit("setLocation", this.search);
      this.isOpen = true;
    },

    filterResults() {
      this.results = this.items.filter(
        (item) => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },

    setResult(result) {
      this.search = result;
      this.isOpen = false;
      this.$store.commit("setLocation", this.search);
    },

    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.arrowCounter = -1;
        this.isOpen = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },

  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
input {
  position: absolute;
  height: 40px;
  width: 200px;
  left: 46%;
  top: 60%;
  padding: 7px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  outline: none;
}

.dropdown-contents {
  top: 66%;
  left: 46%;
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  min-height: 1em;
  max-height: 8em;
  width: 214px;
  position: absolute;
  overflow: auto;
  outline: none;
  border: none;
}

.dropdown-content {
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
  list-style: none;
  background-color: white;
}

.dropdown-content.is-active,
.dropdown-content:hover {
  background-color: #4aae9b;
  color: white;
}

@media screen and (min-width: 360px) and (max-width: 374px) {
  input {
    position: absolute;
    height: 20px;
    width: 100px;
    left: 38.5%;
    top: 55%;
  }

  .dropdown-contents {
    top: 60%;
    left: 40%;
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 8em;
    width: 100px;
    position: absolute;
    overflow: auto;
    outline: none;
    border: none;
  }
}

@media screen and (min-width: 375px) and (max-width: 390px) {
  input {
    position: absolute;
    height: 20px;
    width: 100px;
    left: 38.5%;
    top: 56%;
  }

  .dropdown-contents {
    top: 62%;
    left: 40%;
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 8em;
    width: 100px;
    position: absolute;
    overflow: auto;
    outline: none;
    border: none;
  }
}

@media screen and (min-width: 400px) and (max-width: 420px) {
  input {
    position: absolute;
    height: 10px;
    width: 100px;
    left: 37%;
    top: 56%;
  }

  .dropdown-contents {
    top: 60%;
    left: 38.5%;
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 8em;
    width: 100px;
    position: absolute;
    overflow: auto;
    outline: none;
    border: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 900px) {
  input {
    position: absolute;
    height: 40px;
    width: 200px;
    left: 38.5%;
    top: 57%;
  }

  .dropdown-contents {
    top: 63%;
    left: 39%;
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 8em;
    width: 210px;
    position: absolute;
    overflow: auto;
    outline: none;
    border: none;
  }
}
</style>
