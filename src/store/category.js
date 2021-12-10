import { getDatabase, ref, set, push, child, get } from "firebase/database";
import { notify } from "@kyvg/vue3-notification";

export default {
  actions: {
    async fetchCategories({ commit, dispatch }) {
      try {
        const dbRef = ref(getDatabase());
        const uid = await dispatch("getUid");
        const categories = await (await get(child(dbRef, `users/${uid}/categories`))).val() || {}
        return Object.keys(categories).map((key) => ({
          ...categories[key],
          id: key,
        }));
      } catch (e) {
        throw e;
      }
    },
    async updateCategory({commit, dispatch}, {title, limit, id}) {
      try {
        const uid = await dispatch('getUid')
        const db = getDatabase();
        await set(ref(db, `/users/${uid}/categories/${id}`), {
          title,
          limit,
        });
        notify({
          title: `Category edit`,
          type: "success",
        });
      } catch (e) {
        console.log(e)
        throw e
      }
    },
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
        return { title, limit, id: newCategoryKey };
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};
