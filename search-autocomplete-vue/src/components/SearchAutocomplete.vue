<template>
  <div class="autocomplete">
    <input type="text" v-model="search" @input="onChange"/>
    <ul class="autocomplete-results" v-show="isOpen">
      <li class="autocomplete-result" v-for="(result, i) in results" :key="i" @click="setResult(result)">
        {{result}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchAutocomplete',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
      return {
        search: '',
        results: [],
        isOpen: false,
      };
    },
    methods: {
      setResult(result) {
        this.search = result;
        this.isOpen = false;
      },
      filterResults() {
        this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      },
      onChange() {
        this.filterResults();
        this.isOpen = true;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type : none;
}
ul {
  padding: 0;
}
</style>