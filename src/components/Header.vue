<template>
  <div class="header">
    <h1 class="logo">Cabinet-app</h1>
    <div class="profile">
      <router-link to="/UserProfile"><span>User Profile</span></router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  height: 8vh;
  width: 100vw;
  /* background-color: rgb(255,245,0); */
  background: url("../assets/HeaderBackGround.png");
  box-shadow: 0 0 20px rgb(235, 236, 238);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
h1 {
  position: relative;
  right: 15vw;
  letter-spacing: 2px;
  font-size: 7vh;
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
</style>
