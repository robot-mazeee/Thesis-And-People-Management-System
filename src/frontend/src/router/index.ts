import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '@/views/people/PeopleView.vue'
import StatisticsView from '@/views/statistics/StatisticsView.vue'
import JuriProposal from '@/components/juri_proposal/ProposeJuri.vue'
import StudentProfile from '@/components/student/StudentProfile.vue'
import WorkflowsView from '@/views/workflows/WorkflowsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView
    },
    {
      path: '/workflows',
      name: 'workflows',
      component: WorkflowsView
    },
    {
      path: '/juri-proposal',
      name: 'juri-proposal',
      component: JuriProposal
    },
    { 
      path: "/people/:id",
      name: "student-profile",
      component: StudentProfile
    }
  ]
})

export default router
