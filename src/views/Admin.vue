<template>
  <h1>Admin</h1>
  <button @click="signOut">Sign out</button>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
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