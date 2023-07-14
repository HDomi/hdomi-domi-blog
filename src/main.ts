import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faInstagram);

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, { position: POSITION.TOP_CENTER })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
