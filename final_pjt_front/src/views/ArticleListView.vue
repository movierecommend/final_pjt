<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'create' }" v-if="isLoggedIn">[CREATE]</router-link>
    <ul>
      <li v-for="article in articles" :key="article.pk">
        <!-- User -->
        <router-link :to="{ name: 'profile', params: { username: article.user.username} }">
          {{ article.user.username }}
        </router-link>
        
        => 

        <!-- Title -->
        <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>

        <!-- Info -->
        ({{ article.comment_count }}) | +{{ article.like_count }}
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ArticleListView',
  computed: {
    ...mapGetters('articles/', ['articles']),
    ...mapGetters('accounts/', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('articles/', ['fetchArticles'])
  },
  created() {
    this.fetchArticles()
  },
}
</script>

<style>

</style>