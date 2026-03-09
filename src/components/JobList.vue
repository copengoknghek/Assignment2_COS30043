<template>
  <div class="job-list">
    <h3>Job List</h3>
    <ul class="list-group">
      <li class="list-group-item">
        <router-link to="/jobs/overview" class="text-decoration-none">Overview</router-link>
      </li>
      <li class="list-group-item" v-for="job in jobs" :key="job.job_id">
        <router-link :to="`/jobs/${job.job_id}`" class="text-decoration-none">
          {{ job.job_id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { jobs } from '../data/jobs.js';

export default {
  name: 'JobList',
  data() {
    return {
      jobs: jobs
    };
  }
};
</script>

<style scoped>
.job-list {
  padding: 20px;
  background-color: #f8f9fa;
  height: 100%;
}

.job-list h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.list-group-item {
  border: 1px solid #dee2e6;
  text-align: center;
}

.list-group-item a {
  color: #007bff;
}

.list-group-item a:hover {
  color: #0056b3;
  text-decoration: underline !important;
}

.router-link-active {
  font-weight: bold;
  color: #0056b3 !important;
}
</style>
