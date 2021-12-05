import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(getAuth(), email, password);
      } catch (e) {
        throw e;
      }
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
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
    async logout() {
      await signOut(getAuth());
    },
  },
};
