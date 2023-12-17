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
  <div class="card-tmdb border-0 rounded-3">
    <!-- copertina -->
    <div class="copertina">
      <img :src="imgBaseUrl + copertina" alt="" />
    </div>
    <!-- /copertina -->

    <!-- info -->
    <div class="info p-3">
      <!-- titolo -->
      <div class="titolo">
        <h3>Titolo: {{ titolo }}</h3>
      </div>
      <!-- /titolo -->

      <!-- titolo originale-->
      <div class="titolo-originale">
        <h4>Titolo Originale: {{ titoloOriginale }}</h4>
      </div>
      <!-- /titolo originale-->

      <!-- lingua-->
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
      <!-- /lingua-->

      <!-- voto -->
      <div class="voto">
        <h4>Voto:</h4>
        <div class="stelle">
          <font-awesome-icon
            v-for="n in dimezzaVoto()"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            v-for="n in stelleVuote()"
            icon="fa-regular fa-star"
          />
        </div>
      </div>
      <!-- /voto -->
    </div>
    <!-- /info -->
  </div>
</template>

<style lang="scss" scoped>
.card-tmdb {
  position: relative;
  width: 342px;
  height: 500px;
  overflow: hidden;

  .copertina {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    opacity: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.814);
    position: absolute;
    color: white;
    z-index: 5;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      opacity: 1;
    }
  }
}

.flag {
  img {
    width: 60px;
    display: block;
  }
}
</style>
