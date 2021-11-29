<template>
 <input v-on:click="$emit('validation'), $emit('step')" type="submit" v-bind:value="text" /> <!-- Quand j'appuie sur le bouton, je vérifier les champs -->
</template>

<script>
export default {
  name: 'BtnForm',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
