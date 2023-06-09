import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import HomeView from '@/views/HomeView'
import RecommendView from '@/views/RecommendView'
import FunView from '@/views/FunView'
import ArticleListView from '@/views/ArticleListView'
import CreateView from '@/views/CreateView'
import ArticleDetailView from '@/views/ArticleDetailView'
import EditView from '@/views/EditView'
import MypageView from '@/views/MypageView'
import SignupView from '@/views/SignupView'
import LoginView from '@/views/LoginView'
import LogoutView from '@/views/LogoutView'
import NotFound404 from '@/views/NotFound404'
import ProfileView from '@/views/ProfileView'

Vue.use(VueRouter)

const routes = [
  // 초기화면
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  // Recommendations
  {
    path: '/recommend',
    name: 'recommend',
    component: RecommendView
  },

  // Fun
  {
    path: '/fun',
    name: 'fun',
    component: FunView
  },

  // Community
  {
    path: '/articles',
    name: 'articles',
    component: ArticleListView
  },
  {
    path: '/articles/new',
    name: 'create',
    component: CreateView
  },
  {
    path: '/articles/:articlePk',
    name: 'article',
    component: ArticleDetailView,
  },
  {
    path: '/articles/:articlePk/edit',
    name: 'articleEdit',
    component: EditView,
  },

  // Accounts, 404
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/mypage/:username',
    name: 'mypage',
    component: MypageView,
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  // 이전 페이지에서 발생한 에러메시지 삭제
  store.commit('accounts/SET_AUTH_ERROR', null)
  
  const isLoggedIn = store.getters['accounts/isLoggedIn']

  // 로그인이 필요한 페이지인지 확인
  const freeAuth = ['login', 'signup', 'HomeView',]

  // 현재 이동하고자 하는 페이지가 Authentication이 필요한가?
  const isAuthRequired = !freeAuth.includes(to.name)

  // Auth가 필요한데, 로그인 되어있지 않다면?
  if (isAuthRequired && !isLoggedIn) {
    alert('로그인하셔야 서비스를 이용하실 수 있습니다.')
    next({ name: 'login'})
  } else {
    next()
  }

  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'HomeView'})
  }
})

export default router
