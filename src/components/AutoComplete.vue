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
import { stateInitials } from "../utils/stateCoords";
import _ from "lodash"

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
      if (stateInitials[_.capitalize(this.search)]) {
        this.arrowCounter = -1;
        this.isOpen = false;
        this.$store.commit("setLocation", _.capitalize(this.search));
        this.$store.dispatch("loadMarkers");
        this.$store.commit("zoomOnState");
      }
    },

    onChange() {
      this.filterResults();
      this.isOpen = true;
      if (stateInitials[_.capitalize(this.search)]) {
        this.$store.commit("setLocation", _.capitalize(this.search));
      }
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

.dropdown-container {
  display: flex;
  flex-direction: column;
}

input {
  margin: auto;
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  outline: none;
}

.dropdown-contents {
  margin-top: 0%;
  margin-left: 9%;
  border: 1px solid #eeeeee;
  height: 120px;
  width: 55%;
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
    padding: 5px;
  }

  .dropdown-contents {
    border: 1px solid #eeeeee;
    margin-left: -10%;
    height: 120px;
    width: 140px;
    overflow: auto;
    outline: none;
    border: none;
  }
}

@media screen and (min-width: 375px) and (max-width: 390px) {
  input {
    padding: 5px
  }

  .dropdown-contents {
    border: 1px solid #eeeeee;
    margin-left: -10%;
    height: 120px;
    width: 140px;
    overflow: auto;
    outline: none;
    border: none;
  }
}

@media screen and (min-width: 400px) and (max-width: 420px) {
  input {
    padding: 5px;
  }

  .dropdown-contents {
    margin-left: -10%;
    border: 1px solid #eeeeee;
    height: 120px;
    width: 140px;
    overflow: auto;
    outline: none;
    border: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 900px) {
  input {
    padding: 20px;
  }

  .dropdown-contents {
    border: 1px solid #eeeeee;
    height: 120px;
    width: 175px;
    overflow: auto;
    outline: none;
    border: none;
  }
}
</style>
