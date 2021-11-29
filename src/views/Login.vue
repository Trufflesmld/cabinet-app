<template>
  <div class="logCard">
    <form>
      <div class="inputForm">
        <span class="label">Cabinet-app</span>
        <div class="inputContainer">
          <input id="email" type="text" placeholder="Email" />
          <!-- <small class="helperText invalid">Email</small> -->
        </div>
        <div class="inputContainer">
          <input id="password" type="password" placeholder="Password" />
          <!-- <small class="helperText invalid">Password</small> -->
        </div>
      </div>
      <div class="submitForm">
        <div class="submitBtn">
          <button type="submit">
            Log in
          </button>
        </div>

        <p>
          Don't have an account?
          <router-link to="/register">Register now</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.logCard {
  height: 40%;
  width: 30%;
  box-shadow: 5px 15px 50px 5px rgb(124, 121, 121);
  background-color: white;
}
form {
  width: 100%;
  height: 100%;
}
.inputForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 70%;
  align-items: center;
}
.label {
  height: 30%;
  font-size: 300%;
}
.inputContainer {
  width: 100%;
  height: 35%;
}
input {
  box-sizing: border-box;
  border: none;
  border-top: 1px solid rgb(235, 236, 238);
  border-bottom: 1px solid rgb(235, 236, 238);
  width: 100%;
  height: 50%;
  outline: none;
  padding: 1em;
}
.helperText {
  font-size: 1em;
}
.submitForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: center;
}
.submitBtn {
  width: 100%;
  height: 50%;
}
button {
  border: none;
  width: 70%;
  margin: 0 15%;
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
  background-color: rgb(231, 226, 232);
  cursor: pointer;
  transition: 0.4s;
}
p {
  font-size: 1.1em;
}

@media screen and (max-width: 1280px) {
  .logCard {
    width: 50%;
  }
}

@media screen and (max-width: 800px) {
  .logCard {
    width: 80%;
    height: 50%;
  }
}
</style>
