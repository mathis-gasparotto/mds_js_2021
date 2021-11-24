<template>
  <span>{{label}}</span>
  <span v-for="option in options" :key="option">
    <input type="checkbox" v-bind:id="option.idCheckbox" v-bind:name="option.name" v-bind:value="option.val">
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
        idCheckbox: 'market',
        name: 'market'
      }, 
      {
        val: 'Dev',
        text: 'Développement',
        idCheckbox: 'dev',
        name: 'dev'
      },
      {
        val: 'WebDesign',
        text: 'Web Design',
        idCheckbox: 'design',
        name: 'design'
      },
      {
        val: 'ProdManag',
        text: 'Product Manager',
        idCheckbox: 'manag',
        name: 'manag'
      }
    ]
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
