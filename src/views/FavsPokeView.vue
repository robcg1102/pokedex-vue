<template>
  <div class="monitor">
    <h2>Tus favoritos</h2>
    <div class="containerCards">
      <div
        v-for="pokemon in favsPokeStore.favsPokemon"
        :key="pokemon[0]"
        class="cardFav"
        @click="searchPokemon(pokemon[0])"
      >
        <p class="cardName" >
          {{ pokemon[0].toUpperCase() }}
        </p>
        <img :src="pokemon[1]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import { useFavsPokemon } from "../stores/favsPokemon";
import { useSearchPokemon } from "../stores/searchPokemon";

const searchPokemonStore = useSearchPokemon();
const favsPokeStore = useFavsPokemon();

const searchPokemon = (namePokemon) => {
  router.push("/");
  searchPokemonStore.searchPokemon(namePokemon);
};
</script>

<style>

.containerCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cardFav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-top: 10px;
}

.cardFav:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>