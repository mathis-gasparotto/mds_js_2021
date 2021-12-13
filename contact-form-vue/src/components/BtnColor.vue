<template>
 <button v-on:click="$emit('color')">{{text}}</button>
</template>

<script>
export default {
  name: 'BtnColor',
  props: {
    text: String,
    color: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
