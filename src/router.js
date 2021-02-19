import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage')
  },
  {
    path: '/linkedin',
    name: 'LinkedIn',
    beforeEnter() { location.href = 'https://www.linkedin.com/in/nova-obrien/' }
  },
  {
    path: '/github',
    name: 'Github',
    beforeEnter() { location.href = 'https://github.com/NovaObrien' }
  },
  {
    path: '/critical-failure',
    name: 'CritFail',
    beforeEnter() { location.href = 'https://critical-failure-1.herokuapp.com/' }
  },
  {
    path: '/kanban',
    name: 'Kanban',
    beforeEnter() { location.href = 'https://kanbandoit.herokuapp.com/' }
  },
  {
    path: '/email',
    name: 'Email',
    beforeEnter() { location.href = 'mailto: tannerkobrien@gmail.com' }
  }

]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router