import axios from 'axios';

export const getUsers = (limit, page) => {
    const config = {
      headers: {
        'app-id': '648710081fb3adb3753fe82c'
      },
      params: {
        limit,
        page
      }
    };
  
    return axios.get('https://dummyapi.io/data/v1/user', config);
  };

export const getUserDetails = (userId) => {
  const config = {
    headers: {
      'app-id': 'your-app-id' // Reemplaza 'your-app-id' con tu ID de aplicación real
    }
  };

  return axios.get(`https://dummyapi.io/data/v1/user/${userId}`, config);
};