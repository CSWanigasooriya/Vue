<template>
  <div class="container">
    <h1>Home</h1>
    <button class="btn" @click="$router.push('/user/about')">About</button>
    <button class="btn" @click="$router.push('/user/home')">Home</button>
    <button class="btn" @click="signOut()">Sign Out</button>
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
button {
  margin: 0.5em;
}
</style>