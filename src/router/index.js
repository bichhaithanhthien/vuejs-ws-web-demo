import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Contact from '../views/Contact'
import About from '../views/About'
import UserProfile from '../views/user/UserProfile'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'login',
    component: Login
  },
  {
    path: '/log-out',
    name: 'logout',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'register-user',
    component: Register
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about-us',
    name: 'about',
    component: About
  },
  {
    path: '/profile',
    name: 'user-profile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
