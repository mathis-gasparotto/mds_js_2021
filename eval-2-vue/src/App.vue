<template>
  <APIGouv />
  <section>
    <div id="product-img">
      <img alt="tringle-rail" src="./assets/tringles-rail.jpg" />
    </div>
    <div id="product-infos">
    <h2>Personnalisez votre produit :</h2>
      <form v-on:submit.prevent="onSubmit">
        <div id="form-1" v-if="step >= 1">
          <div class="step-title">
            <span :style="{background:colorStep1Status}">1</span>
            <h3>J'indique mes dimensions</h3>
          </div>
          <div id="rail-lenght-container">
            <NumberInput label="Longeur du rail (0-200cm) : " min="0" max="200" name="rail-lenght" />
            <span>cm</span>
          </div>
          <ValidBtn v-if="step === 1" v-on:ajustPrice="ajustPriceLenght()" text="Valider" />
        </div>
        <div id="form-2" v-if="step >= '2'">
          <div class="step-title">
            <span :style="{background:colorStep2Status}">2</span>
            <h3>J'indique mon type de rail</h3>
          </div>
          <RadioBtnModel label="" name="rail-type" />
          <!-- Si je stock les valeurs sur le App.vue -->
          <!-- <RadioBtn label="" name="rail-type" :items="[
            {
              val: 'ds',
              text: 'Modèle DS'
            }, 
            {
              val: 'cs',
              text: 'Modèle cs'
            }
          ]" /> -->
          <ValidBtn v-if="step === 2" v-on:ajustPrice="ajustPriceModel()" text="Valider" />
        </div>
        <div id="form-3" v-if="step >= 3">
          <div class="step-title">
            <span :style="{background:colorStep3Status}">3</span>
            <h3>Je séléctionne ma couleur</h3>
          </div>
          <RadioBtnColor label="" name="color" />
          <!-- Si je stock les valeurs sur le App.vue -->
          <!-- <RadioBtn label="" name="rail-type" :items="[
            {
              val: 'black',
              text: 'Noir'
            }, 
            {
              val: 'white',
              text: 'Blanc'
            }
          ]" /> -->
          <ValidBtn v-if="step === 3" v-on:ajustPrice="ajustPriceColor()" text="Valider" />
        </div>

        <AddToCartBtn v-if="step === 4" text="Ajouter au panier" v-on:addToCart="addToCart=true" />

        <ResetBtn v-if="step === 4" text="Recommencer la personnalisation" v-on:resetStep="addToCart=false, step=1, price=0, colorStep1Status=colorUnvalidStep, colorStep2Status=colorUnvalidStep, colorStep3Status=colorUnvalidStep" />

      </form>
      <ul id="step-status">
      Étapes : 
        <li :style="{background:colorStep1Status}">1</li>
        <li :style="{background:colorStep2Status}">2</li>
        <li :style="{background:colorStep3Status}">3</li>
      </ul>

      <div id="total-price">
        Prix total : {{price}}
      </div>
      
      <div id="addToCart-msg" class="info-msg succes-msg" v-if="addToCart === true">
        <p>Produit ajouté au panier</p>
      </div>
      <div id="error-step1-msg" class="info-msg error-msg" v-if="errorStep1 === true">
        <p>Veuillez sélectionner un longueur de rail entre 0 et 200 cm</p>
      </div>
      <div id="error-step2-msg" class="info-msg error-msg" v-if="errorStep2 === true">
        <p>Veuillez sélectionner un type de modèle</p>
      </div>
      <div id="error-step3-msg" class="info-msg error-msg" v-if="errorStep3 === true">
        <p>Veuillez sélectionner une couleur</p>
      </div>

    </div>
  </section>
  
</template>

<script>
import NumberInput from './components/NumberInput.vue'
import ValidBtn from './components/ValidBtn.vue'
import RadioBtnModel from './components/RadioBtnModel.vue'
import RadioBtnColor from './components/RadioBtnColor.vue'
import AddToCartBtn from './components/AddToCartBtn.vue'
import APIGouv from './components/APIGouv.vue'
import ResetBtn from './components/ResetBtn.vue'

export default {
  name: 'App',
  components: {
    NumberInput,
    ValidBtn,
    RadioBtnModel,
    RadioBtnColor,
    AddToCartBtn,
    APIGouv,
    ResetBtn
  },
  data() {
    return {
      step: 1,
      colorValidStep: '#7b7be7',
      colorUnvalidStep: '#e2ebef',
      colorStep1Status: '#e2ebef',
      colorStep2Status: '#e2ebef',
      colorStep3Status: '#e2ebef',
      price: 0,
      addToCart: false,
      errorStep1: false,
      errorStep2: false,
      errorStep3: false
    }
  },
  methods: {
      ajustPriceLenght() {
        var lenght = document.getElementById("rail-lenght").value;
        if (lenght <=200) {
          if (lenght >= 100) {
            this.price += 150;
          } else {
            this.price += 80;
          }
          this.step=2;
          this.colorStep1Status=this.colorValidStep;
          this.errorStep1=false;
        } else {
          this.errorStep1=true;
        }
      },
      ajustPriceModel() {
        if (document.getElementById("cs").checked || document.getElementById("ds").checked) {
          if (document.getElementById("cs").checked) {
            this.price += 50;
          } 
          if (document.getElementById("ds").checked) {
            this.price += 30;
          }
          this.step=3;
          this.colorStep2Status=this.colorValidStep;
          this.errorStep2=false;
        } else {
          this.errorStep2=true;
        }
        
      },
      ajustPriceColor() {
        if (document.getElementById("black").checked || document.getElementById("white").checked) {
          if (document.getElementById("black").checked) {
            this.price += 20;
          } 
          if (document.getElementById("white").checked) {
            this.price += 20;
          }
          this.step=4;
          this.colorStep3Status=this.colorValidStep;
          this.errorStep3=false;
        } else {
          this.errorStep3=true;
        }
        
      }
    }
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
section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#product-img, #product-infos {
  width: 30vw;
}
#product-img {
  margin-right: 15px;
}
#product-infos {
  margin-left: 15px;
}
img {
  max-width: 100%;
}
#step-status {
  list-style-type: none;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
}
#step-status li {
  padding: 10px 15px;
  margin: 0 10px;
  border-radius: 50%;
}
.step-title {
  display: flex;
  align-items: center;
}
.step-title span {
  margin-right: 30px;
  padding: 20px 25px;
  border-radius: 50%;
  font-size: 20px;
}
#total-price::after {
  content: " € TTC";
}
#rail-lenght-container span {
  margin-left: 5px;
}
.info-msg {
  padding: 5px 10px;
  margin-top: 20px;
}
.succes-msg {
  background-color: #66f166;
}
.error-msg {
  background-color: #DD6666;
}
.error-msg p {
  color: white;
}
</style>
