<template>
 <div :style="{color:colorie}">{{text}}</div>
</template>

<script>
export default {
  name: 'FromMsg',
  props: {
    text: String,
    colorie: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
