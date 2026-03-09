<template>
  <div class="row">
    <div class="col-md-3 job-list-sidebar">
      <JobList />
    </div>
    <div class="col-md-9">
      <router-view />
    </div>
  </div>
</template>

<script>
import JobList from './JobList.vue';

export default {
  name: 'JobExplorerLayout',
  components: {
    JobList
  }
};
</script>

<style scoped>
.job-list-sidebar {
  border-right: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .job-list-sidebar {
    border-right: none;
    border-bottom: 1px solid #dee2e6;
    margin-bottom: 20px;
  }
}
</style>
