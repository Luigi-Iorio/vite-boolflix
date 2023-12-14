import { reactive } from "vue";

export const store = reactive({
  tmdbCard: [],
  tmdbApi: "https://api.themoviedb.org/3/search/movie",
  apiKey: "3302787678ca722a258e9aee580789a5",
  language: "it_IT",
  apiQuery: "",
});
