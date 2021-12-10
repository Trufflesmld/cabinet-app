import { getDatabase, ref, set, push, child } from "firebase/database";
import { notify } from "@kyvg/vue3-notification";


export default {
  actions: {
    async createCategory({ commit, dispatch }, { title, limit }) {
      try {
        const db = getDatabase();
        const uid = await dispatch("getUid");
        const newCategoryKey = push(child(ref(db), `categories`)).key;
        await set(ref(db, `/users/${uid}/categories/${newCategoryKey}`), {
          title,
          limit,
        });
        notify({
          title: `Category '${title}' created`,
          type: "success",
        });
        return {title, limit, id: newCategoryKey}
      } catch (e) {
        console.log(e)
        throw e;
      }
    },
  },
};
