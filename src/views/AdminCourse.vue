<template>
  <div class="container">
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