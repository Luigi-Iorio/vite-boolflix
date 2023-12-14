import { createApp } from "vue";
import "./assets/scss/general.scss";
import App from "./App.vue";

// Import Bootstrap's JS
import * as bootstrap from "bootstrap";

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
