// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from "../views/Home.vue"
import markdownview from "../views/markdownview.vue"
import testview from "../views/testview.vue"

const routes = [
  {
    path: '/',
    name: "home",
    component: Homeview
  },
  {
    path: '/markdownview/:id',
    name: 'markdownview',
    component:markdownview
  },
  {
    path: '/testview/:id',
    name: 'testview',
    component:testview
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
