import { createStore } from "vuex";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import auth from "./auth";

export default createStore({
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const db = getDatabase();
        const starCountRef = ref(db, `/users/${uid}/info`);
        onValue(starCountRef, (snapshot) => {
          const info = snapshot.val();
          console.log(info);
          commit("setInfo", info);
        });0
      } catch (e) {}
    },
    getUid() {
      const user = getAuth().currentUser;
      return user ? user.uid : null;
    },
  },
  getters: {
    info: (s) => s.info,
  },
  modules: {
    auth,
  },
});
