<template>
  <div class="editForm">
    <div>
      <div class="label">
        <span>
          Edit category
        </span>
      </div>

      <form>
        <div class="inputContainer">
          <select>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
          </select>
        </div>

        <div class="inputContainer">
          <input type="text" id="name" placeholder="Category name" />
          <!-- <span class="helper-text invalid">TITLE</span> -->
        </div>

        <div class="inputContainer">
          <input id="limit" type="number" placeholder="Limit" />
          <!-- <span class="helper-text invalid">LIMIT</span> -->
        </div>

        <div class="submitBtn">
          <button type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.editForm {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 40%;
  width: 100%;
  animation: fade-in 0.4s linear;
  margin-left: 5%;
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
  align-items: center;
  padding-top: 2vh;
}
.inputContainer {
  width: 100%;
  height: 8vh;
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
@media screen and (max-width: 1280px) {
  .editForm {
    margin: 0;
    margin-top: 5vh;
  }
}

@media screen and (max-width: 800px) {
  .editForm {
    margin: 0;
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
