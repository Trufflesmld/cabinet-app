<template>
  <loading
    v-model:active="loading"
    :can-cancel="false"
    :is-full-page="false"
    :color="'#fff500'"
  />
  <div class="wrapper" v-if="!loading">
    <CategoryCreate @created="addNewCategory" />
    <CategoryEdit
      v-if="categories.length"
      :categories="categories"
      :key="categories.length + updateCount"
      @updated="updateCategories"
    />
    <p v-else class="emptyCategories">Create a category to edit them</p>
  </div>
</template>

<script>
import CategoryCreate from "@/components/categories-page/CategoryCreate";
import CategoryEdit from "@/components/categories-page/CategoryEdit";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data: () => ({
    loading: true,
    categories: [],
    updateCount: 0,
  }),
  components: {
    CategoryCreate,
    CategoryEdit,
    Loading,
  },
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
      console.log(this.categories);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex((c) => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount++;
    },
  },
};
</script>

<style scoped>
.wrapper {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding-top: 5vw;
  padding-left: 2vw;
  padding-right: 2vw;
  display: flex;
  flex-direction: row;
}
.emptyCategories {
  width: 100%;
  font-size: 3em;
  margin: 0;
}
@media screen and (max-width: 1280px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
