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
  <main class="p-3">
    <h2 class="m-5">Film su BoolFlix</h2>
    <!-- movie list -->
    <ul class="d-flex flex-wrap justify-content-center gap-3">
      <li v-for="card in store.tmdbCard">
        <!-- card -->
        <MainCard
          :copertina="card.poster_path"
          :titolo="card.title"
          :titoloOriginale="card.original_title"
          :lingua="card.original_language"
          :voto="card.vote_average"
        />
        <!-- /card -->
      </li>
    </ul>
    <!-- /movie list -->

    <!-- tv list -->
    <h2 class="m-5">Serie Tv su BoolFlix</h2>
    <ul class="d-flex flex-wrap justify-content-center gap-3">
      <li v-for="cardTv in store.tmdbCardTv">
        <!-- cardTv -->
        <MainCard
          :copertina="cardTv.poster_path"
          :titolo="cardTv.name"
          :titoloOriginale="cardTv.original_name"
          :lingua="cardTv.original_language"
          :voto="cardTv.vote_average"
        />
        <!-- /cardTv -->
      </li>
    </ul>
    <!-- /tv list -->
  </main>
  <!-- /main -->
</template>

<style lang="scss" scoped>
main {
  color: rgb(129, 129, 129);
}
</style>
