<template>
  <label v-bind:for="name">{{label}}</label>
  <input type="date" v-bind:id="name" />
</template>

<script>
export default {
  name: 'DateInput',
  props: {
    label: String,
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
