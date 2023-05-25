<template>
  <div>
    <div class="container">
      <div class="container mt-5">
        <h1 class="mt-2" style="font-family:MapoGoldenPier">
          수정하기
        </h1>
        <article-form :article="article" action="update"></article-form>
        </div>
    </div>
  </div>
  
  </template>
  
  <script>
  import ArticleForm from '@/components/Articles/ArticleForm.vue'
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'AritcleEditView',
    components: { ArticleForm },
    data() {
      return {
        articlePk: '',
      }
    },
    computed: {
      ...mapGetters('articles/', ['article']),
    },  
    methods: {
      ...mapActions(['fetchArticle'])
    },
    created () {
      this.articlePk = this.$route.params.articlePk
      this.fetchArticle({ articlePk: this.articlePk })
    },
  }
  </script>
  
  <style>
  
  </style>