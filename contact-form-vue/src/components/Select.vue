<template>
  <label v-bind:for="name">{{label}}</label>
  <select v-bind:name="name" v-bind:id="name" v-model="selected">
    <option value="null" disabled>--Choisissez une option--</option>
    <option v-for="option in options" v-bind:value="option.val" :key="option">{{option.text}}</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    name: String,
    label: String
  },
  data(){   
  return {  
    selected: "null",
    options: [ 
      {
        val: 'etudiant',
        text: 'Etudiant'
      }, 
      {
        val: 'professionnel',
        text: 'Professionnel'
      }
    ]
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
