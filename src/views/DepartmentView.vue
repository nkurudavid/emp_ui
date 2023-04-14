<script>
import axios from 'axios'

export default {
  name: 'departments',
  data() {
    return {
      departments: []
    }
  },
  methods: {
    refreshData() {
      axios.get(variables.API_URL+"departments").then(response => this.departments = response.data);
    },
    mounted() {
      this.refreshData();
    },
  }
}
</script>

<template>
  <section class="bg-light">
    <div class="container pt-5 pb-5">
      <h1 class="text-success">Department</h1>
      <div class="row">
        <div class="table-responsive">
          <table class="table caption-top">
            <caption>List of All Departments</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Department Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dep in departments" :key="dep.id">
                <th scope="row">{{ dep.id }}</th>
                <td>{{ dep.department }}</td>
                <td>
                  <a class="badge text-bg-primary" href="#">Edit</a>
                  <a class="badge text-bg-danger" href="#">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
