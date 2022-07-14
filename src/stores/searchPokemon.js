import { defineStore } from "pinia";

export const useSearchPokemon = defineStore({
  id: "searchPokemon",
  state: () => ({
    data: null,
    loading: false,
    error: false,
  }),
  actions: {
    async searchPokemon(searchPokemon) {
      this.data = null;
      this.loading = true;
      this.error = false;
      try {
        const resp = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
        );
        this.data = await resp.json();
        this.loading = false;
      } catch (error) {
        this.error = true;
        this.loading = false;
      }
    },
  },

});
