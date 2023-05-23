<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'create' }" v-if="isLoggedIn">[CREATE]</router-link>
    <ArticleList/>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleList from '@/components/Article/ArticleList.vue'

export default {
  name: 'ArticleListView',
  components: {
    ArticleList,
  },
  computed: {
    ...mapGetters(
      { isLoggedIn: 'accounts/isLoggedIn'},
      )
  },
}
</script>

<style>

</style>
