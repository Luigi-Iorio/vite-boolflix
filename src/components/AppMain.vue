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
      <!-- movie list -->
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
      <!-- /movie list -->

      <!-- tv list -->
      <li v-for="cardTv in store.tmdbCardTv">
        <!-- cardTv -->
        <MainCard
          :titolo="cardTv.name"
          :titoloOriginale="cardTv.original_name"
          :lingua="cardTv.original_language"
          :voto="cardTv.vote_average"
        />
        <!-- /cardTv -->
      </li>
      <!-- /tv list -->
    </ul>
    <!-- /list card -->
  </main>
  <!-- /main -->
</template>

<style scoped></style>
