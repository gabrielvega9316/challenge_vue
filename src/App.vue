<template>
  <div>
    <h1>My Search User</h1>
    <HomeView />
  </div>
</template>

<script>
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
  color: #333;
}
</style>