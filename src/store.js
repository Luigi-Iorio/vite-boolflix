import { reactive } from "vue";

export const store = reactive({
  movies: {
    tmdbCard: [],
    tmdbApi: "https://api.themoviedb.org/3/search/movie",
    titleMovie: "Film più popolari su BoolFlix",
  },

  tvs: {
    tmdbCardTv: [],
    tmdbApiTv: "https://api.themoviedb.org/3/search/tv",
    titleTv: "Serie tv più popolari su BoolFlix",
  },

  popularMovies: {
    popularApiMovie: "https://api.themoviedb.org/3/movie/popular",
  },

  popularTvs: {
    popularApiTv: "https://api.themoviedb.org/3/tv/popular",
  },

  apiParams: {
    region: "Ital",
    apiKey: "3302787678ca722a258e9aee580789a5",
    language: "it-IT",
    apiQuery: "",
  },
});
