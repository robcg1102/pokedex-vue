<template>
  <div class="pokedex">
    <div class="sectionPokedex leftSection">
      <NavPokedex />
    </div>
    <div class="middleSection"></div>
    <div class="sectionPokedex">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import NavPokedex from "./components/NavPokedex.vue";
import { useFavsPokemon } from "./stores/favsPokemon";

const favPokeStore = useFavsPokemon();

onMounted(() => {
  if (localStorage.getItem("favsPokemon")) {
    const dataFav = JSON.parse(localStorage.getItem("favsPokemon"));
    favPokeStore.setFavsPokemon(dataFav);
  }
});
</script>

<style scoped>
.pokedex {
  display: flex;
  justify-content: center;
  height: 650px;
}
.sectionPokedex {
  width: 43%;
  background-color: #dc0a2d;
  padding: 20px 5px;
  border-radius: 20px;
  margin: 15px 0;
  border: black 1px solid;
}

.middleSection {
  width: 1%;
  background-color: #dc0a2d;
  margin: 15px 0;
  border-radius: 12px;
  border: black 1px solid;
}

.leftSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 850px) {
  .pokedex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .sectionPokedex {
    width: 95%;
    margin: 0 10px;
  }
  .middleSection {
    width: 97%;
    padding: 10px 0;
    margin: 0 10px;
  }
}
</style>
