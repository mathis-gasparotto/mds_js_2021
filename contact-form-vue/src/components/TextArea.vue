<template>
  <label v-bind:for="name">{{label}}</label>
  <textarea v-bind:name="name" v-bind:id="name" v-bind:cols="col" v-bind:rows="row"></textarea>

</template>

<script>
export default {
  name: 'Title',
  props: {
    name: String,
    label: String,
    col: String,
    row: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
