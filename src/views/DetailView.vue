<template>
    <div class="user-detail">
      <!-- <h2>{{ user.firstName }} {{ user.lastName }}</h2> -->
      <h2> este es el componente de detalles de usuario</h2>
      <div class="user-info">
        <!-- <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Gender:</strong> {{ user.gender }}</p>
        <p><strong>DateOfBirth:</strong> {{ user.dateOfBirth }}</p>
        <p><strong>RegisterDate:</strong> {{ user.registerDate }}</p>
        <p><strong>Country:</strong> {{ user.country }}</p>
        <p><strong>State:</strong> {{ user.state }}</p>
        <p><strong>City:</strong> {{ user.city }}</p>
        <p><strong>Street:</strong> {{ user.street }}</p> -->
        <!-- Agrega más detalles según tus necesidades -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'profile',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
    // Agrega métodos y lógica adicional según tus necesidades
}
    console.log('hjola aqui toooy')
  </script>
  
  <style>
  .user-detail {
    margin: 20px 0;
  }
  
  .user-info {
    margin-top: 10px;
  }
  </style>
  