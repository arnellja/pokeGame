<template>
<div>
  <CurrentPokedex :pokemon = "pokemon"/>
</div>
</template>

<script>
import CurrentPokedex from "../components/CurrentPokedex.vue"
export default {
  name: 'PokedexView',
  components: {
    CurrentPokedex
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokedex.filter(poke => poke.name.toLowerCase().search(this.searchText) >= 0);
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


