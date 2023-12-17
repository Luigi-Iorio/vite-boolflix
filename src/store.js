import { reactive } from "vue";

export const store = reactive({
  tmdbCard: [],
  tmdbCardTv: [],
  popularApiMovie: "https://api.themoviedb.org/3/movie/popular",
  popularApiTv: "https://api.themoviedb.org/3/tv/popular",
  tmdbApi: "https://api.themoviedb.org/3/search/movie",
  tmdbApiTv: "https://api.themoviedb.org/3/search/tv",
  region: "Ital",
  titleMovie: "Film più popolari su BoolFlix",
  titleTv: "Serie tv più popolari su BoolFlix",
  apiKey: "3302787678ca722a258e9aee580789a5",
  language: "it_IT",
  apiQuery: "",
});
