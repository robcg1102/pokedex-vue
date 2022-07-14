<template>
  <h4>Habilidades</h4>
  <p
    v-for="abilities in searchPokemonStore.data.abilities"
    :key="abilities.ability.name"
  >
    {{ abilities.ability.name.toUpperCase() }}
  </p>
</template>

<script setup>
import { useSearchPokemon } from "../stores/searchPokemon";

const searchPokemonStore = useSearchPokemon();
</script>

<style>
</style>