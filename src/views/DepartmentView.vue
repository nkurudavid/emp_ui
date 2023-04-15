<script>
import axios from 'axios'
import variables from '@/assets/variables/variables';

export default {
  name: 'Departments',
  data() {
    return {
      allDepartments: [],
      modelTitle: "",
      departmentName: "",
      departmentId: 0,
    }
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    refreshData() {
      axios.get(variables.API_URL + 'departments/').then(response => {
        this.allDepartments = response.data
      })
    },
    newClick(){
      this.modelTitle = "Register new Department";
      this.departmentName = "";
      this.departmentId = 0;
    },
    viewClick(dep){
      this.modelTitle = "Update Department";
      this.departmentName = dep.department;
      this.departmentId = dep.id;
    },
    createClick(){
      axios.post(variables.API_URL + 'departments/', {
        department: this.departmentName,
      }).then(response => {
        this.refreshData();
        alert(response.data);
      }).catch(error => {
        alert(error.response.data);
      })
    },
    updateClick(){
      axios.put(variables.API_URL + 'departments/' + this.departmentId,{
        department: this.departmentName,
        id: this.departmentId,
      }).then(response => {
        this.refreshData();
        alert(response.data);
      }).catch(error => {
        alert(error.response.data);
      })
    },
    deleteClick(dep){
      if(!confirm("Are you sure you want to delete?")){
        return;
      }
      axios.delete(variables.API_URL + 'departments/' + dep.id).then(response => {
        this.refreshData();
        alert(response.data);
      }).catch(error => {
        alert(error.response.data);
      })
    }
  }
}
</script>

<template>
  <section class="bg-light">
    <div class="container pt-5 pb-5">
      
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb float-end">
          <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">Departments</li>
        </ol>
      </nav>

      <h1 class="text-primary">Department</h1>
      <div class="row">
        <div class="table-responsive">
            <button 
              type="button" 
              class="btn btn-sm btn-info float-end" 
              data-bs-toggle="modal" 
              data-bs-target="#formModal" 
              @click="newClick()"
              >Register New Department</button>
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
              <tr v-for="dep, index in allDepartments" :key="dep.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ dep.department }}</td>
                <td>
                  <div class="fit-content float-end">
                    <button class="btn btn-sm btn-primary m-1" href="#" data-bs-toggle="modal" data-bs-target="#formModal" @click="viewClick(dep)">
                      <font-awesome-icon :icon="['fas', 'edit']" /> Edit
                    </button>
                    <button class="btn btn-sm btn-danger m-1" href="#" @click="deleteClick(dep)">
                      <font-awesome-icon :icon="['fas', 'trash-can']" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-info">
              <h1 class="modal-title fs-5 text-dark" id="formModalLabel">{{ modelTitle }}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pt-4 pb-4">
              <div class="form-container">
                <form action="">
                  <div class="form-group mb-3">
                    <label for="departmentName" class="col-form-label text-secondary">Department Name</label>
                    <input type="text" class="form-control" id="departmentName" placeholder="Department Name" v-model="departmentName">
                  </div>
                  <div class="form-group mb-3">
                    <button type="submit" v-if="departmentId==0" class="btn btn-sm btn-primary" @click.prevent="createClick()">Register</button>
                  </div>
                  <div class="form-group mb-3">
                    <button type="submit" v-if="departmentId!=0" class="btn btn-sm btn-primary" @click.prevent="updateClick()">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
