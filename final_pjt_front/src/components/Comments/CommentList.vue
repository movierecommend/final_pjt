<template>
  <div class="mt-3">
    <div class="d-container" v-for="comment in comments" :comment="comment" :key="comment.id">
      <!-- {{ comment }} -->
      <div class="d-flex">
        <router-link :to="{ name: 'profile', params: { 'username': comment.user.username } }">
          {{ comment.user.username}}
        </router-link>
         :  
      <div style="font-family: 'GmarketSansMedium';" v-if="!isEditing">{{ comment.content }}</div>
        
      <div class="d-container d-flex" style="width: 90%; padding-bottom: 5px;" v-if="isEditing">
        <input type="text" class="form-control" style="width: 80%; height: 40px;"  v-model="comment.content">
        <div style="margin-left: auto;" >
        <button class=" mt-3 btn btn-sm btn-outline-secondary waves-effect" @click="onUpdate(comment)">Update</button> |
        <button class="mt-3 mx-2 btn btn-sm btn-outline-secondary waves-effect" @click="switchIsEditing">Cancel</button>
        </div>
      </div>
      <div style="margin-left: auto;" v-if="currentUser.username === comment.user.username && !isEditing">
        <button class=" mt-3 btn btn-sm btn-outline-secondary waves-effect " @click="onDelete(comment)">삭제</button>
        <button class="mt-3 mx-2 btn btn-sm btn-outline-secondary waves-effect " @click="switchIsEditing">수정</button>
      </div>
      <br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentList',
  props: { comments: Array },
  data() {
    return {
      isEditing: false,
    }
  },
  computed: {
    ...mapGetters('accounts/', ['currentUser']),
  },
  methods: {
    ...mapActions('articles/', ['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onDelete(comment) {
      const articlePk = +(comment.article)
      const commentPk = +(comment.pk)
      this.deleteComment({articlePk, commentPk})
    },
    onUpdate(comment) {
      const articlePk = +(comment.article)
      const commentPk = +(comment.pk)
      const content = comment.content
      this.updateComment({articlePk, commentPk, content})
      this.isEditing = false
    }
  },

}
</script>

<style>

</style>