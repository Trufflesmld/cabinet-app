import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Notifications from "@kyvg/vue3-notification";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

initializeApp({
  apiKey: "AIzaSyDTelvd1eb9J2RYhW57ScUnzkkmP_pOtnw",
  authDomain: "stp-practice.firebaseapp.com",
  projectId: "stp-practice",
  storageBucket: "stp-practice.appspot.com",
  messagingSenderId: "1032767816951",
  appId: "1:1032767816951:web:67fc4d10af0afef461bff2",
  measurementId: "G-NL8MCCWY50",
});

let application;

const auth = getAuth();
onAuthStateChanged(auth, () => {
  if (!application) {
    application = createApp(App)
      .use(Notifications)
      .use(store)
      .use(router)
      .mount("#app");
  }
});
