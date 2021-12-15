<template>
  <div>
    <button type="submit" v-on:click="$emit('addToCart')">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: 'AddToCartBtn',
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
