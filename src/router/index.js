import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PokemonTypes from '../views/PokemonTypes.vue'
import PokedexView from '../views/PokedexView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemonTypes',
    name: 'PokemonTypes',
    component: PokemonTypes
  },
  {
    path: '/pokedexView',
    name: 'PokedexView',
    component: PokedexView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
