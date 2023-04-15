<script>
import axios from 'axios'
import variables from '@/assets/variables/variables';

export default {
  name: 'Employees',
  data() {
    return {
      allEmployees: [],
      allDepartments: [],
    }
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    refreshData() {
      axios.get(variables.API_URL + 'employees/').then(response => {
        this.allEmployees = response.data
      })
      axios.get(variables.API_URL + 'departments/').then(response => {
        this.allDepartments = response.data
      })
    },
  }
}
</script>

<template>
  <section class="bg-light">
    <div class="container pt-5 pb-5">

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb float-end">
        <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>

      <h1 class="text-primary">Management</h1>
      <hr>
      <div class="row mt-5 mb-5">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Departments</h3>
            </div>
            <div class="card-body">
              <span class="h1">
                {{ allDepartments.length }}
              </span>
              <div>
                <RouterLink to="/departments">View Departments</RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Employees</h3>
            </div>
            <div class="card-body">
              <span class="h1">{{ allEmployees.length }}</span>
              <div>
                <RouterLink to="/employees">View Employees</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
