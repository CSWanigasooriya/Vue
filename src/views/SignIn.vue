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
    <Dialog />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Dialog from "../components/Dialog.vue";
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
    $(".modal").modal();
  },
  components: {
    Header,
    Footer,
    Dialog,
  },
  methods: {
    signIn() {
      this.authenticated = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user
            .getIdTokenResult()
            .then((idTokenResult) => {
              // Confirm the user is an Admin.
              if (!!idTokenResult.claims.admin) {
                // Show admin UI.
                this.$router.push("/admin");
              } else {
                // Show regular user UI.
                this.$router.push("/user");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          //Handle error
          this.authenticated = false;
          var content =
            '<div id="sign-in-modal" class="modal modal-fixed-footer"><div class="modal-content"><h4>{{ title }}</h4><p>{{ message }}</p></div><div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a> </div></div>';
          $(".modal").append(content);
          $(".modal").modal("open");
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
  min-height: 80vh;
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