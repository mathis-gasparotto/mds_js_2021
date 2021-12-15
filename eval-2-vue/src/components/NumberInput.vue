<template>
  <label v-bind:for="name">{{label}}</label>
  <input type="number" v-bind:name="name" v-bind:id="name" v-bind:min="min" v-bind:max="max" />
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    name: String,
    label: String,
    max: Number,
    min: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
