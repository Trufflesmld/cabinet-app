<template>
  <form class="regCard" @submit.prevent="submitHandler">
    <div class="inputForm">
      <span class="label">Cabinet-app</span>
      <!-- Email -->
      <div class="inputContainer">
        <input
          id="email"
          type="text"
          placeholder="Email"
          v-model="v$.form.email.$model"
          :class="{ invalidInput: v$.form.email.$errors.length }"
        />
        <small
          class="helperText"
          v-if="v$.form.email.required.$invalid && v$.form.email.$errors.length"
          >{{ v$.form.email.required.$message }}</small
        >
        <small class="helperText" v-if="v$.form.email.email.$invalid">{{
          v$.form.email.email.$message
        }}</small>
      </div>
      <!-- Password -->
      <div class="inputContainer">
        <input
          id="password"
          type="password"
          placeholder="Password"
          v-model="v$.form.password.$model"
          :class="{ invalidInput: v$.form.password.$errors.length }"
        />
        <small
          class="helperText"
          v-if="
            v$.form.password.required.$invalid &&
              v$.form.password.$errors.length
          "
          >{{ v$.form.password.required.$message }}</small
        >
        <small
          class="helperText"
          v-if="
            v$.form.password.min.$invalid && v$.form.password.$errors.length
          "
          >{{ v$.form.password.min.$message }}. Now the password length is
          {{ this.form.password.length }}</small
        >
      </div>
      <!-- Confirm password -->
      <div class="inputContainer">
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          v-model="v$.form.confirmPassword.$model"
          :class="{ invalidInput: v$.form.confirmPassword.$errors.length }"
        />
        <small
          class="helperText"
          v-if="
            v$.form.confirmPassword.required.$invalid &&
              v$.form.confirmPassword.$errors.length
          "
          >{{ v$.form.confirmPassword.required.$message }}</small
        >
        <small
          class="helperText"
          v-else-if="checkPassword()"
          >Password mismatch</small
        >
      </div>
      <!-- Name -->
      <div class="inputContainer">
        <input
          id="name"
          type="text"
          placeholder="Name"
          v-model="v$.form.name.$model"
          :class="{ invalidInput: v$.form.name.$errors.length }"
        />
        <small
          class="helperText"
          v-if="v$.form.name.required.$invalid && v$.form.name.$errors.length"
          >{{ v$.form.name.required.$message }}</small
        >
      </div>
      <p>
        By signing up, you agree the rules.
      </p>
    </div>
    <div class="submitForm">
      <div class="submitBtn">
        <button type="submit">
          Sign up
        </button>
      </div>

      <p>
        Have an account?
        <router-link to="/login">Log in</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        password: { required, min: minLength(8) },
        confirmPassword: { required },
      },
    };
  },
  methods: {
    submitHandler() {
      if (this.v$.form.$invalid) {
        this.v$.form.$touch()
        return;
      }
      const formData = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      };

      console.log(formData);
      this.$router.push("/userprofile");
    },
    checkPassword() {
      if(this.form.password != this.form.confirmPassword) return true
      else return false
    }
  },
};
</script>

<style scoped>
.regCard {
  height: 80%;
  min-width: 50%;
  box-shadow: 5px 15px 50px 5px rgb(124, 121, 121);
  background-color: white;
  animation: fade-in 0.4s linear;
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
  height: 50%;
}
input {
  font-family: "Teko", sans-serif;
  box-sizing: border-box;
  border: none;
  border-top: 1px solid rgb(235, 236, 238);
  border-bottom: 1px solid rgb(235, 236, 238);
  width: 100%;
  height: 60%;
  font-size: 1.5em;
  outline: none;
  padding-left: 1em;
}
.invalidInput {
  border-top: 1px solid red;
  border-bottom: 1px solid red;
}

.helperText {
  color: red;
  font-size: 1.3em;
  padding-left: 1em;
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
  height: 40%;
  margin-top: 10%;
}
button {
  border: none;
  width: 70%;
  margin: 0 15%;
  height: 60%;
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
p {
  font-size: 1.1em;
}

@media screen and (max-width: 1280px) {
  .regCard {
    width: 50%;
  }
}

@media screen and (max-width: 800px) {
  .regCard {
    width: 90%;
    height: 90%;
  }
  .inputForm {
    height: 80%;
  }
  .submitForm {
    height: 20%;
  }
  button {
    height: 90%;
  }
  input {
    height: 50%;
  }
  .inputContainer {
    height: 60%;
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
