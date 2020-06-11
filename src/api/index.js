import axios from 'axios';

const config = {
  baseUrl: 'https://raw.githubusercontent.com/xtm77/note/master/vue/'
};

function fetchNewsList() {
  //es6 템플릿 문법 `(백틱)
  return axios.get(`${config.baseUrl}1.json`)

  //기존 문법
  //return axios.get(config.baseUrl + '1.json');
      // .then(function(response) {
      //   console.log(response);
      //   console.log(vm.users);
      //   vm.users = [];
      //   vm.others = [];
      //   for (var i = 0; i < response.data.length; i++) {
      //     if (response.data[i].type === 'link') {
      //       vm.users.push(response.data[i])
      //     } else {
      //       vm.others.push(response.data[i]);
      //     }
      //   }
      //   console.log(vm.others);
      //   // vm.users = response.data;
      // }).catch(function(e){
      //   console.log(e);
      // });
}

function fetchJobList() {
  return axios.get(`${config.baseUrl}1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}1.json`);
}

function fetchUserInfo(userName) {
  console.log('fetchUserInfo userName: ', userName);
  console.log('fetchUserInfo url: ', `${config.baseUrl}user/${userName}`);
  return axios.get(`${config.baseUrl}user.json`);
}

function fetchItem(id) {
  console.log('id:', id);
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchNewsList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo,
  fetchItem,
}

