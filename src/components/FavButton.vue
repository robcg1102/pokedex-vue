<template>
  <h4>Favorito</h4>
  <p class="heart" v-if="!onFavPokemon">
    <i class="ri-heart-3-line" @click="favPokemon"></i>
  </p>
  <p class="heart" v-if="onFavPokemon">
    <i class="ri-heart-3-fill" @click="deleteFavPokemon"></i>
  </p>
</template>

<script setup>
import { onMounted } from "vue";

import { useSearchPokemon } from "../stores/searchPokemon";
import { useFavsPokemon } from "../stores/favsPokemon";
import { ref } from "vue";

const searchPokemonStore = useSearchPokemon();
const favsPokemonStore = useFavsPokemon();
const onFavPokemon = ref(false);

onMounted(() => {
  validateFavPokemon();
});

const validateFavPokemon = () => {
  const data = JSON.parse(localStorage.getItem("favsPokemon")) || null;
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] === searchPokemonStore.data.name) {
        console.log("Sí está tu pokemon");
        onFavPokemon.value = true;
        return null;
      }
    }
    
  }
  onFavPokemon.value = false;
  console.log(
    searchPokemonStore.data.name,
    "No está en me gusta",
    onFavPokemon.value
  );
};

const favPokemon = () => {
  const favPokemon = [
    searchPokemonStore.data.name,
    searchPokemonStore.data.sprites.front_default,
  ];
  if (localStorage.getItem("favsPokemon")) {
    const data = JSON.parse(localStorage.getItem("favsPokemon"));
    const filterData = data.filter((pokemon) => pokemon[0] != favPokemon[0]);
    filterData.push(favPokemon);
    favsPokemonStore.setFavsPokemon(filterData);
    localStorage.setItem("favsPokemon", JSON.stringify(filterData));
  } else {
    localStorage.setItem("favsPokemon", JSON.stringify([favPokemon]));
    favsPokemonStore.setFavsPokemon([favPokemon]);
  }
  validateFavPokemon();
};

const deleteFavPokemon = () => {
  const data = JSON.parse(localStorage.getItem("favsPokemon"));
  const filterData = data.filter(
    (pokemon) => pokemon[0] != searchPokemonStore.data.name
  );
  favsPokemonStore.setFavsPokemon(filterData);
  localStorage.setItem("favsPokemon", JSON.stringify(filterData));
  validateFavPokemon();
};
</script>

<style>
</style>