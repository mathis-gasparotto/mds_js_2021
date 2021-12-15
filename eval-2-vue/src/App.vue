<template>
  <APIGouv />
  <section>
    <div id="product-img">
      <img alt="tringle-rail" src="./assets/tringles-rail.jpg" />
    </div>
    <div id="product-infos">
    <h2>Personnalisez votre produit :</h2>
      <form v-on:submit.prevent="onSubmit">
        <div id="form-1" v-if="step >= '1'">
          <div class="step-title">
            <span :style="{background:colorStep1Status}">1</span>
            <h3>J'indique mes dimensions</h3>
          </div>
          <NumberInput label="Longeur du rail : " min="0" max="200" name="rail-lenght" />
          <ValidBtn v-on:step="step='2', colorStep1Status='#7b7be7'" v-on:ajustPrice="ajustPriceLenght()" text="Valider" />
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
          <ValidBtn v-on:step="step='3', colorStep2Status='#7b7be7'" v-on:ajustPrice="ajustPriceModel()" text="Valider" />
        </div>
        <div id="form-3" v-if="step >= '3'">
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
          <ValidBtn v-on:step="step='4', colorStep3Status='#7b7be7'" v-on:ajustPrice="ajustPriceColor()" text="Valider" />
        </div>

        <AddToCartBtn v-if="step >= '4'" text="Ajouter au panier" v-on:addToCart="addToCart=true" />

      </form>
      <ul id="step-status">
      Étape : 
        <li :style="{background:colorStep1Status}">1</li>
        <li :style="{background:colorStep2Status}">2</li>
        <li :style="{background:colorStep3Status}">3</li>
      </ul>

      <div id="total-price">
        Prix total : {{price}}
      </div>
      
      <div id="addToCart-msg" v-if="addToCart === true">
        <p>Produit ajouté au panier</p>
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

export default {
  name: 'App',
  components: {
    NumberInput,
    ValidBtn,
    RadioBtnModel,
    RadioBtnColor,
    AddToCartBtn,
    APIGouv
  },
  data() {
    return {
      step: '1',
      colorStep1Status: '#e2ebef',
      colorStep2Status: '#e2ebef',
      colorStep3Status: '#e2ebef',
      price: 0,
      addToCart: false
    }
  },
  methods: {
      ajustPriceLenght() {
        var lenght = document.getElementById("rail-lenght").value;
        if (lenght >= 100) {
          this.price += 150;
        } else {
          this.price += 80;
        }
      },
      ajustPriceModel() {
        if (document.getElementById("cs").checked) {
          this.price += 50;
        } 
        if (document.getElementById("ds").checked) {
          this.price += 30;
        }
      },
      ajustPriceColor() {
        if (document.getElementById("black").checked) {
          this.price += 20;
        } 
        if (document.getElementById("white").checked) {
          this.price += 20;
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
  background-color: #e2ebef;
  border-radius: 50%;
  font-size: 20px;
}
#total-price::after {
  content: " € TTC";
}
#addToCart-msg {
  background-color: #66f166;
  padding: 5px 10px;
  margin-top: 20px;
}
</style>
