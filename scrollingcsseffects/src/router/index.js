import Vue from 'vue'
import VueRouter from 'vue-router'
import scrollingEffectAppend from '@/views/scrollingEffectAppend'

Vue.use(VueRouter)

const routes = [
  {
    path: '/scroll',
    name: 'scroll',
    component: scrollingEffectAppend
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
