<template>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.content {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

header,
main,
footer {
  padding-left: 332px;
}

@media only screen and (max-width: 992px) {
  header,
  main,
  footer {
    padding-left: 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 95%;
}

button {
  border-radius: 20px !important;
  background-color: #5a5ecf !important;
}
</style>
