<template>
  <div class="mainLayout">
    <Header />
    <SideBar />
    <main><router-view /></main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    Header,
    SideBar,
  },
};
</script>

<style scoped>
main {
    position: relative;
    box-sizing: border-box;
    top: 8vh;
    left: 25vw;
    width: 75vw;
    height: 92vh;
    border: 1px solid blue;
}
</style>
