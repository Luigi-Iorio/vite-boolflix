import { reactive } from "vue";

export const store = reactive({
  tmdbCard: [],
  tmdbCardTv: [],
  tmdbApi: "https://api.themoviedb.org/3/search/movie",
  tmdbApiTv: "https://api.themoviedb.org/3/search/tv",
  apiKey: "3302787678ca722a258e9aee580789a5",
  language: "it_IT",
  apiQuery: "",
});
