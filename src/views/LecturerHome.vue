<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Time Table</span>
            <table class="responsive-table highlight">
              <thead>
                <tr>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednsday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>DSA</td>
                  <td>GPSD</td>
                  <td>GPSD</td>
                  <td>GPSD</td>
                  <td>GPSD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Announcements</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Courses</span>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Attendence</span>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Messages</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Home",
  mounted() {
    $(".sidenav").sidenav("open");
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 1em;
}
</style>