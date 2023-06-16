<template>
    <div class="pagination">
      <button v-for="page in totalPages" :key="page" @click="goToPage(page)">
        {{ page }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      totalPages: {
        type: Number,
        required: true,
      },
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.$emit('page-change', page);
        }
      },
    },
  };
  </script>
  
<style>
/* pagination styles */

.pagination {
display: flex;
justify-content: center;
margin-top: 30px;
}

.pagination button {
padding: 8px 12px;
margin: 0 4px;
border: none;
border-radius: 4px;
background-color: #f2f2f2;
color: #333;
cursor: pointer;
transition: background-color 0.3s;
}

.pagination button:hover {
background-color: #e0e0e0;
}

.pagination button.active {
background-color: #333;
color: #fff;
}

@media (max-width: 768px) {
.pagination {
    flex-wrap: wrap;
}

.pagination button {
    margin: 4px;
    font-size: 12px;
}
}
</style>
  