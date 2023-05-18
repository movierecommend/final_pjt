<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{name: 'CreateView'}">[CREATE]</router-link>
    <ArticleList/>
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
  },
  created() {
    // 데이터 실행할 때 들고와야 함
    this.getArticles()
  },
  methods: {
    getArticles() {
      // store에서 불러옴(실행 시 )
      this.$store.dispatch('getArticles')
    }
  }
}
</script>

<style>

</style>
