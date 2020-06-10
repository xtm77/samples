<template>
  <div>
    <div v-for="(item, index) in askItems" :key="item.id">
      <p>
        {{index}} - {{ item.title }} - {{item.user}}
      </p>
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