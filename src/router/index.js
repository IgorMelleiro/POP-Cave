import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Admin from '../views/Admin.vue'
import Cinema from '../views/Itens/Cinema.vue'
import Anime from '../views/Itens/Anime.vue'
import Jogos from '../views/Itens/Jogos.vue'
import Quadrinhos from '../views/Itens/Quadrinhos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime
  },
  {
    path: '/jogos',
    name: 'Jogos',
    component: Jogos
  },
  {
    path: '/quadrinhos',
    name: 'Quadrinhos',
    component: Quadrinhos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
