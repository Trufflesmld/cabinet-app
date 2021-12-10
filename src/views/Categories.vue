<template>
  <div class="wrapper">
    <CategoryCreate @created="addNewCategory" />
    <CategoryEdit/>
  </div>
</template>

<script>
import CategoryCreate from "@/components/categories-page/CategoryCreate";
import CategoryEdit from "@/components/categories-page/CategoryEdit";

export default {
  data: () => ({
    categories: []
  }),
  components: {
    CategoryCreate, CategoryEdit
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category)
      console.log(this.categories)
    }
  }
}
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
@media screen and (max-width: 1280px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
