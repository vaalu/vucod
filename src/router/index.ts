import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import CardComp from '@/views/CardComp.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/CardComp', name: 'Card', component: CardComp },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
})

export default router
