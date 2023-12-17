<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import axios from "axios";
import { store } from "./store";

export default {
  methods: {
    ricerca() {
      if (store.apiParams.apiQuery.trim() !== "") {
        // cambio titoli
        store.movies.titleMovie = `I tuoi film con: ${store.apiParams.apiQuery}`;
        store.tvs.titleTv = `Le tue serie tv con: ${store.apiParams.apiQuery}`;
        // chiamate api per ricerca
        axios
          .get(store.movies.tmdbApi, {
            params: {
              api_key: store.apiParams.apiKey,
              query: store.apiParams.apiQuery,
              language: store.apiParams.language,
            },
          })
          .then((response) => {
            store.movies.tmdbCard = response.data.results;
          });
        axios
          .get(store.tvs.tmdbApiTv, {
            params: {
              api_key: store.apiParams.apiKey,
              query: store.apiParams.apiQuery,
              language: store.apiParams.language,
            },
          })
          .then((response) => {
            store.tvs.tmdbCardTv = response.data.results;
          });
      }
      store.apiParams.apiQuery = "";
    },
  },
  created() {
    // chimata api per film e serie tv popolari in home
    axios
      .get(store.popularMovies.popularApiMovie, {
        params: {
          api_key: store.apiParams.apiKey,
          region: store.apiParams.region,
          language: store.apiParams.language,
        },
      })
      .then((response) => {
        store.movies.tmdbCard = response.data.results;
      });

    axios
      .get(store.popularTvs.popularApiTv, {
        params: {
          api_key: store.apiParams.apiKey,
          region: store.apiParams.region,
          language: store.apiParams.language,
        },
      })
      .then((response) => {
        store.tvs.tmdbCardTv = response.data.results;
      });
  },
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader @ricerca="ricerca" />
  <AppMain />
</template>

<style lang="scss">
#app {
  background-color: rgb(20, 20, 20);
}
</style>
