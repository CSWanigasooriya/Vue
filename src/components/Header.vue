<template>
  <header>
    <nav>
      <div class="nav-wrapper blue-grey darken-4">
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <a href="#" class="brand-logo">
          <span>{{ title }}</span>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/about">About</router-link></li>
          <li>
            <a href="#"><i class="material-icons">more_vert</i></a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- sidenav -->
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li>
        <div class="user-view">
          <div class="background">
            <img
              src="https://img1.goodfon.com/wallpaper/nbig/9/82/android-material-fon-linii-411.jpg"
              class="responsive-img"
            />
          </div>
          <a href="#user"
            ><img
              class="circle"
              src="https://randomuser.me/api/portraits/med/women/6.jpg"
          /></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"
            ><span class="white-text email">jdandturk@gmail.com</span></a
          >
        </div>
      </li>
      <li>
        <a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a>
      </li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>

    <!-- Dropdown Structure -->
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
  mounted() {
    $(".sidenav").sidenav();
    $(".dropdown-trigger").dropdown();
  },
};
</script>

<style scoped>
.brand-logo {
  margin-left: 1em;
  position: relative;
}

.brand-logo img {
  max-height: 54px;
}
</style>
