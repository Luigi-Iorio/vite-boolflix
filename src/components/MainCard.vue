<script>
export default {
  props: [
    "copertina",
    "titolo",
    "titoloOriginale",
    "lingua",
    "voto",
    "overview",
  ],
  data() {
    return {
      itFlag: "src/assets/img/italy.png",
      ukFlag: "src/assets/img/uk.png",
      imgBaseUrl: "https://image.tmdb.org/t/p/w342",
      votoDecimale: this.voto,
    };
  },
  methods: {
    // conversione voto da max 10 a max 5
    dimezzaVoto() {
      const votoDimezzato = this.votoDecimale / 2;
      return Math.ceil(votoDimezzato);
    },
    // aggiunta dinamica stelle vuote fino a raggiungere n. 5 stelle totali
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
      <img
        v-if="imgBaseUrl + copertina !== 'https://image.tmdb.org/t/p/w342null'"
        :src="imgBaseUrl + copertina"
        :alt="titolo"
      />
      <font-awesome-icon v-else class="img-copertina" icon="fa-solid fa-film" />
    </div>
    <!-- /copertina -->

    <!-- info -->
    <div class="info p-3">
      <!-- titolo -->
      <div class="titolo">
        <h4 class="mb-0">Titolo:</h4>
        <h5>{{ titolo }}</h5>
      </div>
      <!-- /titolo -->

      <!-- titolo originale-->
      <div v-show="titolo !== titoloOriginale" class="titolo-originale">
        <h4 class="mb-0">Titolo Originale:</h4>
        <h5>{{ titoloOriginale }}</h5>
      </div>
      <!-- /titolo originale-->

      <!-- lingua-->
      <div class="lingua">
        <div class="flag">
          <h4 class="mb-0">Lingua:</h4>
          <img
            v-if="lingua === 'it'"
            class="mb-2"
            :src="itFlag"
            alt="italia flag"
          />

          <img
            v-else-if="lingua === 'en'"
            class="mb-2"
            :src="ukFlag"
            alt="uk flag"
          />

          <h5 v-else>{{ lingua }}</h5>
        </div>
      </div>
      <!-- /lingua-->

      <!-- voto -->
      <div class="voto mb-2">
        <h4 class="mb-0">Voto:</h4>
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

      <!-- descrizione -->
      <div class="descrizione">
        <h4 class="mb-0">Descrizione</h4>
        <p class="mb-0" v-if="overview !== ''">{{ overview }}</p>
        <p class="mb-0" v-else>Descrizione in arrivo</p>
      </div>
      <!-- /descrizione -->
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

    .img-copertina {
      width: 100%;
      height: 100%;
      background-color: rgb(31, 31, 31);
    }
  }

  .info {
    opacity: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8169468470982143);
    position: absolute;
    color: rgb(222, 222, 222);
    z-index: 5;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  h4 {
    color: rgb(129, 129, 129);
  }

  .descrizione {
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.flag {
  img {
    width: 30px;
    display: block;
  }
}
</style>
