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
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  box-sizing: border-box;
  width: 34vw;
  margin-left: 2vw;
  height: auto;
  background: rgba(255, 245, 0, 0.6);
  box-shadow: 0 0 20px rgb(235, 236, 238);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
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
  padding: 0 0.5%;
}
table {
  width: 100%;
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
  grid-template-columns: 33% 33% 33%;
  font-size: 1.5em;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
td {
    padding-left: 0.5em;
}
</style>
