<template>
  <div class="container">
    <p class="title">Current bill</p>
    <p class="bill">
      <span>{{ this.$store.getters.info.bill }} BYN</span>
    </p>
    <p class="bill" v-for="cur in currencies" :key="cur.Cur_ID">
      <span
        >{{ getCurrency(cur.Cur_OfficialRate, cur.Cur_Abbreviation) }}
        {{ cur.Cur_Abbreviation }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["currencies"],
  computed: {
    bill() {
      return this.$store.getters.info.bill;
    },
  },
  methods: {
    getCurrency(rate, name) {
      return name == "RUB"
        ? ((this.bill * 100) / rate).toFixed(2)
        : (this.bill / rate).toFixed(2);
    },
  },
};
</script>

<style scoped>
.container {
  box-sizing: border-box;
  width: 20vw;
  height: auto;
  background: rgba(255, 245, 0, 0.6);
  box-shadow: 0 0 20px rgb(235, 236, 238);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 1em;
}
.title {
  box-sizing: border-box;
  padding-left: 1vw;
  font-size: 2em;
  border-bottom: 1px solid black;
  width: 100%;
  margin: 0;
  margin-top: 1vh;
}
.bill {
  box-sizing: border-box;
  padding-left: 1vw;
  font-size: 1.5em;
  width: 100%;
  margin: 0;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>
