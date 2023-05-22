<template>
  <div>
    <h1>Sign Up Page</h1>
    <form @submit.prevent="signup">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password1"> password : </label>
      <input type="password" id="password1" v-model="password1"><br>

      <label for="password2"> password confirmation : </label>
      <input type="password" id="password2" v-model="password2">
      
      <input type="submit" value="SignUp">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      nickname: null,
      password1: null,
      password2: null,
      email: null,
    }
  },
  methods: {
    signup() {
      const username = this.username
      const nickname = this.nickname
      const password1 = this.password1
      const password2 = this.password2
      const email = this.email

      const payload = {
        username, nickname, password1, password2, email
      }

      // store/modules/accounts.js의 signup 실행
      this.$store.dispatch('signup', payload)

    }
  }
}
</script>
