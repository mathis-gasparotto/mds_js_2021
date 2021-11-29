<template>
<form v-on:submit.prevent="onSubmit">
  <DateInput label="Select a day" name="date"/>
  <RadioBtn label="Choose one of the avaible timeslots" name="slots"/>
  <FromMsg v-if="!valid" text="There are an error on this form" colorie="red" /> <!-- Je vérifie ce que les tests de champs ont donné comme résultat, pour savoir si j'affiche le message d'erreur -->
  <FromMsg v-if="valid" text="You have been added to the waiting list" colorie="green" /> <!-- Je vérifie ce que les tests de champs ont donné comme résultat, pour savoir si j'affiche le message de succès -->
  <BtnForm text="Save and continue" v-on:validation="valid()" /> <!-- Quand j'appuie sur le bouton, je lance la fonction valid pour vérifier les champs -->
</form>
</template>

<script>
import DateInput from './components/DateInput.vue'
import RadioBtn from './components/RadioBtn.vue'
import BtnForm from './components/BtnForm.vue'
import FromMsg from './components/FromMsg.vue'

export default {
  name: 'App',
  components: {
    DateInput,
    RadioBtn,
    BtnForm,
    FromMsg
  }/*,
  methods: {   
  valid() {
    var valid;
    var date;
    var slot;
    if (document.getElementById("date").val().length > 0) {
      date = true;
    } else {
      date = false;
    }
    if (date === true && slot === true) {
      valid = true;
    } else {
      valid = false;
    }
  }
}*/
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
form {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 400px;
  margin: auto;
}
</style>
