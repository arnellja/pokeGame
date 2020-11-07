import Vue from 'vue'
import App from './App.vue'
import router from './router'

let data = {
  pokemon: [
  {
    id: 1,
    name: "Pikachu",
    health: "80 HP",
    type: "Electric",
    image: "pikachu.jpg"

  },
  {
    id: 2,
    name: "Charizard",
    health: "300 HP",
    type: "Fire",
    image: "charizard.jpg"

  },
  {
    id: 3,
    name: "Blastoise",
    health: "300 HP",
    type: "Water",
    image: "blastoise.jpg"

  },
  {
    id: 4,
    name: "Vinosaur",
    health: "300 HP",
    type: "Grass",
    image: "vinosaur.png"

  },
  {
    id: 5,
    name: "Articuno",
    health: "350 HP",
    type: "Water",
    image: "articuno.jpg"

  },
  {
    id: 6,
    name: "Zapdos",
    health: "350 HP",
    type: "electric",
    image: "zapdos.jpg"

  },
  {
    id: 7,
    name: "Moltres",
    health: "350 HP",
    type: "Fire",
    image: "moltres.jpg"

  },
  {
    id: 8,
    name: "Mewtwo",
    health: "500 HP",
    type: "Psychic",
    image: "mewtwo.jpg"

  },
  {
    id: 9,
    name: "Beedrill",
    health: "150 HP",
    type: "Bug",
    image: "beedrill.jpg"

  },
  {
    id: 10,
    name: "Butterfree",
    health: "150 HP",
    type: "Bug",
    image: "butterfree.jpg"

  },
  {
    id: 11,
    name: "Starmie",
    health: "200 HP",
    type: "Water",
    image: "starmie.jpg"

  },
  {
    id: 12,
    name: "Gyrados",
    health: "300 HP",
    type: "Dragon",
    image: "gyrados.jpg"

  },
  {
    id: 13,
    name: "Dragonite",
    health: "350 HP",
    type: "Dragon",
    image: "dragonite.jpg"

  },
  {
    id: 14,
    name: "Onyx",
    health: "250 HP",
    type: "Rock",
    image: "onyx.jpg"

  },
  {
    id: 15,
    name: "Machamp",
    health: "300 HP",
    type: "Fighting",
    image: "machamp.jpg"

  },
  {
    id: 16,
    name: "Hit Mon Champ",
    health: "250 HP",
    type: "Fighting",
    image: "hitchamp.jpg"

  },
  {
    id: 17,
    name: "Hit Mon Lee",
    health: "250 HP",
    type: "Fighting",
    image: "hitlee.jpg"

  },
  {
    id: 18,
    name: "Magmar",
    health: "200 HP",
    type: "Fire",
    image: "magmar.jpg"

  },
  {
    id: 19,
    name: "Vulpix",
    health: "150 HP",
    type: "Fire",
    image: "vulpix.jpg"

  },
  {
    id: 20,
    name: "Golem",
    health: "300 HP",
    type: "Rock",
    image: "golem.jpg"

  },
  {
    id: 21,
    name: "Lapras",
    health: "300 HP",
    type: "Water",
    image: "lapras.jpg"

  },
  {
    id: 22,
    name: "Vaporeon",
    health: "150 HP",
    type: "Water",
    image: "vaporeon.jpg"

  },
  {
    id: 23,
    name: "Diglet",
    health: "100 HP",
    type: "Rock",
    image: "diglet.jpg"

  },
  {
    id: 24,
    name: "Pidgeot",
    health: "275 HP",
    type: "Bird",
    image: "pidgeot.jpg"

  },
  {
    id: 25,
    name: "Fearow",
    health: "250 HP",
    type: "Bird",
    image: "fearow.jpg"

  },
  {
    id: 26,
    name: "Scythar",
    health: "200 HP",
    type: "Bug",
    image: "scythar.jpg"

  },
  {
    id: 27,
    name: "Pincer",
    health: "200 HP",
    type: "Bug",
    image: "pincer.jpg"

  },
  {
    id: 28,
    name: "Tentacruel",
    health: "200 HP",
    type: "Water",
    image: "tentacruel.jpg"

  },
  {
    id: 29,
    name: "Ditto",
    health: "Unknown",
    type: "Psychic",
    image: "ditto.jpg"

  },
  {
    id: 30,
    name: "Jynx",
    health: "200 HP",
    type: "Psychic",
    image: "jynx.jpg"


  }],
  pokedex: []
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
