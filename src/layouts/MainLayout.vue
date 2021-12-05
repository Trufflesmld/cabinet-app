<template>
  <div class="mainLayout">
    <Header />
    <div class="layout">
      <SideBar />
      <main><router-view /></main>
    </div>
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
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
};
</script>

<style scoped>
.mainLayout {
  height: 100vh;
  width: 100vw;
  background: url("../assets/MainBackground.png");
}
main {
  position: relative;
  box-sizing: border-box;
  left: 20vw;
  width: 60vw;
  height: 100%;
  border-left: 1px solid rgb(235, 236, 238);
  border-right: 2px solid rgb(235, 236, 238);
  background-color: white;
}
.layout {
  position: relative;
  box-sizing: border-box;
  top: 8vh;
  width: 80vw;
  margin: 0 10%;
  height: 92vh;
}
</style>
