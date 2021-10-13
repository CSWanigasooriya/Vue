
<template>
  <div>
    <ul v-if="users && users.length">
      <!-- //for loop -->
      <li v-for="user in users" :key="user.email"> 
        {{ user.email }}
        {{ user.password }}
      </li>
    </ul>
    <h1>{{chamath}}</h1>

    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      chamath:null
    };
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
  created() {
    axios
      .get(`http://localhost:3000/users`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.users = response.data;
      })
      .catch((e) => {
        // this.errors.push(e);
      });
      
      axios
      .get(`http://localhost:3000/users/chamath@gmail.com`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.chamath = response.data;
      })
      .catch((e) => {
        // this.errors.push(e);
      });
  },
};
</script>