import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import ArticleView from '@/views/ArticleView'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import RecommendView from '@/views/RecommendView'
import MypageView from '@/views/MypageView'
import FunView from '@/views/FunView'
import SignupView from '@/views/SignupView'
import LoginView from '@/views/LoginView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/articles',
    name: 'ArticleView',
    component: ArticleView
  },
 
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },

  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView
  },

  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/recommend',
    name: 'RecommendView',
    component: RecommendView
  },
  {
    path: '/fun',
    name: 'FunView',
    component: FunView
  },
  {
    path: '/mypage',
    name: 'MypageView',
    component: MypageView
  },

  {
    path: '/articles/:id',
    name: 'DetailView',
    component: DetailView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
