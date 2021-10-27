<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-content">
          <div class="row">
            <div class="col s6">
              <br />
              <p class="left"><b>New Course</b></p>
            </div>
            <div class="col s6">
              <button class="btn right">Save</button>
            </div>
            
          </div>
          <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="course_code"
                      class="materialize-textarea"
                    v-model="form.course_code"></textarea>
                    <label for="course_code">Course Code</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="course_name"
                      class="materialize-textarea"
                    v-model="form.course_name"></textarea>
                    <label for="course_name">Course Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="no_of_credits"
                      class="materialize-textarea"
                    v-model="form.no_of_credits"></textarea>
                    <label for="no_of_credits">Credits</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea id="year" class="materialize-textarea"></textarea>
                    <label for="year">Year</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="semester"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="semester">Semester</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12">
              <button class="btn right" @click="onSubmit">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import axios from "axios";
const auth = getAuth();
const user = auth.currentUser;
export default {
  data() {
    return {
      form: {
        course_code: "",
        course_name: "",
        no_of_credits: null,
        
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post("http://localhost:3000/courses", this.form)
        .then(this.$emit("toggle-card", true));
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 2em;
  height: 85vh;
}

.valign-wrapper {
  height: 65vh;
}

img {
  border-radius: 1em;
}
.btn {
  background: #383838 !important;
  color: #5fe6f9;
}
</style>
