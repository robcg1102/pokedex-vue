<template>
  <div>
    <router-link to="/" class="redBtn">Búsqueda</router-link>
    <router-link to="/favspoke" class="blueBtn">Favoritos</router-link>
  </div>
  <img src="../assets/pokeball.png" alt="" width="200" />
  <SearchInput />
  <FakeButtons />
</template>

<script setup>
import SearchInput from "./SearchInput.vue";
import FakeButtons from "./FakeButtons.vue";
</script>

<style scoped>
a {
  text-decoration: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 15px;
  border: black 1px solid;
}

a:hover {
  background: green;
}

a:visited,
a:active {
  color: white;
}

.redBtn {
  background: #91021e;
}
.blueBtn {
  background: #105777;
}
</style>