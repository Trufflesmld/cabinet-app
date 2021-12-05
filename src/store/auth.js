import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { notify } from "@kyvg/vue3-notification";
import fbErrors from '@/utils/messages.js'

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {

        await signInWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          notify({
            title: fbErrors[error.message],
            type: 'warn'
          });
          throw error
        });;

    },
    async register({ dispatch, commit }, { email, password, name }) {
      await createUserWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const db = getDatabase();
          set(ref(db, `/users/${user.uid}/info`), {
            bill: 10000,
            name,
          });
        })
        .catch((error) => {
          notify({
            title: fbErrors[error.message],
            type: 'warn'
          });
          throw error
        });
    },
    async logout() {
      await signOut(getAuth());
    },
  },
};
