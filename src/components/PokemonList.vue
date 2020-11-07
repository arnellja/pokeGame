<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="poke in pokemon" :key="poke.id">
      <div class="info">
        <h1>{{poke.name}}</h1>
        <p>{{poke.type}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+poke.image">
      </div>
      <div class="price">
        <h2>{{poke.health}}</h2>
        <button @click="catchPoke(poke)" class="auto">Catch!</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PokemonList',
  props: {
    pokemon: Array
  },
  methods: {
    catchPoke(poke){
      this.$root.$data.pokedex.push(poke);
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #d80e0e;
  color: white;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
~
~

