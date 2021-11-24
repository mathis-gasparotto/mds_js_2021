<template>
  <input type="button" onclick='document.location.reload(false)' v-bind:value="txt"/>
</template>

<script>
export default {
  name: 'BtnRefresh',
  props: {
    txt: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
