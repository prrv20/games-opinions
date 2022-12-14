import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Opiniones.vue')
  },
  {
    path: '/admin',
    name: 'administracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/edit',
    name: 'editando',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditView.vue'),
    children: [
      {
        path: ":id",
        name: "opinion",
        component: () => import("../views/EditOpinionView.vue"),
      },
    ],
  },
  {
    path:'*',
    component:NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
