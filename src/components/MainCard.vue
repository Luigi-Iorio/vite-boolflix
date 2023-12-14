<script>
export default {
  props: ["copertina", "titolo", "titoloOriginale", "lingua", "voto"],
  data() {
    return {
      itFlag: "src/assets/img/italy.png",
      ukFlag: "src/assets/img/uk.png",
      imgBaseUrl: "https://image.tmdb.org/t/p/w342",
      votoDecimale: this.voto,
    };
  },
  methods: {
    dimezzaVoto() {
      const votoDimezzato = this.votoDecimale / 2;
      return Math.ceil(votoDimezzato);
    },
    stelleVuote() {
      if (this.dimezzaVoto() < 5) {
        const mancanti = 5 - this.dimezzaVoto();
        return mancanti;
      }
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="copertina">
      <img :src="imgBaseUrl + copertina" alt="" />
    </div>
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
      <h4>Voto:</h4>
      <div class="stelle">
        <font-awesome-icon v-for="n in dimezzaVoto()" icon="fa-solid fa-star" />
        <font-awesome-icon
          v-for="n in stelleVuote()"
          icon="fa-regular fa-star"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
