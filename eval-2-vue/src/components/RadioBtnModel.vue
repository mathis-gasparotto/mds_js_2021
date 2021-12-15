<template>
  <span>{{label}}</span>
  <span v-for="option in options" :key="option">
  <!-- Si je stock les valeurs sur le App.vue -->
  <!-- <span v-for="(option, i) in options" :key="i"> -->
    <input type="radio" v-bind:id="option.val" v-bind:name="name" v-bind:value="option.val">
    <label v-bind:for="option.val">{{option.text}}</label>
  </span>
</template>

<script>
export default {
  name: 'RadioBtnModel',
  props: {
    name: String,
    text: String,
    val: String,
    label: String,
    // Si je stock les valeurs sur le App.vue
    /*items: {
      type: Array,
      required: false,
      default: () => [],
    }*/
  },
  data(){   
  return {  
    options: [ 
      {
        val: 'ds',
        text: 'Modèle DS'
      }, 
      {
        val: 'cs',
        text: 'Modèle CS'
      }
    ]
    // Si je stock les valeurs sur le App.vue
    // options: []
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
