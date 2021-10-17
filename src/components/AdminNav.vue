<template>
  <!-- sidenav -->
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li>
      <div class="user-view">
        <!-- <div class="background">
          <img
            src="https://img1.goodfon.com/wallpaper/nbig/9/82/android-material-fon-linii-411.jpg"
            class="responsive-img"
          />
        </div> -->
        <a><img class="circle" v-bind:src="photoURL" /></a>
        <a><span class="white-text name">KDUSMS</span></a>
        <a @click="$router.push('/user/profile')"
          ><span class="white-text email">{{ email }}</span></a
        >
      </div>
    </li>
    <li>
      <router-link to="/user/home" active-class="active">
        <i class="material-icons">home</i>Home
      </router-link>
    </li>
    <li>
      <router-link to="/user/course" active-class="active">
        <i class="material-icons">book</i>Course
      </router-link>
    </li>
    <li>
      <router-link to="/user/grade" active-class="active">
        <i class="material-icons">grade</i>Grade
      </router-link>
    </li>
    <li>
      <router-link to="/user/attendence" active-class="active">
        <i class="material-icons">event</i>Attendance
      </router-link>
    </li>
    <li>
      <router-link to="/user/message" active-class="active">
        <i class="material-icons">message</i>Messages
      </router-link>
    </li>
  </ul>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

export default {
  name: "SideNav",
  data() {
    return {
      photoURL: "",
      email: "",
    };
  },
  created() {
    this.email = user.email;
    this.photoURL = user.photoURL;
  },
};
</script>

<style scoped>
#slide-out {
  margin: 1em;
  border-radius: 1em;
  max-height: 95vh;
  background-color: #383838;
  box-shadow: 0 4px 8px 0 hsla(238, 55%, 58%, 0.205),
    0 6px 20px 0 hsla(238, 55%, 58%, 0.685);
}
.active {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: rgb(255, 255, 255);
  font-weight: bold;
  margin-left: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

a {
  cursor: pointer;
}
</style>