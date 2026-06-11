<template>
  <header class="header">
    <div class="wrapper header__inner">
        <RouterLink title="На главную" :to="{name: 'home'}" class="logotype__link header__link">
            На главную
        </RouterLink>
        <RouterLink title="На главную" :to="{name: 'app_login'}" class="logotype__link header__link">
            Авторизация
        </RouterLink>
        <RouterLink title="На главную" :to="{name: 'app_register'}" class="logotype__link header__link">
            Регистрация
        </RouterLink>
        <RouterLink title="На главную" :to="{name: 'app_about'}" class="logotype__link header__link">
            О нас
        </RouterLink>
    </div>
  </header>
</template>

<script setup>
import {reactive} from 'vue';

import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const
    // Vue router
    router = reactive(useRouter()),
    route = reactive(useRoute()),
    //Vuex
    store = useStore();


</script>

<style scoped lang="scss">

</style>
