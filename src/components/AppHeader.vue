<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- header -->
  <header>
    <div class="form">
      <label for="searchFilm">Cerca Film</label>
      <input
        type="text"
        id="searchFilm"
        name="searchFilm"
        placeholder="Cerca il film"
        v-model="store.apiQuery"
      />
      <button @click="$emit('ricerca')">Cerca</button>
    </div>
  </header>
  <!-- /header -->
</template>

<style scoped></style>
