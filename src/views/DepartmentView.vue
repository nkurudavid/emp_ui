<script>
import axios from 'axios'
import variables from '@/assets/variables/variables';

export default {
  name: 'Departments',
  data() {
    return {
      departments: [],
      modelTitle: "",
      departmentName: "",
      departmentId: "",
    }
  },
  mounted() {
    this.getDepartments();
  },
  methods: {
    getDepartments() {
      axios.get(variables.API_URL + 'departments').then(response => {
        this.departments = response.data
      }).catch(error => {
        console.error('Error fetching departments:', error)
      })
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
              <tr v-for="dep, index in departments" :key="dep.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ dep.department }}</td>
                <td>
                  <a class="badge text-bg-primary p-2 m-1" href="#"><font-awesome-icon :icon="['fas', 'edit']" /> Edit</a>
                  <a class="badge text-bg-danger p-2 m-1" href="#"><font-awesome-icon :icon="['fas', 'trash-can']" />
                    Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">{{ modelTitle }}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
