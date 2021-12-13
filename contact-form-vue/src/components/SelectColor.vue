<template>
  <label v-bind:for="name">{{label}}</label>
  <select v-bind:name="name" v-bind:id="name" v-model="selected">
    <option value="null" disabled>--Choisissez une couleur--</option>
    <option v-for="option in options" v-bind:value="option.val" :key="option" v-on:select="$emit(option.val)" >{{option.text}}</option>
  </select>
</template>

<script>
export default {
  name: 'SelectColor',
  props: {
    name: String,
    label: String
  },
  data(){   
  return {  
    selected: "null",
    options: [ 
      {
        val: 'blue',
        text: 'Bleu'
      }, 
      {
        val: 'white',
        text: 'Blanc'
      },
      {
        val: 'red',
        text: 'Rouge'
      }
    ]
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
