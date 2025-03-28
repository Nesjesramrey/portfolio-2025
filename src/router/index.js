import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Portfolio from '../components/Portfolio.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contacto',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router