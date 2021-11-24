<template>
 <input v-on:click="$emit('validation'), $emit('step')" v-bind:type="type" v-bind:value="text" />
</template>

<script>
export default {
  name: 'BtnForm',
  props: {
    text: String,
    type: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
