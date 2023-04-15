<script>
import axios from 'axios'
import variables from '@/assets/variables/variables';

export default {
  name: 'Employees',
  data() {
    return {
      allEmployees: [],
      allDepartments: [],

      employeeId: 0,
      employeeFirstName: "",
      employeeLastName: "",
      employeeEmail: "",
      employeePhoneNumber: "",
      employeeDepartment: "",
      modelTitle: "",
      photoFileName: "media/anonymous.png",
      photoPath: variables.API_URL,
      previewProfilePicture: null,
    }
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
      return date.toLocaleDateString('en-US', options);
    },
    refreshData() {
      axios.get(variables.API_URL + 'employees/').then(response => {
        this.allEmployees = response.data
      })
      axios.get(variables.API_URL + 'departments/').then(response => {
        this.allDepartments = response.data
      })
    },
    newClick(){
      this.modelTitle = "Register new Employee";
      this.employeeId = 0;
      this.employeeFirstName = "";
      this.employeeLastName = "";
      this.employeeEmail = "";
      this.employeePhoneNumber = "";
      this.employeeDepartment = "";
      this.photoFileName = "media/anonymous.png";
    },
    viewClick(employee){
      this.modelTitle = "Update Employee";
      this.employeeId = employee.id;
      this.employeeFirstName = employee.first_name;
      this.employeeLastName = employee.last_name;
      this.employeeEmail = employee.email;
      this.employeePhoneNumber = employee.phone_number;
      this.employeeDepartment = employee.department;
      this.photoFileName = employee.profile_picture;
    },
    imageUpload(event) {
      this.photoFileName = event.target.files[0];
      this.photoFileName = URL.createObjectURL(this.photoFileName);
    },
    createClick(){
      let formData = new FormData();
      formData.append('department', this.employeeDepartment,);
      formData.append('first_name', this.employeeFirstName,);
      formData.append('last_name', this.employeeLastName,);
      formData.append('email', this.employeeEmail,);
      formData.append('phone_number', this.employeePhoneNumber);
      formData.append('profile_picture', this.photoFileName);

      axios.post(variables.API_URL + 'employees/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      // axios.post(variables.API_URL + 'employees/', {
      //   department: this.employeeDepartment,
      //   first_name: this.employeeFirstName,
      //   last_name: this.employeeLastName,
      //   email: this.employeeEmail,
      //   phone_number: this.employeePhoneNumber,
      //   profile_picture: this.photoFileName
      // })
      .then(response => {
        this.refreshData();
        alert(response.data);
      }).catch(error => {
        alert(error.response.data);
      })
    },
    updateClick(){
      axios.put(variables.API_URL + 'employees/' + this.employeeId,{
        id: this.employeeId,
        department: this.employeeDepartment,
        first_name: this.employeeFirstName,
        last_name: this.employeeLastName,
        email: this.employeeEmail,
        phone_number: this.employeePhoneNumber,
        profile_picture: this.photoFileName,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        this.refreshData();
        alert(response.data);
      }).catch(error => {
        alert(error.response.data);
      })
    },
    deleteClick(employee){
      if(!confirm("Are you sure you want to delete?")){
        return;
      }
      axios.delete(variables.API_URL + 'employees/' + employee.id).then(response => {
        this.refreshData();
        alert(response.data);
      }).catch(error => {
        alert(error.response.data);
      })
    },
  }
}
</script>

<template>
  <section class="bg-light">
    <div class="container pt-5 pb-5">
      <h1 class="text-success">Employees</h1>
      <div class="row">
        <div class="table-responsive">
            <button 
              type="button" 
              class="btn btn-sm btn-success float-end" 
              data-bs-toggle="modal" 
              data-bs-target="#formModal" 
              @click="newClick()"
              >Register New Employee</button>
          <table class="table caption-top">
            <caption>List of All Employees</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Department</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Joined Date</th>
                <th scope="col">Image</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee, index in allEmployees" :key="employee.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ employee.department.department }}</td>
                <td>{{ employee.first_name }} {{ employee.last_name }}</td>
                <td>Email: {{ employee.email }} <br>Phone: {{ employee.phone_number }}</td>
                <td>{{ formatDate(employee.dateJoined) }}</td>
                <td><img :src="photoPath+employee.profile_picture" width="200" alt="" srcset=""></td>
                <td>
                  <div class="fit-content float-end">
                    <button class="btn btn-sm btn-primary m-1" href="#" data-bs-toggle="modal" data-bs-target="#formModal" @click="viewClick(employee)">
                      <font-awesome-icon :icon="['fas', 'edit']" /> Edit
                    </button>
                    <button class="btn btn-sm btn-danger m-1" href="#" @click="deleteClick(employee)">
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
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="formModalLabel">{{ modelTitle }}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pt-4 pb-4">
              <div class="form-container">
                <form action="" class="row">
                  <div class="col-lg-7">
                    <div class="input-group mb-3">
                      <label for="names" class="input-group-text text-secondary"><font-awesome-icon :icon="['fas', 'user']" /></label>
                      <input type="text" class="form-control" id="names" v-model="employeeFirstName" placeholder="First Name" required>
                      <input type="text" class="form-control" id="names" v-model="employeeLastName" placeholder="Last Name" required>

                    </div>
                    <div class="input-group mb-3">
                      <label for="email" class="input-group-text text-secondary"><font-awesome-icon :icon="['fas', 'envelope']" /></label>
                      <input type="email" class="form-control" id="email" v-model="employeeEmail" placeholder="Email" required>
                    </div>
                    <div class="input-group mb-3">
                      <label for="phone_number" class="input-group-text text-secondary"><font-awesome-icon :icon="['fas', 'phone']" /></label>
                      <input type="text" class="form-control" id="phone_number" v-model="employeePhoneNumber" placeholder="Phone Number" required>
                    </div>
                    <div class="input-group mb-3">
                      <label for="department" class="input-group-text text-secondary">Department</label>
                      <select class="form-select" id="department" v-model="employeeDepartment">
                        <option value="">Select Department</option>
                        <option v-for="dep in allDepartments" :key="dep.id" :value="dep.id">{{ dep.department }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-5">
                  <div class="w-100 bg-highlight mb-3">
                    <img :src="photoPath+photoFileName" width="300" class="m-auto" />
                    <div class="input-group mb-3">
                      <input type="file" class="form-control" placeholder="Profile Picture" @change="imageUpload" />
                    </div>
                  </div>
                  </div>
                  <div class="input-group">
                    <button type="submit" v-if="employeeId==0" class="btn btn-md btn-primary" @click.prevent="createClick()">Register</button>
                  </div>
                  <div class="input-group">
                    <button type="submit" v-if="employeeId!=0" class="btn btn-md btn-primary" @click.prevent="updateClick()">Update</button>
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
