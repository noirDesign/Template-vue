import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Short from './views/Short.vue'
import Activity from './views/Activity.vue'
import User from './views/User.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [

  {
    path: '/',
    meta: { title: 'Home' },
    component: Home,
  },
  {
    path: '/Search',
    meta: { title: 'Search' },
    component: Search,
  },
  {
    path: '/Short',
    meta: { title: 'Short' },
    component: Short,
  },
  {
    path: '/Activity',
    meta: { title: 'Activity' },
    component: Activity,
  },
  {
    path: '/User',
    meta: { title: 'User' },
    component: User,
  },
]
