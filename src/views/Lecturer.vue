<template>
  <div class="container">
      <button class="btn" @click="showAddLecturer=!showAddLecturer">Add Lecturer</button>
      <AddLecturer v-if="showAddLecturer"/> 

    <table class="striped">
      <thead>
        <tr>
          <th>Lecturer ID</th>
          <th>NIC</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody v-if="lecturers && lecturers.length">
        <tr v-for="lecturer in lecturers" :key="lecturer.lecID">
          <td>{{ lecturer.lecID }}</td>
          <td>{{ lecturer.lec_NIC }}</td>
          <td>{{ lecturer.lec_fName }}</td>
          <td>{{ lecturer.lec_lName }}</td>
          <td>{{ lecturer.lec_address }}</td>
          <td>{{ lecturer.lec_DOB }}</td>
          <td>{{ lecturer.lec_email }}</td>
          <td>{{ lecturer.lec_gender }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AddLecturer from "../components/AddLecturer.vue"
export default {
  data() {
    return {
      lecturers: [],
      showAddLecturer: false
    };
  },
  components: { AddLecturer
  },
  created() {
    axios
      .get(`http://localhost:3000/lecturers`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.lecturers = response.data;
      })
      .catch((e) => {
        // this.errors.push(e);
      });
  },
};
</script>