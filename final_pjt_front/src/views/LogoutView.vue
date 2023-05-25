<template>
  <div>
    <h1>
      Logout 되었습니다.
    </h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LogoutView',
  methods: {
    ...mapActions('accounts/', ['logout'])
  },
  computed: {
    ...mapGetters('accounts/', ['isLoggedIn'])
  },
  created() {
    if (this.isLoggedIn) {
      this.logout()
    } else {
      alert('잘못된 접근입니다.')
      this.$router.back()
    }
  }
}
</script>

<style>

</style>