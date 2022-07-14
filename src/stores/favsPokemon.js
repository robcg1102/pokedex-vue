import { defineStore } from "pinia";

export const useFavsPokemon = defineStore({
  id: "favsPokemon",
  state: () => ({
    favsPokemon: [],
  }),
  actions: {
    setFavsPokemon(data) {
      this.favsPokemon = data;
    },
  },
});
