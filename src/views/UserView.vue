<template>
  <div>
    {{ this.$route.params.id }}
    {{ user.userName }}
    <p>
      {{ user.created }}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERINFO', userName);
    console.log(this.$route.params.id)
  }
}
</script>