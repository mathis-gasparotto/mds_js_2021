<template>
 <div :style="{color:colorie}">{{msg}}</div>
</template>

<script>
export default {
  name: 'FormMsg',
  props: {
    msg: String,
    colorie: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
