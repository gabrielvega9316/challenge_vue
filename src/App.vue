<template>
  <div>
    <h1>My User Search</h1>
  </div>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
}
}
</script>

<style>
h1 {
  color: #ffffff;
  margin-bottom: revert;
}
</style>