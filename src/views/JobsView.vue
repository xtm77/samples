<template>
  <div id="jobs">
    <table width="100%" border="1px" align="center" style="table-layout: fixed">
      <thead>
        <th width="50px">index</th>
        <th width="100px">type</th>
        <th>url</th>
        <th>title</th>
        <th>user</th>
      </thead>
      <tbody>
        <tr v-for="(job, index) in this.$store.state.jobs" :key="job.id">
          <td>{{index}}</td>
          <td>{{job.type}}</td>
          <td style="width:200px;
              word-break: break-all
              word-wrap: break-word"
          >
            <div class="text">{{job.url}}</div>
          </td>
          <td>
            <div class="text">
              <a :href="job.url">{{job.title}}</a>
            </div>
          </td>
          <td>
            <router-link v-bind:to="'/user/' + job.user">{{ job.user }}</router-link>
            <router-link v-bind:to="`/user/${job.user}`">{{ job.user }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>