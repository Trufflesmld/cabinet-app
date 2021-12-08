import { createStore } from "vuex";
import { getAuth } from "firebase/auth";
// import { getDatabase, ref, onValue } from "firebase/database";
import { getDatabase, ref, child, get } from "firebase/database";
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
    // async fetchInfo({ dispatch, commit }) {
    //   try {
    //     const uid = await dispatch("getUid");
    //     const db = getDatabase();
    //     const starCountRef = ref(db, `/users/${uid}/info`);
    //     onValue( starCountRef, async function(snapshot) {
    //       const info = await snapshot.val();
    //       commit("setInfo", info);
    //     });
    //   } catch (e) {}
    // },
    async fetchInfo({ dispatch, commit }) {
      const dbRef = ref(getDatabase());
      const uid = await dispatch("getUid");
      await get(child(dbRef, `users/${uid}/info`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const info = snapshot.val();
            commit("setInfo", info);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getUid() {
      const user = getAuth().currentUser;
      return user ? user.uid : null;
    },
    async fetchCurrency() {
      const USDres = await fetch(`https://www.nbrb.by/api/exrates/rates/431`);
      const EURres = await fetch(`https://www.nbrb.by/api/exrates/rates/451`);
      const RUBres = await fetch(`https://www.nbrb.by/api/exrates/rates/456`);
      let arr = [];
      arr.push(await USDres.json());
      arr.push(await EURres.json());
      arr.push(await RUBres.json());
      return arr;
    },
  },
  getters: {
    info: (s) => s.info,
  },
  modules: {
    auth,
  },
});
