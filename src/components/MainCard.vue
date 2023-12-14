<script>
export default {
  props: ["titolo", "titoloOriginale", "lingua", "voto"],
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
      <h4>Lingua Originale: {{ lingua }}</h4>
    </div>
    <div class="voto">
      <h4>Voto: {{ voto }}</h4>
    </div>
  </div>
</template>

<style scoped></style>
