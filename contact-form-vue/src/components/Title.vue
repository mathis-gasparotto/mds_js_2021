<template>
 <h1>{{title}}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 50px;
}
</style>
