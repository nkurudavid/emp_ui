import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/departments',
      name: 'Departments',
      component: () => import('../views/DepartmentView.vue')
    },
    {
      path: '/employees',
      name: 'Employees',
      component: () => import('../views/EmployeeView.vue')
    }
  ]
})

export default router
