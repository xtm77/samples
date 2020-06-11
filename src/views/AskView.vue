<template>
  <div>
    <ul>
      <li v-for="item in askItems" :key="item.id">
        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      </li>
    </ul>
    <!-- <div v-for="item in askItems" :key="item.id">
      <i class="fas fa-angle-double-right fa-spin fa-fw"></i>
      <router-link v-bind:to="`/item/${item.id}`"><i class="fas fa-camera fa-spin fa-2x fa-fw"></i>{{ item.title }}</router-link>
      <i class="fas fa-spinner fa-spin fa-2x fa-fw"></i>
    </div> -->
    
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
<style scoped>

</style>