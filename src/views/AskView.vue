<template>
  <div>
    <div v-for="item in askItems" :key="item.id">
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askItems: 'fetchedAsk'
    }),
  //   // ...mapGetters([
  //   //   'fetchedAsk'
  //   // ])
    ...mapState({
      //ask: state => state.ask
    })
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  },
  created() {
    console.log("created!!!!!");
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>