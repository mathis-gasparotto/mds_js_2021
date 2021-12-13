<template>
  <Bitcoin />
  <Github />
</template>

<script>
import Bitcoin from './components/Bitcoin.vue'
import Github from './components/Github.vue'

export default {
  name: 'App',
  components: {
    Bitcoin,
    Github
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F5F3E9;
  margin-top: 60px;
}
body {
  background-color: #14171c;
}
</style>
