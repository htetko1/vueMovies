import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from "../views/MovieDetail";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/movie/:id',
    name:'MovieDetail',
    component: MovieDetail
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
