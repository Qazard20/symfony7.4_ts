import { createApp } from "vue";
import store from '@jsDist/vue/store/main';
import LandingPage from "@jsDist/vue/pages/public/LandingPage";
import router from "@jsDist/vue/router/router";


const app = createApp(LandingPage)
    .use(router)
    .use(store)
    .mount('#landing');
