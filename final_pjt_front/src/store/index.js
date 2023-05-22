import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import accounts from './modules/accounts.js'
import home from './modules/home.js'
import articles from './modules/articles.js'
import movies from './modules/movies.js'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(), // 새로고침 시 초기화 방지 
  ],
  modules: { accounts, home, articles, movies },
})
