<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-content">
          <div class="row">
            <div class="col s12">
              <button class="btn right">Save</button>
            </div>
          </div>
          <div class="row">
            <div class="col s12 ">
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="Reg_num"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="Reg_num">Index Number</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="NIC"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="NIC">NIC</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="fName"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="fName">First Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="lName"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lName">Last Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="address"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="address">Address</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="country"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="country">Country</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="DOB"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="DOB">Date of Birth</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="email"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="gender"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="gender">Gender</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
export default {
  data() {
    return {
      email: "",
    };
  },
  created() {
    this.email = user.email;
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