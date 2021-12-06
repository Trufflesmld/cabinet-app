<template>
  <div class="container">
    <p class="title">
      Exchange rates
    </p>
    <div class="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cur in currencies" :key="cur.Cur_ID">
            <td>{{cur.Cur_Abbreviation}}</td>
            <td>{{cur.Cur_OfficialRate}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    props: ['currencies'],
}
</script>

<style scoped>
.container {
  box-sizing: border-box;
  width: 34vw;
  margin-left: 2vw;
  height: auto;
  background: rgba(255, 245, 0, 0.6);
  box-shadow: 0 0 20px rgb(235, 236, 238);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
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
.tableContainer {
  box-sizing: border-box;
  width: 100%;
}
table {
  width: 100%;
  text-align: left;
}
thead {
  width: 100%;
}
tbody {
    width: 100%;
    margin: 0;
}
tr {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 1.5em;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>
