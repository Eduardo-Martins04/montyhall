<template>
  <div id="app2">
    <h1>Problema de Monty Hall</h1>
    <div class="form">
      <div v-if="!starded">
        <label for="portsAmount">Quantas portas?</label>
        <input
          type="text"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
        />
      </div>
      <div v-if="!starded">
        <label for="selectPort">Qual porta é premiada? </label>
        <input
          type="text"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>
      <button v-if="!starded" @click="checkEntries()">Iniciar</button>
      <button v-if="starded" @click="starded = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="starded">
      <div v-for="i in portsAmount" :key="i">
        <CompDoor :hasGift="i === selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import CompDoor from "./components/CompDoor.vue";
export default {
  name: "App",
  components: { CompDoor },
  data: function () {
    return {
      starded: false,
      portsAmount: 3,
      selectedPort: null,
    };
  },
  methods: {
   checkEntries() {
      const selectedPort = parseFloat(this.selectedPort);
      const portsAmount = parseFloat(this.portsAmount);

      if (selectedPort > portsAmount) {
        alert("A porta premiada não pode ser maior que o total de portas");
        return false;
      } else if (!selectedPort) {
        alert("Selecione qual será a porta premiada");
        return false;
      } else {
        this.starded = true
      }
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat" sans-serif;
}

body {
  color: #fff;
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app2 h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>