<template>
  <Header title="Header" />
  <SideNav />
  <main>
    <router-view></router-view>
  </main>
  <!-- <Footer /> -->
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SideNav from "../components/SideNav.vue";
export default {
  name: "User",
  components: {
    Header,
    Footer,
    SideNav,
  },
};
</script>

<style scoped>
</style>
