<template>
  <span>{{label}}</span>
  <span v-for="option in options" :key="option">
    <input type="checkbox" v-bind:id="option.idCheckbox" v-bind:name="name" v-bind:value="option.val">
    <label v-bind:for="option.idCheckbox">{{option.text}}</label>
  </span>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    name: String,
    text: String,
    val: String,
    idCheckbox: String,
    label: String
  },
  data(){   
  return {  
    options: [ 
      {
        val: 'Market',
        text: 'Marketing',
        idCheckbox: 'market'
      }, 
      {
        val: 'Dev',
        text: 'Développement',
        idCheckbox: 'dev'
      },
      {
        val: 'WebDesign',
        text: 'Web Design',
        idCheckbox: 'design'
      },
      {
        val: 'ProdManag',
        text: 'Product Manager',
        idCheckbox: 'manag'
      }
    ]
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
