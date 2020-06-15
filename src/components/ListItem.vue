<template>
  <v-container>
    <v-row v-for="item in list" :key="item.id" cols="3">
      <v-col class="points">
        {{item.points}}
      </v-col>
      <v-col class="title">
        <template v-if="item.domain">
          <a :href="item.url">{{item.title}}</a>
        </template>
        <template v-else>
          <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
        </template>
      </v-col>
      <v-col>
        <router-link v-bind:to="`/user/${item.id}`">{{ item.user }}</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'ListItem',
  computed: {
    list() {
      if (this.$route.name === 'news') {
        return this.$store.state.news;
      } else if (this.$route.name === 'ask') {
        return this.$store.state.ask;
      } else if (this.$route.name === 'jobs') {
        return this.$store.state.jobs;
      } else {
        return [];
      }
    }
  },
  created() {
    const pageName = this.$route.name;
    var actionName = 'FETCH_NEWS';
    console.log(pageName);
    if (pageName === 'jobs') {
      actionName = 'FETCH_JOBS';
      
    } else if (pageName === 'ask') {
      actionName = 'FETCH_ASK';
    } else {
      actionName = 'FETCH_NEWS'
    }
    this.$store.dispatch(actionName);
  }
}
</script>
<style scoped>
.points {
  color:#42b983
}
.title {
  width: '200px';
  overflow: hidden;
  color:#42b983;
  text-decoration: none;
  word-break: break-all;
  word-wrap: break-word;
}
.title :hover {
  color:#79ad17;
  text-decoration: underline;
}
.user {
  color:#42b983;
  text-decoration: none;
}
.user :hover {
  color:#06522f;
  text-decoration: underline;
}
</style>