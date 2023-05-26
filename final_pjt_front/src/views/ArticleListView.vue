<template>
  <div class="d-container">
    <h1>Article Page</h1>
    <router-link :to="{ name: 'create' }" v-if="isLoggedIn">[CREATE]</router-link>
    <ul style="width: 100%;">
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
      <hr>
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
.d-container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(219, 214, 214);
  font-family: 'dh';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>