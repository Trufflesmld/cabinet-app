<template>
  <component :is="layout">
    <router-view />
  </component>
  <notifications
    position="bottom right"
    width="30vw"
    classes="my-notification"
  />
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout + "Layout";
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap");

#app {
  font-family: "Teko", sans-serif;
}
.my-notification {
  font-size: 2em;
  color: black;
  margin: 0 5px 5px;
  padding: 10px;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
.my-notification.success {
  background: #68cd86;
  border-left-color: #42a85f;
}

.my-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.my-notification.error {
  background: #e54d42;
  border-left-color: #b82e24;
}
</style>
