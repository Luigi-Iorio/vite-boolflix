import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import icons */
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(fasStar, farStar);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
