<template>
  <div class="createForm">
      <div class="label">
        <span>Create category</span>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="inputContainer">
          <input
            id="name"
            type="text"
            placeholder="Category name"
            v-model="v$.form.title.$model"
            :class="{ invalidInput: v$.form.title.$errors.length }"
          />
          <small
            class="helperText"
            v-if="
              v$.form.title.required.$invalid && v$.form.title.$errors.length
            "
            >{{ v$.form.title.required.$message }}</small
          >
        </div>

        <div class="inputContainer">
          <input
            id="limit"
            type="number"
            placeholder="Limit"
            v-model="v$.form.limit.$model"
            :class="{ invalidInput: v$.form.limit.$errors.length }"
          />
          <small
            class="helperText"
            v-if="
              v$.form.limit.minValue.$invalid && v$.form.limit.$errors.length
            "
            >{{ v$.form.limit.minValue.$message }}</small
          >
          <small
            class="helperText"
            v-if="
              v$.form.limit.required.$invalid && v$.form.limit.$errors.length
            "
            >{{ v$.form.limit.required.$message }}</small
          >
        </div>
        <div class="submitBtn">
          <button type="submit">
            Create
          </button>
        </div>
      </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minValue } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        title: "",
        limit: null,
      },
    };
  },
  validations() {
    return {
      form: {
        title: {
          required,
        },
        limit: {
          required,
          minValue: minValue(1),
        },
      },
    };
  },
  methods: {
    async submitHandler() {
      if (this.v$.form.$invalid) {
        this.v$.form.$touch();
        return;
      }
      try {
        const category = await this.$store.dispatch("createCategory", {
          title: this.form.title,
          limit: this.form.limit,
        });

        this.v$.form.$reset()
        this.form.title = "";
        this.form.limit = null;
        this.$emit("created", category);
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
.createForm {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 40%;
  width: 100%;
  margin-right: 5%;
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
  align-items: center;
  padding-top: 2vh;
}
.inputContainer {
  width: 100%;
  height: 8vh;
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
  .createForm {
    margin: 0;
  }
}

@media screen and (max-width: 800px) {
  .createForm {
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
