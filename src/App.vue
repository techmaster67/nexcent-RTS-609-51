<script setup>
import {RouterView } from 'vue-router'
import VHeader from './components/VHeader.vue';
import VFooter from './components/VFooter.vue';
</script>

<template>
  <VHeader></VHeader>
  <RouterView />
  <VFooter></VFooter>
</template>

<style scoped>

</style>
