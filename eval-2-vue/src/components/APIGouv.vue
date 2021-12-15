<template>
  <div>
    <p>Premier jour férié de la liste : {{publicHolidayObj}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'APIGouv',
  props: {
    text: String
  },
  mounted () {
    axios
      .get('https://calendrier.api.gouv.fr/jours-feries/metropole.json')
      .then(response => (this.publicHolidayObj = response.data))
  },
  data () {
    return {
      publicHolidayObj: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: right;
}
</style>
