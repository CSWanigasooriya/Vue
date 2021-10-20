<template>
  <Header title="Header" />
  <LecturerNav />
  <main>
    <router-view></router-view>
  </main>
  <!-- <Footer /> -->
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LecturerNav from "../components/LecturerNav.vue";
export default {
  name: "User",
  components: {
    Header,
    Footer,
    LecturerNav,
  },
};
</script>

<style scoped>
</style>