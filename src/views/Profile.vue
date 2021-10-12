<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-content">
          <div class="row valign-wrapper">
            <div class="col s4">
              <img
                src="https://randomuser.me/api/portraits/women/6.jpg"
                class="responsive-img"
              />
            </div>
            <div class="col s8">
              <div class="row">
                <span><b>Name: </b> {{}} </span>
              </div>
              <div class="row">
                <span><b>Name: </b> {{}}</span>
              </div>
              <div class="row">
                <span><b>Name: </b>{{}} </span>
              </div>
              <div class="row">
                <span><b>Name: </b>{{}} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card {
  border-radius: 2em;
  height: 85vh;
}

.valign-wrapper {
  height: 85vh;
}

img {
  border-radius: 1em;
}
</style>