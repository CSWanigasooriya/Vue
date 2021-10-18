<template>
  <div class="container">
      <button class="btn" @click="showAddStudent=!showAddStudent">Add student</button>
      <AddStudent v-if="showAddStudent"/> 

    <table class="striped">
      <thead>
        <tr>
          <th>Index Number</th>
          <th>NIC</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody v-if="students && students.length">
        <tr v-for="student in students" :key="student.Reg_num">
          <td>{{ student.Reg_num }}</td>
          <td>{{ student.NIC }}</td>
          <td>{{ student.fName }}</td>
          <td>{{ student.lName }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.DOB }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.gender }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AddStudent from "../components/AddStudent.vue"
export default {
  data() {
    return {
      students: [],
      showAddStudent: false
    };
  },
  components: { AddStudent
  },
  created() {
    axios
      .get(`http://localhost:3000/students`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.students = response.data;
      })
      .catch((e) => {
        // this.errors.push(e);
      });
  },
};
</script>