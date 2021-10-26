<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card" >
          <div class="card-content">
            <button class="btn" @click="showAddCourse=!showAddCourse">Add Course</button>
      <AddCourse v-if="showAddCourse"/> 

    <table class="striped">
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody v-if="courses && courses.length">
        <tr v-for="course in courses" :key="course.course_code">
          <td>{{ course.course_code }}</td>
          <td>{{ course.course_name }}</td>
          <td>{{ course.no_of_credits }}</td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddCourse from "../components/AddCourse.vue"
export default {
  data() {
    return {
      courses: [],
      showAddCourse: false
    };
  },
  components: { AddCourse
  },
  created() {
    axios
      .get(`http://localhost:3000/courses`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.courses = response.data;
      })
      .catch((e) => {
        // this.errors.push(e);
      });
  },
};
</script>

<style scoped>
.btn {
  background: #383838 !important;
  color: #5fe6f9;
  margin-bottom: 3%;
}
.card {
  border-radius: 2em;
  height: 82vh;
}

.valign-wrapper {
  height: 65vh;
}
.card-content{
  padding:3%;
  overflow-y:auto
}
</style>