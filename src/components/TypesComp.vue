<template>
  <h4>Tipo</h4>

  <p v-for="type in searchPokemonStore.data.types" :key="type.type.name">
    {{ type.type.name.toUpperCase() }}
  </p>
</template>

<script setup>
import { useSearchPokemon } from "../stores/searchPokemon";

const searchPokemonStore = useSearchPokemon();
</script>

<style>
</style>