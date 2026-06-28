<template>
  <div class="body">
    <Header/>
    <div class="page-content" style="position: relative">
      <RouterView/>
        <a :href="routing.generate('app_landing')">Home</a>
        <a :href="routing.generate('app_login')">Login</a>
        <a :href="routing.generate('app_register')">Register</a>
        <a :href="routing.generate('app_public_page', {'slug': 'about'})">О нас</a>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, computed } from 'vue';

const Routing = require('/public/bundles/fosjsrouting/js/router.js');
const routes = require('@public/js/fos_js_routes.json');
Routing.setRoutingData(routes);
const routing = ref(Routing);

//modules

import Header from "@jsDist/vue/components/common/modules/Header.vue";
import Footer from "@jsDist/vue/components/common/modules/Footer.vue";

import Global from "@jsDist/services/globals";

import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'

const
    // Vue router
    router = reactive(useRouter()),
    route = reactive(useRoute()),

    // Vuex
    store = useStore(),

    // Globals
    global = reactive(Global),

    // Get route name
    routeName = computed(()=>{
      return store.getters.routeName
    })




watch(router, (newValue) => {
  let routeName = newValue.currentRoute.name;

  store.commit({
    type: 'setRouteName',
    routeName: routeName
  })
})
</script>

<style scoped lang="scss">
</style>
