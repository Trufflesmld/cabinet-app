<template>
  <div class="wrapper">
    <loading
      v-model:active="loading"
      :can-cancel="false"
      :is-full-page="false"
      :color="'#fff500'"
    />
    <template v-if="!loading">
      <HomeBill :currencies="currency" />
      <HomeCurrency :currencies="currency" />
    </template>
  </div>
</template>

<script>
import HomeBill from "@/components/home-page/HomeBill.vue";
import HomeCurrency from "@/components/home-page/HomeCurrency.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  components: {
    HomeBill,
    HomeCurrency,
    Loading,
  },
  data: () => ({
    loading: true,
    currency: null,
  }),
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    this.loading = false;
  },
};
</script>

<style scoped>
.wrapper {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding-top: 5vw;
  padding-left: 2vw;
  padding-right: 2vw;
  display: flex;
  flex-direction: row;
}
</style>
