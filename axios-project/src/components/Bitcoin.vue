<template>
  <div class="app">
    <h1>Bitcoin Price Index</h1>
    <div v-for="currency in info" class="currency" :key="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bitcoin',
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  },
  data () {
    return {
      info: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
