<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-content">
          <div class="row">
            <div class="col s12">
              <br />
              <p class="left"><b>New Lecturer</b></p>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lecID"
                      class="materialize-textarea"
                      v-model="form.lecID"
                    ></textarea>
                    <label for="lecID">Lecturer ID</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_NIC"
                      class="materialize-textarea"
                      v-model="form.lec_NIC"
                    ></textarea>
                    <label for="lec_NIC">NIC</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_fName"
                      class="materialize-textarea"
                      v-model="form.lec_fName"
                    ></textarea>
                    <label for="lec_fName">First Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_lName"
                      class="materialize-textarea"
                      v-model="form.lec_lName"
                    ></textarea>
                    <label for="lec_lName">Last Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_address"
                      class="materialize-textarea"
                      v-model="form.lec_address"
                    ></textarea>
                    <label for="lec_address">Address</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_country"
                      class="materialize-textarea"
                      v-model="form.lec_country"
                    ></textarea>
                    <label for="lec_country">Country</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_DOB"
                      class="materialize-textarea"
                      v-model="form.lec_DOB"
                    ></textarea>
                    <label for="lec_DOB">Date of Birth</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_email"
                      class="materialize-textarea"
                      v-model="form.lec_email"
                    ></textarea>
                    <label for="lec_email">Email</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_gender"
                      class="materialize-textarea"
                      v-model="form.lec_gender"
                    ></textarea>
                    <label for="lec_gender">Gender</label>
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
        lecID: "",
        lec_NIC: null,
        lec_fName: "",
        lec_lName: "",
        lec_address: "",
        lec_country: "",
        lec_DOB: null,
        lec_email: "",
        lec_gender: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post("http://localhost:3000/lecturers", this.form)
        .then(this.$emit("toggle-card", true));
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 2em;
}

.valign-wrapper {
  height: 65vh;
}

img {
  border-radius: 1em;
}
</style>