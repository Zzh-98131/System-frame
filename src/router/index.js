import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout.vue'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/components/login/login.vue'),
    hidden: true
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/components/index/index.vue')
      }
    ],
  },
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('@/components/test/test.vue')
      }
    ]
  }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
