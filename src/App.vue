<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import axios from "axios";
import { store } from "./store";

export default {
  methods: {
    // chimate api per ricerca
    chiamataApi(urlApi, type) {
      if (store.apiParams.apiQuery.trim() !== "") {
        axios
          .get(urlApi, {
            params: {
              api_key: store.apiParams.apiKey,
              query: store.apiParams.apiQuery,
              language: store.apiParams.language,
            },
          })
          .then((response) => {
            if (type === "movie") {
              store.movies.tmdbCard = response.data.results;
            } else if (type === "tv") {
              store.tvs.tmdbCardTv = response.data.results;
            }
          });
      }
    },
    // chimata api per film e serie popolari da visualizzare in home quando non viene effettuata la ricerca
    chiamataApiDefault(urlApi, type) {
      axios
        .get(urlApi, {
          params: {
            api_key: store.apiParams.apiKey,
            region: store.apiParams.region,
            language: store.apiParams.language,
          },
        })
        .then((response) => {
          if (type === "movie") {
            store.movies.tmdbCard = response.data.results;
          } else if (type === "tv") {
            store.tvs.tmdbCardTv = response.data.results;
          }
        });
    },
    // funzione eseguita al click sul button
    ricerca() {
      if (store.apiParams.apiQuery.trim() !== "") {
        // cambio titoli
        store.movies.titleMovie = `I tuoi film con: ${store.apiParams.apiQuery}`;
        store.tvs.titleTv = `Le tue serie tv con: ${store.apiParams.apiQuery}`;
        // chiamate api per ricerca
        this.chiamataApi(store.movies.tmdbApi, store.movies.type);
        this.chiamataApi(store.tvs.tmdbApiTv, store.tvs.type);
      }
      // svuota campo input
      store.apiParams.apiQuery = "";
    },
  },
  created() {
    // chiamate api per film e serie tv popolari in home
    this.chiamataApiDefault(
      store.popularMovies.popularApiMovie,
      store.movies.type
    );
    this.chiamataApiDefault(store.popularTvs.popularApiTv, store.tvs.type);
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
