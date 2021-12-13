<template>
<SearchAutocomplete :items="['Bitcoin','Ethereum','Algorand','Cosmos','Tezos','Dogecoin','SHIBA INU','DAI','Pioucoin']" />
</template>

<script>
import SearchAutocomplete from './components/SearchAutocomplete.vue'

export default {
  name: 'App',
  components: {
    SearchAutocomplete
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
