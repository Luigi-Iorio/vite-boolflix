<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import axios from "axios";
import { store } from "./store";

export default {
  methods: {
    ricerca() {
      // cambio titoli
      store.titleMovie = `I tuoi film con: ${store.apiQuery}`;
      store.titleTv = `Le tue serie tv con: ${store.apiQuery}`;
      // chiamate api
      axios
        .get(store.tmdbApi, {
          params: {
            api_key: store.apiKey,
            query: store.apiQuery,
            language: store.language,
          },
        })
        .then((response) => {
          store.tmdbCard = response.data.results;
        });
      axios
        .get(store.tmdbApiTv, {
          params: {
            api_key: store.apiKey,
            query: store.apiQuery,
            language: store.language,
          },
        })
        .then((response) => {
          store.tmdbCardTv = response.data.results;
        });
      store.apiQuery = "";
    },
  },
  created() {
    // chimata api per film e serie tv popolari in home
    axios
      .get(store.popularApiMovie, {
        params: {
          api_key: store.apiKey,
          region: store.region,
          language: store.language,
        },
      })
      .then((response) => {
        store.tmdbCard = response.data.results;
      });

    axios
      .get(store.popularApiTv, {
        params: {
          api_key: store.apiKey,
          region: store.region,
          language: store.language,
        },
      })
      .then((response) => {
        store.tmdbCardTv = response.data.results;
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
