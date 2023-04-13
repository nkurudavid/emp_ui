import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepartmentView from '../views/DepartmentView.vue'
import EmployeeView from '../views/EmployeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/departments',
      name: 'departments',
      component: () => DepartmentView
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => EmployeeView
    }
  ]
})

export default router
