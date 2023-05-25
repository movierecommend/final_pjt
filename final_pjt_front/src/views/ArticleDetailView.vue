<template>
  <div>
  <div class="container mt-3">
    <p style="font-size:40px; text-align:left; margin-left:6px">
      {{ article?.pk }}번째 글
    </p>
    <p style="font-size:40px; text-align:left; margin-left:6px">
      {{ article?.title }}
    </p>
    <hr>
    <div class="box-content card">
      <div class="card-body" style="text-align:left;">
          <p style="font-family: 'GmarketSansMedium'; font-size:18px;">
            {{ article?.content }}
          </p>
        </div>
    </div>
    <div>
    <p>작성시간 : {{ article?.created_at }}</p>
    <p>수정시간 : {{ article?.updated_at }}</p>
    </div>
  </div>

  <!-- Article Edit/Delete UI -->
  <div v-if="article?.user.username === currentUser?.username">
    <button style="float: right; font-family:GimpoGothic" class=" mx-3 mt-3 btn btn-outline-secondary waves-effect mb-4" @click="deleteArticle({ articlePk: article.pk })">삭제</button>
    <router-link :to="{ name: 'articleEdit', params: { articlePk: article.pk} }">
      <button style="float: right; font-family:GimpoGothic" class="mt-3 btn btn-outline-secondary waves-effect mb-4">수정</button>
    </router-link>
  </div>

  <!-- Article Like UI -->
  <div style="float: left; margin-top:15px;">
    <button class=" btn btn-outline-danger waves-effect mb-4" @click="likeArticle({ articlePk: article.pk })">
      좋아요 ♥ {{ like_count }}
    </button>
  </div>
    
  <!-- Comment UI -->
  <div style="margin-top:100px">
    <hr>
    <!-- {{ ArticleListViewVue }} -->
      <comment-list-form></comment-list-form>
      <br><br><br>
      <comment-list :comments="article.comments"></comment-list>
  </div>
</div>
</template>

<script>
import CommentList from '@/components/Comments/CommentList.vue'
import CommentListForm from '@/components/Comments/CommentListForm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ArticleDetailView',
  components: { CommentList , CommentListForm},
  data() {
    return {
      articlePk: ''
    }
  },
  computed: {
    ...mapGetters('articles/', ['article']),
    ...mapGetters('accounts/', ['currentUser']),
    like_count() {
      return this.article.like_users?.length
    }},
  methods: {
    ...mapActions('articles/', ['fetchArticle', 'likeArticle', 'deleteArticle'])
  },
  created() {
    this.articlePk = this.$route.params.articlePk
    this.fetchArticle({ articlePk: this.articlePk })
  },
  
}
</script>
