<template>
  <div>
    <button type="reset" v-on:click="$emit('resetStep')">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: 'ResetBtn',
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
