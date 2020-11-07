<template>
<div class="wrapper">
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Fire')" href="#" class="pure-menu-link">Fire</a></li>
      <li class="pure-menu-item"><a @click="select('Grass')" href="#" class="pure-menu-link">Grass</a></li>
      <li class="pure-menu-item"><a @click="select('Water')" href="#" class="pure-menu-link">Water</a></li>
      <li class="pure-menu-item"><a @click="select('Dragon')" href="#" class="pure-menu-link">Dragon</a></li>
      <li class="pure-menu-item"><a @click="select('Rock')" href="#" class="pure-menu-link">Rock</a></li>
      <li class="pure-menu-item"><a @click="select('Psychic')" href="#" class="pure-menu-link">Psychic</a></li>
      <li class="pure-menu-item"><a @click="select('Bird')" href="#" class="pure-menu-link">Bird</a></li>
      <li class="pure-menu-item"><a @click="select('Bug')" href="#" class="pure-menu-link">Bug</a></li>
      <li class="pure-menu-item"><a @click="select('Fighting')" href="#" class="pure-menu-link">Fighting</a></li>
    </ul>
  </div>
  <PokemonList :pokemon="pokemon" />
</div>
</template>

<script>
import PokemonList from "../components/PokemonList.vue"
export default {
  name: 'PokemonTypes',
  components: {
    PokemonList
  },
  data() {
    return {
      type: '',
    }
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokemon.filter(poke => poke.type === this.type);
    }
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>

<style>

.wrapper{
  text-align: center !important;
}

</style>
