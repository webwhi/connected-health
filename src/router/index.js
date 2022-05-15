import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import Home from '../components/assemble/home.vue'
import About from '../components/assemble/about.vue'
import People from '../components/assemble/people.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component:About 
  },
  {
  path: '/people',
  component:People
},
]

const router = new VueRouter({
  routes
})

export default router
