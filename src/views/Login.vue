<template>
  <form class="logCard" @submit.prevent="submitHandler">
    <div class="inputForm">
      <span class="label">Cabinet-app</span>
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
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(8),
        },
      },
    };
  },
  methods: {
    submitHandler() {
      if (this.v$.form.$invalid) {
        return;
      }
      const formData = {
        email: this.form.email,
        password: this.form.password,
      };

      console.log(formData);
      this.$router.push("/userprofile");
    },
  },
};
</script>

<style scoped>
.logCard {
  height: 40%;
  width: 30%;
  box-shadow: 5px 15px 50px 5px rgb(124, 121, 121);
  background-color: white;
  animation: fade-in 0.4s linear;
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

.invalid {
  display: none;
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

@keyframes fade-in {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
