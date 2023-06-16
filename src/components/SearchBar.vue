<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" placeholder="Buscar usuarios" />
  </div>
</template>

<script>
 export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  watch: {
    searchQuery(newQuery) {
      this.$emit('search', newQuery);
    },
  },
};
</script>

<style>
.search-bar {
  margin-bottom: 20px;
}

.search-bar input[type="text"] {
  padding: 15px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: box-shadow 0.3s;
}

.search-bar input[type="text"]:focus {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>