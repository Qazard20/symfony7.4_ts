import { createApp } from "vue";
import store from '@jsDist/vue/store/main.js';
import LandingPage from "@jsDist/vue/pages/public/LandingPage.vue";
import router from "@jsDist/vue/router/router.js";


const app = createApp(LandingPage)
    .use(router)
    .use(store)
    .mount('#landing');
