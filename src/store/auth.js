import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { notify } from "@kyvg/vue3-notification";
import messages from "@/utils/messages.js";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      await signInWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          notify({
            title: messages.login,
            type: "success",
          });
        })
        .catch((error) => {
          notify({
            title: messages[error.message],
            type: "warn",
          });
          throw error;
        });
    },
    async register({ dispatch, commit }, { email, password, name }) {
      await createUserWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const db = getDatabase();
          set(ref(db, `/users/${user.uid}/info`), {
            bill: 10000,
            name,
          });
          notify({
            title: messages.login,
            type: "success",
          });
        })
        .catch((error) => {
          notify({
            title: messages[error.message],
            type: "warn",
          });
          throw error;
        });
    },
    async logout({ commit }) {
      await signOut(getAuth());
      commit("clearInfo");
      notify({
        title: messages.logout,
        type: "success",
      });
    },
  },
};
