<template>
  <SearchBar @search="handleSearch"></SearchBar>
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
          </button>
        </div>
      </div>
    </div>
  </div>
  <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
  ></Pagination>
</template>

<script>
  import { RouterLink } from 'vue-router' 
  import { getUsers } from '../api/users'
  import SearchBar from '../components/SearchBar.vue' 
  import Pagination from '../components/Pagination.vue' 

  export default {
    name: 'HomeView',
    data() {
      return {
        searchQuery: '', 
        users: [], 
        currentPage: 0, // Almacena el número de página actual
        pageSize: 9, // Define el tamaño de página
        totalPages: 0, // Almacena el número total de páginas
      };
    },
    components: {
      SearchBar, 
      Pagination 
    },
    methods: {
      handleSearch(newQuery) {
        this.searchQuery = newQuery; // Actualiza el valor de searchQuery con la nueva consulta de búsqueda
      },
      async searchUsers() {
        try {
          const response = await getUsers(this.pageSize, this.currentPage); 

          this.users = response.data.data; 
          this.totalPages = Math.ceil(response.data.total / this.pageSize); // Calcula el número total de páginas dividiendo el número total de usuarios entre el tamaño de página y redondeando hacia arriba
        } catch (error) {
          console.error(error); 
        }
      },
      handlePageChange(newPage) {
        this.currentPage = newPage - 1; // Actualiza la página actual basada en la página seleccionada por el usuario
        this.searchUsers(); // Realiza una nueva búsqueda de usuarios con la página actualizada
      }
    },
    computed: {
      filteredUsers() {
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase(); // Convierte la consulta de búsqueda en minúsculas
          return this.users.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase(); // Concatena el nombre y apellido del usuario en una cadena en minúsculas
            const firstName = user.firstName.toLowerCase(); 
            const lastName = user.lastName.toLowerCase(); 
            return fullName.includes(query) || firstName.includes(query) || lastName.includes(query); // Devuelve true si el nombre completo, el nombre o el apellido del usuario incluyen la consulta de búsqueda
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



<style scoped>
.home-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
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

@media (max-width: 420px) {
  .user-card {
    flex: 0 0 calc(50% - 20px);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
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
</style>
