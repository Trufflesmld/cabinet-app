<template>
  <div class="wrapper">
    <div class="label">
      <span>Create record</span>
    </div>
    <form class="form">
      <div class="inputContainer">
        <select>
          <option>Caregory</option>
        </select>
      </div>

      <div class="radioInputContainer">
        <label>
          <input class="radioInput" name="type" type="radio" value="income" />
          <span class="radioInputName">Income</span>
        </label>
      </div>

       <div class="radioInputContainer">
        <label>
          <input class="radioInput" name="type" type="radio" value="outcome" />
          <span class="radioInputName">Outcome</span>
        </label>
      </div>

      <div class="inputContainer">
        <input id="amount" type="number" placeholder="Amount" />
        <!-- <span class="helper-text invalid">validation err</span> -->
      </div>

      <div class="inputContainer">
        <input id="description" type="text" placeholder="Description" />
        <!-- <span class="helper-text invalid">validation err</span> -->
      </div>

      <div class="submitBtn">
        <button type="submit">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  box-sizing: border-box;
  width: 60%;
  margin: 0;
  padding-top: 5vw;
  padding-left: 2vw;
  padding-right: 2vw;
  display: flex;
  flex-direction: column;
  animation: fade-in 0.4s linear;
}
.label {
  height: 30%;
  font-size: 300%;
}
form {
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2vh;
}
.inputContainer {
  width: 100%;
  height: 8vh;
}
.radioInputContainer {
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
}
.radioInputContainer label {
  width: 100%;
}
.radioInputName {
  font-size: 1.5em;
}
select {
  font-family: "Teko", sans-serif;
  box-sizing: border-box;
  border: none;
  border-top: 1px solid rgb(235, 236, 238);
  border-bottom: 1px solid rgb(235, 236, 238);
  width: 100%;
  height: 50%;
  font-size: 1.5em;
  outline: none;
  padding-left: 1em;
}
input {
  font-family: "Teko", sans-serif;
  box-sizing: border-box;
  border: none;
  border-top: 1px solid rgb(235, 236, 238);
  border-bottom: 1px solid rgb(235, 236, 238);
  width: 100%;
  height: 50%;
  font-size: 1.5em;
  outline: none;
  padding-left: 1em;
}
.radioInput {
  height: 30%;
  width: 20%;
}
.submitBtn {
  width: 100%;
  height: 50%;
  margin-top: 2vh;
}
button {
  border: none;
  width: 100%;
  height: 80%;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-family: "Teko", sans-serif;
  background-color: rgb(231, 226, 232);
  border-radius: 2em;
}
button:hover {
  background-color: rgb(255, 245, 0);
  cursor: pointer;
  transition: 0.4s;
}
button:not(:hover) {
  transition: 0.4s;
}
@media screen and (max-width: 1600px) {
  .wrapper {
     width: 80%;
  }
}
@media screen and (max-width: 1280px) {
  .wrapper {
    width: 100%;
  }
}


@keyframes fade-in {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
