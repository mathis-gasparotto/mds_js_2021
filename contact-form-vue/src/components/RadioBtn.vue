<template>
  <span>{{label}}</span>
  <span v-for="option in options" :key="option">
    <input type="radio" v-bind:id="option.idRadio" v-bind:name="name" v-bind:value="option.val">
    <label v-bind:for="option.idRadio">{{option.text}}</label>
  </span>
</template>

<script>
export default {
  name: 'RadioBtn',
  props: {
    name: String,
    text: String,
    val: String,
    idRadio: String,
    label: String
  },
  data(){   
  return {  
    options: [ 
      {
        val: 'Masc',
        text: 'Masculin',
        idRadio: 'masc'
      }, 
      {
        val: 'Fem',
        text: 'Féminin',
        idRadio: 'fem'
      },
      {
        val: 'NB',
        text: 'Non Binaire',
        idRadio: 'nb'
      }
    ]
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
