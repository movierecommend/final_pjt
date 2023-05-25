<template>
  <div id="app" style="background-color: #ffffff; width: 100%; height: 100vh;">
    <div>
      <div class="top">
        <div v-if="!isLoggedIn" id="wrapMini">
          <button><router-link  to='/login'>Login</router-link></button>
          <button><router-link :to="{ name: 'signup' }">Signup</router-link></button>
        </div>
        <div v-if="isLoggedIn" id="wrapMini">
          <router-link to='/logout' id="btnLogin">Logout</router-link> |
          <router-link :to="{ name: 'mypage', params: {'username':currentUser.username} }" id="btnLogin">Mypage</router-link>
        </div>
      </div>
    
      <nav class="d-flex" style="margin-bottom: 30px; justify-content: center; align-items: center;">
        <div style="padding-right: 30px;">
          <router-link :to="{ name: 'HomeView' }"><h3>Home</h3></router-link>
        </div>
        <div style="padding-right: 30px;">
          <router-link :to="{ name: 'recommend' }"><h3>Recommendations</h3></router-link>
        </div>
        <div style="padding-right: 30px;">
          <router-link :to="{ name: 'fun' }"><h3>Fun</h3></router-link>
        </div>
        <div style="padding-right: 30px;">
          <router-link :to="{ name: 'articles' }"><h3>Community</h3></router-link>
        </div>
      </nav>
    </div>
    
    <router-view/>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'

// import MovieListView from "./views/MovieListView.vue"


export default {
  name: 'App',
  components: {
    // MovieListView
  },
  data () {
    return {
      userPk: ''
    }
  },
  computed: {
    ...mapGetters(
      {currentUser: 'accounts/currentUser',
      isLoggedIn: 'accounts/isLoggedIn'},
      )
  },
  methods: {
    fetchCurrentUser () {
      this.$store.dispatch('accounts/fetchCurrentUser')
      this.userPk = this.currentUser.id
    },
    fetchBoxoffice () {
      this.$store.dispatch('home/fetchBoxoffice')
    },
  },
  created () {
    this.fetchBoxoffice()
    this.fetchCurrentUser()
  },
}
</script>

<style>
@font-face {
  font-family: 'dh';
  src:url('../public/fonts/BMDOHYEON_ttf.ttf')
}
h3 {
  font-family: 'dh';
}


button {
    position: relative;
  padding: 8px 16px;
  margin: 10px;
  font-size: 50px;
  background-color: #df596b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'dh';
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#wrapMini {
  height: 40px;
  font-size: 12px;
  line-height: 1.5;
  font-family: AppleSDGothicNeo-Regular,'돋움',dotum,sans-serif;
  color: #222;
  text-align: right;
  align-items: center;
  flex: auto;
}

#btnLogin {
  display: inline-block;
  width: 50px;
  height: 22px;
  border: 1px solid #E4E4E4;
  font-size: 12px;
  line-height: 24px;
  color: #666;
  text-align: center;
  letter-spacing: -1px;
}

.top {
  position: relative;
  width: 1100px;
  height: 42px;
  padding-top: 17px;
  margin: 0 auto;  
}

nav {
  width: 1100px;
  height: 42px;
  padding-top: 17px;
  margin: 0 auto;
}

/* router-link에 적용할 디자인(router-link는 a 태그로 인식) */
div a { 
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(236, 87, 87);
}
</style>