<template>
  <div class="news">
    <table width="100%" border="1px" align="center" style="table-layout: fixed">
      <thead>
        <th width="50px">index</th>
        <th width="100px">type</th>
        <th>url</th>
        <th>title</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{index}}</td>
          <td>{{user.type}}</td>
          <td style="width:200px;
              word-break: break-all
              word-wrap: break-word"
          >
            <div class="text">{{user.url}}</div>
          </td>
          <td>
            <div class="text">
              <a :href="user.url">{{user.title}}</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table width="100%" border="1px" align="center">
      <thead>
        <th width="50px">index</th>
        <th width="100px">type</th>
        <th>title</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in others" :key="user.id">
          <td>{{index}}</td>
          <td>{{user.type}}</td>
          <td>{{user.title}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { fetchNewsList } from '../api/index'
export default {
  data() {
    return {
      users: [],
      others: []
    }
  },
  created() {
    console.log('호출전: ', this)
    
    fetchNewsList()
      .then(response => {
        this.users = [];
        this.others = [];
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].type === 'link') {
            this.users.push(response.data[i])
          } else {
            this.others.push(response.data[i]);
          }
        }
      }).catch(error => {
        console.log(error);
      });
      
      // var vm = this;
      // .then(function(response) {
      //   console.log('호출후: ', this)
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
}
</script>
<style scoped>
.news {
  color:blue;
  align-content: "center"
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
}
</style>