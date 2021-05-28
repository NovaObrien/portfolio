import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/Star',
    name: 'StarPage',
    component: loadPage('StarPage')
  },
  {
    path: '/',
    name: 'Apps',
    component: loadPage('AppPage')
  },
  {
    path: '/art',
    name: 'Art',
    component: loadPage('ArtPage')
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
    path: '/email',
    name: 'Email',
    beforeEnter() { location.href = 'mailto: tannerkobrien@gmail.com' }
  },
  {
    path: '/keepr',
    name: 'Keepr',
    beforeEnter() { location.href = 'https://keepr-1.herokuapp.com/' }
  },
  {
    path: '/keepr-code',
    name: 'KeeprCode',
    beforeEnter() { location.href = 'https://github.com/NovaObrien/Amazen' }
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
    path: '/kanban-code',
    name: 'KanbanCode',
    beforeEnter() { location.href = 'https://github.com/JoshKPreston/kanbandoit' }
  },
  {
    path: '/rpg-blog',
    name: 'RpgBlog',
    beforeEnter() { location.href = 'https://rpg-blogger.herokuapp.com/#/' }
  },
  {
    path: '/rpg-blog-code',
    name: 'RpgBlogCode',
    beforeEnter() { location.href = 'https://github.com/NovaObrien/RPGBlog' }
  },
  {
    path: '/farm-clicker',
    name: 'FarmClicker',
    beforeEnter() { location.href = 'https://novaobrien.github.io/Week-Two-Checkpoint/' }
  },
  {
    path: '/farm-clicker-code',
    name: 'FarmClickerCode',
    beforeEnter() { location.href = 'https://github.com/NovaObrien/Week-Two-Checkpoint' }
  },
  {
    path: '/balloon',
    name: 'Balloon',
    beforeEnter() { location.href = 'https://novaobrien.github.io/balloon-pop/' }
  },
  {
    path: '/balloon-code',
    name: 'BalloonCode',
    beforeEnter() { location.href = 'https://github.com/NovaObrien/balloon-pop' }
  },
  {
    path: '/moody-kitten',
    name: 'MoodyKitten',
    beforeEnter() { location.href = 'https://novaobrien.github.io/Moody-Kittens/' }
  },
  {
    path: '/moody-kitten-code',
    name: 'MoodyKittenCode',
    beforeEnter() { location.href = 'https://github.com/NovaObrien/Moody-Kittens' }
  },
  {
    path: '/carpe-mare',
    name: 'CarpeMare',
    beforeEnter() { location.href = 'https://novaobrien.github.io/Weekone-checkpoint/' }
  },
  {
    path: '/carpe-mare-code',
    name: 'CarpeMareCode',
    beforeEnter() { location.href = 'https://github.com/NovaObrien/Weekone-checkpoint' }
  }

]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
