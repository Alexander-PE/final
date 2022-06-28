import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'Pelicula',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pelicula.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue')
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Actualizar.vue')
  },
  {
    path: '/eliminar',
    name: 'Eliminar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Eliminar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
