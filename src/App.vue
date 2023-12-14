<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import axios from "axios";
import { store } from "./store";

export default {
  methods: {
    ricerca() {
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
      store.apiQuery = "";
    },
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

<style></style>
