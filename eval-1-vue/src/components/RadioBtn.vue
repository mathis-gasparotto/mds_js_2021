<template>
  <span>{{label}}</span>
  <span v-for="option in options" :key="option" v-bind:class="option.class">
    <input type="radio" v-bind:id="option.val" v-bind:name="name" v-bind:value="option.val">
    <label v-bind:for="option.val">{{option.text}}</label>
  </span>
</template>

<script>
export default {
  name: 'RadioBtn',
  props: {
    name: String,
    text: String,
    val: String,
    label: String,
    class: String
  },
  data(){   
  return {  
    options: [ 
      {
        val: '12-00',
        text: '12:00',
        class: 'regular'
      }, 
      {
        val: '12-30',
        text: '12:30',
        class: 'regular'
      }, 
      {
        val: '13-00',
        text: '13:00',
        class: 'regular'
      }, 
      {
        val: '13-30',
        text: '13:30',
        class: 'regular'
      }, 
      {
        val: '14-00',
        text: '14:00',
        class: 'prime'
      }, 
      {
        val: '14-30',
        text: '14:30',
        class: 'prime'
      }, 
      {
        val: '15-00',
        text: '15:00',
        class: 'prime'
      }, 
      {
        val: '15-30',
        text: '15:30',
        class: 'regular'
      }, 
      {
        val: '16-00',
        text: '16:00',
        class: 'regular'
      }, 
      {
        val: '18-00',
        text: '18:00',
        class: 'premium'
      }, 
      {
        val: '18-30',
        text: '18:30',
        class: 'premium'
      }, 
      {
        val: '19-00',
        text: '19:00',
        class: 'premium'
      }, 
      {
        val: '19-30',
        text: '19:30',
        class: 'premium'
      }
    ]
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Ajout des styles d'horaire (.selected correspond au style de l'horaire sélectionnée)*/
  .regular {
    color: black;
    border: 1px solid gray;
  }
  .regular.selected {
    color: white;
    background-color: black;
  }
  .prime {
    color: #8849e1;
    border: 1px solid #8849e1;
  }
  .prime.selected {
    color: white;
    background-color: #8849e1;
  }
  .premium {
    color: #06b122;
    border: 1px solid #06b122;
  }
  .premium.selected {
    color: white;
    background-color: #06b122;
  }
  input[type="radio"] { /*je cache la pilule*/
    display: none;
  }
</style>
