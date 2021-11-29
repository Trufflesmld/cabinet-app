<template>
  <div class="emptyLayout">
    <router-view />
  </div>
</template>

<style scoped>
.emptyLayout {
  height: 100vh;
  width: 100vw;
  background: url("../assets/EmptyBackground.png");
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}
</style>
