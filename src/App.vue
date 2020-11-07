<template>
<div id="app">
  <div id="menu">
    <div id="left">
      <router-link to="/pokemonTypes">
          <div class="menu-item browse">
            <img src="/images/backpack.png">
            <p class="center">Pokemon Types</p>
          </div>
        </router-link>
    </div>
    <div id="brand">
      <router-link to="/">
        <img src="/images/poke.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/pokedexView">
        <div class="menu-item">
          <img src="/images/dex.png">
          <p class="center">{{ current }} Caught</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  </div>

</template>

<script>
export default{
  computed: {
    current(){
      return this.$root.$data.pokedex.length;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.center{
  text-align: center;
}

body {
  margin: 50px 100px;

}

#menu {
  display: flex;
  justify-content: space-around;
}

#menu a {
  color: #B84901;
}


#brand img {
  height: 400px;
}

#left img {
  width: 50px;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
~
~
~
~

