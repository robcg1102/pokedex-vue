<template>
  <div class="monitor">
    <div v-if="searchPokemonStore.data">
      <h3>
        Nombre: {{ searchPokemonStore.data.name.toUpperCase() }} - No.
        {{ searchPokemonStore.data.id }}
      </h3>
      <img :src="searchPokemonStore.data.sprites.front_default" />
      <img :src="searchPokemonStore.data.sprites.back_default" />
      <p>
        <span><b>Peso:</b> {{ searchPokemonStore.data.weight / 10 }} kg</span> -
        <span><b>Altura:</b> {{ searchPokemonStore.data.height / 10 }} m</span>
      </p>
      <hr />
      <div>
        <AbilitiesComp />
      </div>
      <hr />
      <div>
        <TypesComp />
      </div>
      <hr />
      <div>
        <FavButton />
      </div>
    </div>
    <LoadingComp v-if="searchPokemonStore.loading" />

    <p v-if="searchPokemonStore.error">
      No hay información en la base de datos de ese pokemon...
    </p>
  </div>
</template>

<script setup>
import LoadingComp from "../components/LoadingComp.vue";
import FavButton from "../components/FavButton.vue";
import AbilitiesComp from "../components/AbilitiesComp.vue";
import TypesComp from "../components/TypesComp.vue";

import { useSearchPokemon } from "../stores/searchPokemon";

const searchPokemonStore = useSearchPokemon();
</script>

<style>


hr {
  color: white;
  margin: 15px 0;
}
p {
  margin: 5px 0;
}

.heart {
  font-size: xx-large;
  color: red;
  padding: 2px 0;
}

.heart:hover {
  cursor: pointer;
}

@media only screen and (max-width: 850px) {
  .monitor {
    height: 80vh;
  }
}
</style>