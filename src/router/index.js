import { createRouter, createWebHistory } from 'vue-router';
import JobExplorerLayout from '../components/JobExplorerLayout.vue';
import JobOverview from '../components/JobOverview.vue';
import JobDetail from '../components/JobDetail.vue';
import ApplicationForm from '../components/ApplicationForm.vue';
import ToDoList from '../components/ToDoList.vue';

const routes = [
  {
    path: '/',
    redirect: '/jobs/overview'
  },
  {
    path: '/jobs',
    component: JobExplorerLayout,
    children: [
      {
        path: 'overview',
        name: 'JobOverview',
        component: JobOverview
      },
      {
        path: ':id',
        name: 'JobDetail',
        component: JobDetail,
        props: true
      }
    ]
  },
  {
    path: '/jobApplication',
    name: 'JobApplication',
    component: ApplicationForm
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: ToDoList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
