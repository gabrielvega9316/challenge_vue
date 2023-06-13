<script>
  import { RouterLink, RouterView } from 'vue-router'
  import { getUsers } from '../api/users'

  export default {
  name: 'HomeView',
  data() {
    return {
      searchQuery: '',
      users: [],
      currentPage: 0,
      pageSize: 9,
      totalPages: 0,
    };
  },
  methods: {
    async searchUsers() {
      try {
        const response = await getUsers(this.pageSize, this.currentPage);

        this.users = response.data.data;
        this.totalPages = Math.ceil(response.data.total / this.pageSize);
      } catch (error) {
        console.error(error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.searchUsers();
      }
    },
  },
  computed: {
    filteredUsers() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.users.filter(user => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          const firstName = user.firstName.toLowerCase();
          const lastName = user.lastName.toLowerCase();
          return fullName.includes(query) || firstName.includes(query) || lastName.includes(query);
        });
      } else {
        return this.users;
      }
    }
  },
  mounted() {
    this.searchUsers();
  }
  };
</script>
    
<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" placeholder="Buscar usuarios" />
  </div>
  <div class="home-view">
    <div class="user-cards">
      <div class="user-card" v-for="user in filteredUsers" :key="user.id">
        <div class="user-avatar">
          <img :src="user.picture" alt="User Avatar" />
        </div>
        <div class="user-details">
          <h3>{{ user.firstName }} {{ user.lastName }}</h3>
        </div>
        <div class="user-button">
          <button class="details-button">
            <RouterLink :to="{ name: 'profile', params: { id: user.id } }">Details</RouterLink>            
              <!-- <span class="triangle"></span> -->
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <button v-for="page in totalPages" :key="page" @click="goToPage(page)">
      {{ page }}
    </button>
  </div>
</template>


<style scoped>
.home-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

/* Search bar styles */
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

/* user cards styles */

.user-cards {
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(10cm, 1fr));
  grid-gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgb(4, 45, 58);
  border-radius: 15px;
}

@media (max-width: 768px) {
  .user-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10cm, 1fr));
    background-color: rgb(4, 45, 58);
  }
}

.user-card {
  flex: 0 0 calc(33.33% - 20px);
  border: 1px solid #ccc;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
}

.user-avatar {
  width: 2cm;
  height: -6cm;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.user-avatar img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.user-details {
  flex: 1;
}

.user-details h3,
.user-details p {
  margin: 0;
}

.user-button {
  display: flex;
  align-items: center;
}

.details-button {
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.triangle {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #039960;
  margin-left: 5px; 
}

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
