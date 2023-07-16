// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from "../views/Home.vue"
import markdownview from "../views/markdownview.vue"

const routes = [
  {
    path: '/',
    name: "home",
    component: Homeview
  },
  {
    path: '/markdownview/:mdfile?/:create_at?/:last_modify?',
    name: 'markdownview',
    component:markdownview
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
