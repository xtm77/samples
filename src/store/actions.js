import { fetchNewsList, fetchJobList, fetchAskList, fetchUserInfo } from '../api/index';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS({ commit }) { //{ commit }는 
    fetchJobList()
      .then(({ data }) => { // { data }는 response.data
        commit('SET_JOBS', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_USERINFO({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      })
  }
}