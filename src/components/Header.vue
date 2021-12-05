<template>
  <div class="header">
    <h1 class="logo">Cabinet-app</h1>
    <div class="profile">
      <router-link to="/UserProfile"><span>User Profile</span></router-link>
      <router-link to="/login"><span>SignOut</span></router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  height: 8vh;
  width: 100vw;
  background: url("../assets/HeaderBackGround.png");
  box-shadow: 0 0 20px rgb(235, 236, 238);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  right: 15vw;
  letter-spacing: 2px;
  font-size: 3em;
}
.profile {
  display: flex;
  height: 100%;
}
a {
  height: 100%;
  margin: auto;
  font-size: 3vh;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
a span {
  margin: 0 0.5em;
}
a:hover {
  background-color: rgba(116, 116, 116, 0.144);
  transition: 0.4s;
}
a:not(:hover) {
  transition: 0.4s;
}
.router-link-active {
  background: rgba(116, 116, 116, 0.144);
}

</style>
