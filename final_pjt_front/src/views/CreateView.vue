<!-- views/CreateView.vue -->

<template>
  <div>
    <h1>새 글</h1>
      <article-form class="mt-5" :article="article" action="create"></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/Article/ArticleForm.vue'

export default {
  name: 'CreateView',
  components: { ArticleForm },
  data() {
    return {
      article: {
        pk: null,
        title: '',
        content: ''
      }
  }},

}

</script>

<style>

</style>
