<template>
  <Header title="Header" />
  <SideNav />
  <main>
    <div class="content">
      <router-view></router-view>
    </div>
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
  padding-left: 300px;
}

@media only screen and (max-width: 992px) {
  header,
  main,
  footer {
    padding-left: 0;
  }
}
</style>
