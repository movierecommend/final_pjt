<template>
  <div>
    <h1>LogIn Page</h1>
    <form @submit.prevent="login(credentials)">
      <label for="username">Username:</label>
      <input v-model="credentials.username" type="text" id="username" required>
      <br>
      <label for="password">Password:</label>
      <input v-model="credentials.password" type="password" id="password" required>
      <br>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  computed: {
    // ...mapGetters('accounts/', ['isAuthError'])
    ...mapGetters({
      isAuthError: 'accounts/isAuthError'})
  },
  methods: {
    ...mapActions(['accounts/login'])
  },
  mounted(){
    this['accounts/login']()
  }
}
</script>
