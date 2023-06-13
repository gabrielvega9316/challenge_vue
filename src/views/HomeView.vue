<script>
  import { RouterLink, RouterView } from 'vue-router'
  import { getUsers } from '../api/users'
  export default {
  name: 'HomeView',
  data() {
    return {
      searchQuery: '',
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await getUsers(); // Realiza la petición para obtener los detalles de los usuarios
        this.users = response.data.data; // Actualiza la lista de usuarios con los datos obtenidos
        console.log('response-users', this.users)
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    filteredUsers() {
      if (this.searchQuery) {
        return this.users.filter(user =>
          user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.users;
      }
    }
  },
  mounted() {
    this.fetchUsers(); // Llama a la función para obtener los detalles de los usuarios al cargar el componente
  },
  };
</script>
    
<template>
  <div class="home-view">
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Buscar usuarios" />
      <!-- Aquí puedes agregar la lógica de búsqueda -->
    </div>
    <div class="user-cards">
      <!-- <UserDetailComponent v-if="showDetails" :user="selectedUser" /> -->
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
</template>


<style>
.home-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.search-bar {
  margin-bottom: 20px;
}

.user-cards {
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(10cm, 1fr));
  grid-gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
}

@media (max-width: 768px) {
  .user-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10cm, 1fr));
    background-color: white;
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
</style>
