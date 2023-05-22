<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'create' }">[CREATE]</router-link>
    <ArticleList />
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/Article/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  }
}
</script>

<style>

</style>
