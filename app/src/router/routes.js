
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { name: 'favorito', path: '/favorito', component: () => import('pages/Favorito.vue') },
      { name: 'sobre', path: '/sobre', component: () => import('pages/Sobre.vue') }
    ]
  },
  {
    path: '/arvore',
    component: () => import('layouts/ArvoreLayout.vue'),
    children: [
      { name: 'arvore', path: 'arvore/:id', component: () => import('pages/Arvore.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
