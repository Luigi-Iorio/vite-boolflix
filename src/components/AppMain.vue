<script>
import MainCard from "./MainCard.vue";

import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    MainCard,
  },
};
</script>

<template>
  <!-- main -->
  <main>
    <!-- list card -->
    <ul>
      <li v-for="card in store.tmdbCard">
        <!-- card -->
        <MainCard
          :titolo="card.title"
          :titoloOriginale="card.original_title"
          :lingua="card.original_language"
          :voto="card.vote_average"
        />
        <!-- /card -->
      </li>
    </ul>
    <!-- /list card -->
  </main>
  <!-- /main -->
</template>

<style scoped></style>
