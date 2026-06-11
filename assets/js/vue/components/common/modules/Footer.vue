<template>
<footer class="footer">
  <span>{{ locationYear }}</span>
</footer>
</template>

<script setup>

import {computed} from 'vue';

const locationYear = computed(() => {
  let date = new Date();
  return `${date.getFullYear()}г.`
})
</script>

<style scoped>

</style>
