<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <ul id="name-list">
  <li v-for="name in names" :key="name.character">{{ name.character }}</li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){   
  return {  
    names: [
      {character: "John Wick"}, 
      {character: "Harry Potter"},      
      {character: "Petter Griffin"},
      {character: "James Bond"}
    ]
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
