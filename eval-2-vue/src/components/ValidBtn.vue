<template>
  <div>
    <button v-on:click="$emit('step'), $emit('ajustPrice')">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: 'ValidBtn',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: right;
}
</style>
