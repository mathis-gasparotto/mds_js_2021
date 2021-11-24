<template>
 <button v-on:click="$emit('step')">{{text}}</button>
</template>

<script>
export default {
  name: 'BtnStep',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
