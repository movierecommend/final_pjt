<template>
  <div id="app">
    <div class="top">
      <div id="wrapMini">
        <router-link :to="{ name: 'LoginView' }" id="btnLogin">Login</router-link> |
        <router-link :to="{ name: 'SignupView' }" id="btnLogin">Signup</router-link> |
        <router-link :to="{ name: 'MypageView' }" id="btnLogin">Mypage</router-link>
      </div>
    </div>
    
    <nav>
      <router-link :to="{ name: 'HomeView' }">Home</router-link> |
      <router-link :to="{ name: 'RecommendView' }">Recommendations</router-link> |
      <router-link :to="{ name: 'FunView' }">Fun</router-link> |
      <router-link :to="{ name: 'ArticleView' }">Community</router-link>
    </nav>
    <router-view/>
  </div>
  
</template>
<script>
export default {
  name: 'App',

}
</script>

<style>
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
  color: #42b983;
}
</style>