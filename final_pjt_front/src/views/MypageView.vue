<template>
  <div>
    <h5>
      {{ profile.username }} 님의 프로필
    </h5>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MypageView',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('accounts/', ['profile'])
  },
  methods: {
    ...mapActions('accounts/', ['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
  mounted() {
  }
}
</script>

<style scoped>
.profile-box {
  box-shadow : 3px 3px 3px 0;
}
</style>