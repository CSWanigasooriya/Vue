<template>
  <div class="container">
    <div class="progress" v-if="authenticated">
      <div class="indeterminate"></div>
    </div>
    <h1>Sign In</h1>
    <div>
      <form @submit.prevent="signIn()">
        <input type="email" placeholder="Email address..." v-model="email" />
        <input type="password" placeholder="Password..." v-model="password" />
        <button type="submit" class="btn cyan darken-4">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      authenticated: false,
    };
  },
  props: {
    title: String,
  },
  mounted() {
    $(".sidenav").sidenav("close");
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.authenticated = true;

          setTimeout(() => {
            const user = userCredential.user;
            this.$router.push("/user/home");
            console.log(user);
          }, 3000); //Three second delay to show progress bar
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          //Handle error
          alert(errorMessage);
        });
    },
  },
};
</script>

<style scoped>
</style>