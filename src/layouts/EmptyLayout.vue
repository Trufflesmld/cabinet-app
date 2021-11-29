<template>
  <div class="emptyLayout">
    <div class="layout">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.emptyLayout {
    height: 100vh;
    width: 100vw;
    background-color: rgba(206, 206, 206, 0.527);
    display: flex;
    justify-content: center;
    align-items: center;
}

.layout {
    height: 40%;
    width: 40%;
}

</style>