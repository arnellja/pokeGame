<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <PokemonList :pokemon="pokemon" />
  <footer><a href="https://github.com/arnellja/pokeGame.git">Github</a></footer>
</div>
</template>

<script>
import PokemonList from "../components/PokemonList.vue"
export default {
  name: 'Home',
  components: {
    PokemonList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokemon.filter(poke => poke.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
~

