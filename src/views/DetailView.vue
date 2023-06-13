<template>
  <div class="user-card" v-if="userDetails">
    <div class="user-row">
      <img :src="userDetails.picture" alt="User Avatar" class="user-image"/>
      <button class="back-button" @click="goToHomePage">Volver</button>
    </div>
    <div class="user-details-card">
      <h2>{{ userDetails.firstName }} {{ userDetails.lastName }}</h2>
      <div class="user-info">
        <p><strong>Email:</strong> {{ userDetails.email }}</p>
				<p><strong>Phone:</strong> {{ userDetails.phone }}</p>
        <p><strong>Gender:</strong> {{ userDetails.gender }}</p>
        <p><strong>DateOfBirth:</strong> {{ userDetails.dateOfBirth }}</p>
        <p><strong>RegisterDate:</strong> {{ userDetails.registerDate }}</p>
        <p><strong>Country:</strong> {{ userDetails.location.country }}</p>
        <p><strong>State:</strong> {{ userDetails.location.state }}</p>
        <p><strong>City:</strong> {{ userDetails.location.city }}</p>
        <p><strong>Street:</strong> {{ userDetails.location.street }}</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { getUserDetails } from '../api/users';
  
  export default {
    name: 'DetailView',
    data() {
      return {
        userDetails: null
      };
    },
    created() {
      this.fetchUserDetails();
    },
    methods: {
      fetchUserDetails() {
        const userId = this.$route.params.id;
        // console.log('userId', userId);
        
        // Llama a la función getUserDetails y pasa el ID de usuario
        getUserDetails(userId)
          .then(response => {
            // Aquí puedes manejar la respuesta de la petición
            this.userDetails = response.data;
            // console.log('UserDetails', this.userDetails);
          })
          .catch(error => {
            // Aquí puedes manejar el error de la petición
            console.error(error);
          });
      },
      goToHomePage() {
      this.$router.push('/');
    }
    }
  }
  </script >
  
  <style scoped>
.user-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%; 
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #ccc;
}

.user-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

.user-image {
  width: 60px; 
  height: 60px; 
  background-color: #ccc; 
  border-radius: 50%;
}

.back-button {
  margin-bottom: 10px;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  background-color: rgb(4, 45, 58);
  color: #fff;
  font-size: 16px;
  cursor: pointer; /* Cambia el cursor al pasar el ratón sobre el botón */
  transition: background-color 0.3s; /* Añade una transición suave */
}

.back-button:hover {
  background-color: rgb(19, 212, 148); /* Cambia el color de fondo al pasar el ratón sobre el botón */
}
.user-details-card {
    width: 100%;
    margin-top: 30px; 
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  