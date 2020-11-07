(function(e){function t(t){for(var i,s,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},r=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"375d":function(e,t,a){},"51f4":function(e,t,a){"use strict";a("96be")},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"menu"}},[a("div",{attrs:{id:"left"}},[a("router-link",{attrs:{to:"/pokemonTypes"}},[a("div",{staticClass:"menu-item browse"},[a("img",{attrs:{src:"/images/backpack.png"}}),a("p",{staticClass:"center"},[e._v("Pokemon Types")])])])],1),a("div",{attrs:{id:"brand"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"/images/poke.png"}})])],1),a("div",{attrs:{id:"side"}},[a("router-link",{attrs:{to:"/pokedexView"}},[a("div",{staticClass:"menu-item"},[a("img",{attrs:{src:"/images/dex.png"}}),a("p",{staticClass:"center"},[e._v(e._s(e.current)+" Caught")])])])],1)]),a("router-view")],1)},r=[],s={computed:{current(){return this.$root.$data.pokedex.length}}},o=s,c=(a("034f"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,null,null),p=l.exports,u=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"search"},[a("form",{staticClass:"pure-form"},[a("i",{staticClass:"fas fa-search"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})])])]),a("PokemonList",{attrs:{pokemon:e.pokemon}}),e._m(0)],1)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("a",{attrs:{href:"https://github.com/arnellja/pokeGame.git"}},[e._v("Github")])])}],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"products"},e._l(e.pokemon,(function(t){return a("div",{key:t.id,staticClass:"product"},[a("div",{staticClass:"info"},[a("h1",[e._v(e._s(t.name))]),a("p",[e._v(e._s(t.type))])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:"/images/"+t.image}})]),a("div",{staticClass:"price"},[a("h2",[e._v(e._s(t.health))]),a("button",{staticClass:"auto",on:{click:function(a){return e.catchPoke(t)}}},[e._v("Catch!")])])])})),0)])},g=[],f={name:"PokemonList",props:{pokemon:Array},methods:{catchPoke(e){this.$root.$data.pokedex.push(e)}}},v=f,k=(a("51f4"),Object(c["a"])(v,d,g,!1,null,"520b5bee",null)),y=k.exports,P={name:"Home",components:{PokemonList:y},data(){return{searchText:""}},computed:{pokemon(){return this.$root.$data.pokemon.filter(e=>e.name.toLowerCase().includes(this.searchText.toLowerCase()))}}},C=P,_=(a("a5a3"),Object(c["a"])(C,m,h,!1,null,"4ae2fdef",null)),b=_.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"pure-menu pure-menu-horizontal"},[a("ul",{staticClass:"pure-menu-list"},[a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Fire")}}},[e._v("Fire")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Grass")}}},[e._v("Grass")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Water")}}},[e._v("Water")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Dragon")}}},[e._v("Dragon")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Rock")}}},[e._v("Rock")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Psychic")}}},[e._v("Psychic")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Bird")}}},[e._v("Bird")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Bug")}}},[e._v("Bug")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("Fighting")}}},[e._v("Fighting")])])])]),a("PokemonList",{attrs:{pokemon:e.pokemon}})],1)},x=[],w={name:"PokemonTypes",components:{PokemonList:y},data(){return{type:""}},computed:{pokemon(){return this.$root.$data.pokemon.filter(e=>e.type===this.type)}},methods:{select(e){this.type=e}}},H=w,$=(a("a5cc"),Object(c["a"])(H,j,x,!1,null,null,null)),O=$.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CurrentPokedex",{attrs:{pokemon:e.pokemon}})],1)},B=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"products"},[0==this.$root.$data.pokedex.length?a("div",[a("strong",[e._v("You have not yet caught any Pokemon!")])]):a("div",e._l(this.$root.$data.pokedex,(function(t){return a("div",{key:t.id,staticClass:"product"},[a("div",{staticClass:"info"},[a("h1",[e._v(e._s(t.name))]),a("p",[e._v(e._s(t.type))])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:"/images/"+t.image}})]),a("div",{staticClass:"price"},[a("h2",[e._v(e._s(t.health))]),a("button",{staticClass:"auto",on:{click:function(a){return e.removeItem(t)}}},[e._v("Release")])])])})),0)])])},L=[],M={name:"CurrentPokedex",props:{pokemon:Array},methods:{removeItem(e){let t=this.$root.$data.pokedex.indexOf(e);this.$root.$data.pokedex.splice(t,1)}}},E=M,W=(a("fdcb"),Object(c["a"])(E,F,L,!1,null,"0f7b1e94",null)),D=W.exports,G={name:"PokedexView",components:{CurrentPokedex:D},data(){return{searchText:""}},computed:{pokemon(){return this.$root.$data.pokedex.filter(e=>e.name.toLowerCase().search(this.searchText)>=0)}}},S=G,V=(a("e1b2"),Object(c["a"])(S,T,B,!1,null,"1993f7fa",null)),R=V.exports;i["a"].use(u["a"]);const z=[{path:"/",name:"Home",component:b},{path:"/pokemonTypes",name:"PokemonTypes",component:O},{path:"/pokedexView",name:"PokedexView",component:R}],A=new u["a"]({mode:"history",base:"/",routes:z});var J=A;let I={pokemon:[{id:1,name:"Pikachu",health:"80 HP",type:"Electric",image:"pikachu.jpg"},{id:2,name:"Charizard",health:"300 HP",type:"Fire",image:"charizard.jpg"},{id:3,name:"Blastoise",health:"300 HP",type:"Water",image:"blastoise.jpg"},{id:4,name:"Vinosaur",health:"300 HP",type:"Grass",image:"vinosaur.png"},{id:5,name:"Articuno",health:"350 HP",type:"Water",image:"articuno.jpg"},{id:6,name:"Zapdos",health:"350 HP",type:"electric",image:"zapdos.jpg"},{id:7,name:"Moltres",health:"350 HP",type:"Fire",image:"moltres.jpg"},{id:8,name:"Mewtwo",health:"500 HP",type:"Psychic",image:"mewtwo.jpg"},{id:9,name:"Beedrill",health:"150 HP",type:"Bug",image:"beedrill.jpg"},{id:10,name:"Butterfree",health:"150 HP",type:"Bug",image:"butterfree.jpg"},{id:11,name:"Starmie",health:"200 HP",type:"Water",image:"starmie.jpg"},{id:12,name:"Gyrados",health:"300 HP",type:"Dragon",image:"gyrados.jpg"},{id:13,name:"Dragonite",health:"350 HP",type:"Dragon",image:"dragonite.jpg"},{id:14,name:"Onyx",health:"250 HP",type:"Rock",image:"onyx.jpg"},{id:15,name:"Machamp",health:"300 HP",type:"Fighting",image:"machamp.jpg"},{id:16,name:"Hit Mon Champ",health:"250 HP",type:"Fighting",image:"hitchamp.jpg"},{id:17,name:"Hit Mon Lee",health:"250 HP",type:"Fighting",image:"hitlee.jpg"},{id:18,name:"Magmar",health:"200 HP",type:"Fire",image:"magmar.jpg"},{id:19,name:"Vulpix",health:"150 HP",type:"Fire",image:"vulpix.jpg"},{id:20,name:"Golem",health:"300 HP",type:"Rock",image:"golem.jpg"},{id:21,name:"Lapras",health:"300 HP",type:"Water",image:"lapras.jpg"},{id:22,name:"Vaporeon",health:"150 HP",type:"Water",image:"vaporeon.jpg"},{id:23,name:"Diglet",health:"100 HP",type:"Rock",image:"diglet.jpg"},{id:24,name:"Pidgeot",health:"275 HP",type:"Bird",image:"pidgeot.jpg"},{id:25,name:"Fearow",health:"250 HP",type:"Bird",image:"fearow.jpg"},{id:26,name:"Scythar",health:"200 HP",type:"Bug",image:"scythar.jpg"},{id:27,name:"Pincer",health:"200 HP",type:"Bug",image:"pincer.jpg"},{id:28,name:"Tentacruel",health:"200 HP",type:"Water",image:"tentacruel.jpg"},{id:29,name:"Ditto",health:"Unknown",type:"Psychic",image:"ditto.jpg"},{id:30,name:"Jynx",health:"200 HP",type:"Psychic",image:"jynx.jpg"}],pokedex:[]};new i["a"]({router:J,data:I,render:e=>e(p)}).$mount("#app")},"85ec":function(e,t,a){},"96be":function(e,t,a){},"9c37":function(e,t,a){},a5a3:function(e,t,a){"use strict";a("375d")},a5cc:function(e,t,a){"use strict";a("ab5a")},ab5a:function(e,t,a){},cdc4:function(e,t,a){},e1b2:function(e,t,a){"use strict";a("cdc4")},fdcb:function(e,t,a){"use strict";a("9c37")}});
//# sourceMappingURL=app.e1fb6982.js.map