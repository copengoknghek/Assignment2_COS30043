<template>
  <div v-if="job" class="job-detail">
    <h2>{{ job.job_title }} ({{ job.job_id }})</h2>
    
    <div class="detail-section">
      <p><strong>Company:</strong> {{ job.company }}</p>
      <p><strong>Location:</strong> {{ job.location }}</p>
      <p><strong>Category:</strong> {{ job.category }}</p>
      <p><strong>Employment Type:</strong> {{ job.employment_type }}</p>
      <p><strong>Salary Range:</strong> {{ job.salary_range }}</p>
      <p><strong>Job Level:</strong> {{ job.job_level }}</p>
    </div>

    <div class="detail-section">
      <h4>Required Skills:</h4>
      <ul>
        <li v-for="skill in job.required_skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>

    <div class="detail-section">
      <h4>Preferred Qualifications:</h4>
      <ul>
        <li v-for="qual in job.preferred_qualifications" :key="qual">{{ qual }}</li>
      </ul>
    </div>

    <div class="detail-section">
      <h4>Description:</h4>
      <p>{{ job.job_description }}</p>
    </div>

    <div class="detail-section">
      <p><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
      <p><strong>Posted Date:</strong> {{ job.posted_date }}</p>
      <p><strong>Supervisor:</strong> {{ job.supervisor }}</p>
      <p><strong>Positions Available:</strong> {{ job.positions_available }}</p>
      <p><strong>Start Date:</strong> {{ job.start_date }}</p>
    </div>

    <div class="detail-section">
      <h4>Tags:</h4>
      <span v-for="tag in job.tags" :key="tag" class="badge bg-secondary me-1">{{ tag }}</span>
    </div>
  </div>
  <div v-else class="alert alert-warning">
    <p>Job not found.</p>
  </div>
</template>

<script>
import { jobs } from '../data/jobs.js';

export default {
  name: 'JobDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    job() {
      return jobs.find(job => job.job_id === this.id);
    }
  }
};
</script>

<style scoped>
.job-detail {
  padding: 20px;
}

.job-detail h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.detail-section {
  margin-bottom: 20px;
}

.detail-section h4 {
  color: #000000;
  margin-bottom: 10px;
  font-size: 1.15rem;
  font-weight: 600;
}

.detail-section ul {
  list-style-type: disc;
  margin-left: 20px;
}

.detail-section p {
  line-height: 1.6;
}
</style>
