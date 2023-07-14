// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from "../views/Home.vue"

const routes = [
  {
    path: '/',
    name: "home",
    component: Homeview
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
