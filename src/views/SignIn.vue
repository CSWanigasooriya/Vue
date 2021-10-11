<template>
  <div class="background valign-wrapper">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l4">
          <form @submit.prevent="signIn">
            <div class="card">
              <div class="card-content">
                <span class="card-title center"
                  ><b> Welcome to KDU Student Space!</b>
                </span>
                <p style="font-size: 12px">Additional Text</p>
                <br />

                <div class="row">
                  <div class="col s12">
                    <input
                      type="email"
                      placeholder="Email address..."
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col s12">
                    <input
                      type="password"
                      placeholder="Password..."
                      v-model="password"
                    />
                  </div>
                </div>
              </div>
              <div class="card-action center">
                <div class="progress transparent" v-if="authenticated">
                  <div class="indeterminate indigo"></div>
                </div>
                <button type="submit" class="btn">Sign In</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col s12 m6 l8 hide-on-small-only">
          <img src="@/assets/login.png" class="responsive-img" />
        </div>
      </div>
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
      this.authenticated = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
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
          this.authenticated = false;
          alert(errorMessage);
        });
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #835acf52;
}

.card {
  border-radius: 1em;
  min-height: 79vh;
}

.card-content {
  height: 65vh;
}

.valign-wrapper {
  height: 100vh;
}

.card-title {
  color: #5e5acf;
}

img {
  margin-top: 5vh;
}
</style>