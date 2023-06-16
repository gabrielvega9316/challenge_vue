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
      'app-id': '648710081fb3adb3753fe82c' 
    }
  };

  return axios.get(`https://dummyapi.io/data/v1/user/${userId}`, config);
};