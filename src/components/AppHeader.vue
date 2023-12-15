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
  <header class="p-4 d-flex justify-content-between align-items-center">
    <!-- logo -->
    <div class="left d-flex align-items-center">
      <div class="logo">
        <img class="img-fluid" src="/img/mobile-logo.png" alt="logo" />
      </div>
      <h1 class="m-0 d-none d-md-block">Boolflix</h1>
    </div>
    <!-- /logo -->

    <!-- ricerca -->
    <div class="right d-flex align-items-center gap-3">
      <!-- input -->
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="search"
          placeholder="Cerca film o serie tv"
          v-model="store.apiQuery"
        />
        <label for="search">Cerca film o serie tv</label>
      </div>
      <!-- /input -->

      <!-- button -->
      <button class="btn btn-danger p-3" @click="$emit('ricerca')">
        Cerca
      </button>
      <!-- /button -->
    </div>
    <!-- /ricerca -->
  </header>
  <!-- /header -->
</template>

<style lang="scss" scoped>
// header
header {
  background-color: black;
}

// left
.left {
  color: red;
  .logo {
    width: 70px;
  }

  h1 {
    text-transform: uppercase;
  }
}

// right
button {
  width: 100px;
}
</style>
