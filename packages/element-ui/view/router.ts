import Router, { RouteConfig } from 'vue-router'

export const routes: RouteConfig[] = [
  {
    path: '/table-vue',
    name: 'Table(.vue)',
    component: () => import('./table/basic-vue/index.vue'),
    meta: {
      icon: 'el-icon-menu',
    },
  },
  {
    path: '/table-tsx',
    name: 'Table(.tsx)',
    component: () => import('./table/basic-tsx'),
    meta: {
      icon: 'el-icon-menu',
    },
  },
  {
    path: '/form-tsx',
    name: 'Form(.tsx)',
    component: () => import('./form/basic-vue/index'),
    meta: {
      icon: 'el-icon-menu',
    },
  },
]

export default new Router({
  routes,
})
