<script>
import MainCard from "./MainCard.vue";

import { store } from "../store.js";
import axios from "axios";

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
      <li>
        <!-- card -->
        <MainCard />
        <!-- /card -->
      </li>
    </ul>
    <!-- /list card -->
  </main>
  <!-- /main -->
</template>

<style scoped></style>
