import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index' // 默认寻找index的文件

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/home'
  },
  // 一级路由
  {
    path: '/login',
    component: Login
  },
  // 一级路由
  {
    path: '/home',
    name: 'home',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
