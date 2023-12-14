<script>
export default {
  props: ["titolo", "titoloOriginale", "lingua", "voto"],
  data() {
    return {
      itFlag: "src/assets/img/italy.png",
      ukFlag: "src/assets/img/uk.png",
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="titolo">
      <h3>Titolo: {{ titolo }}</h3>
    </div>
    <div class="titolo-originale">
      <h4>Titolo Originale: {{ titoloOriginale }}</h4>
    </div>
    <div class="lingua">
      <div v-if="lingua === 'it'" class="flag">
        <h4>Lingua:</h4>
        <img :src="itFlag" alt="italia flag" />
      </div>
      <div v-else-if="lingua === 'en'" class="flag">
        <h4>Lingua:</h4>
        <img :src="ukFlag" alt="uk flag" />
      </div>
      <h4 v-else>Lingua: {{ lingua }}</h4>
    </div>
    <div class="voto">
      <h4>Voto: {{ voto }}</h4>
    </div>
  </div>
</template>

<style scoped></style>
