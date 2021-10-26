<template>
  <div class="container">
    <button class="btn" @click="showAddCourse = !showAddCourse">
      Add Course
    </button>
    <AddCourse v-if="showAddCourse" @toggle-card="updateTable"/>

    <table class="striped responsive-table">
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credits</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="courses && courses.length">
        <tr v-for="course in courses" :key="course.course_code">
          <td>{{ course.course_code }}</td>
          <td>{{ course.course_name }}</td>
          <td>{{ course.no_of_credits }}</td>
          <td>
            <i class="material-icons">edit</i
            ><i
              class="material-icons red-text"
              @click="deleteCourse(course.course_code)"
              >delete</i
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AddCourse from "../components/AddCourse.vue";
export default {
  data() {
    return {
      courses: [],
      showAddCourse: false,
    };
  },
  components: { AddCourse },
  methods: {
    async getCourses() {
      await axios
        .get(`http://localhost:3000/courses`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.courses = response.data;
        })
        .catch((e) => {
          // this.errors.push(e);
        });
    },
    async deleteCourse(course_code) {
      await axios.delete(`http://localhost:3000/courses/${course_code}`).then(
        setTimeout(() => {
          this.getCourses();
        }, 100)
      );
    },
    async updateTable() {
      setTimeout(() => {
        this.getCourses();
        this.showAddCourse = false;
      }, 100);
    },
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