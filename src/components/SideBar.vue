<template>
  <div class="sideBar">
    <div class="sideBarBtn" v-for="elem in arrOfNames" :key="elem.path">
      <router-link :to="elem.path">{{ elem.name }}</router-link>
    </div>
  </div>
</template>

<script>
import RouterInf from "@/router/index.js";
export default {
  data() {
    return {
      arrOfNames: RouterInf.options.routes.filter((elem) => {
        if (elem.meta.layout === "Main" && elem.name !== "userprofile")
          return elem.name;
      }),
    };
  },
};
</script>

<style scoped>
.sideBar {
  position: fixed;
  box-sizing: border-box;
  height: 92vh;
  width: 20%;
  border-right: 1px solid rgb(235, 236, 238);
  border-left: 2px solid rgb(235, 236, 238);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 1em;
}

.sideBarBtn {
  display: flex;
  height: 5%;
  box-sizing: border-box;
  border-top: 1px solid rgb(235, 236, 238);
  transition: all 0.4s;
}
.sideBarBtn :hover {
  background: rgb(245, 235, 0);
  transition: all 0.4s;
}
.sideBar :last-child {
  border-bottom: 1px solid rgb(235, 236, 238);
}

.sideBarBtn a {
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

.router-link-active {
  background: rgb(245, 235, 0);
}
.router-link-active:hover {
  background: rgb(245, 235, 0);
}

</style>
