<template>
  <form @submit.prevent="searchPokemon">
    <input
      type="text"
      v-model="inputSearch"
      placeholder="Buscar pokémon"
      required
    />
    <button type="submit"><i class="ri-search-eye-line"></i></button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import { useSearchPokemon } from "../stores/searchPokemon";

const inputSearch = ref("");

const searchPokemonStore = useSearchPokemon();

const searchPokemon = () => {
  router.push("/")
  searchPokemonStore.searchPokemon(inputSearch.value.toLowerCase())
};

</script>

<style>
form {
  margin: 15px 0;
}

input {
  border-radius: 7px;
  padding: 4px 10px;
  margin: 2px 15px;
}
button {
  padding: 18px;
  border-radius: 50%;
  font-size: x-large;
}
button:hover {
  cursor: pointer;
}
</style>