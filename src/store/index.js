import { createStore } from 'vuex';
import { getUserDetails } from '../api/users';

const store = createStore({
  state: {
    userDetailsById: {}
  },
  actions: {
    async fetchUserDetails({ commit }, userId) {
      try {
        const response = await getUserDetails(userId);
        const userDetails = response.data;

        commit('SET_USER_DETAILS', { userId, userDetails });
      } catch (error) {
        throw error;
      }
    }
  },
  mutations: {
    SET_USER_DETAILS(state, { userId, userDetails }) {
      state.userDetailsById = {
        ...state.userDetailsById,
        [userId]: userDetails
      };
    }
  },
  getters: {
    getUserDetailsById: state => userId => {
      return state.userDetailsById[userId] || null;
    }
  }
});

export default store;