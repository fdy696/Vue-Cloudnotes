import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/login',
      alias: '/',
      name: 'Login',
      component: () => import('@/components/Login.vue')
    }, {
      path: '/notebooks',
      name: 'Notebooks',
      component: () => import('@/components/Notebooks.vue')
    }, {
      path: '/notes',
      name: 'NoteDetail',
      component: () => import('@/components/Notes.vue')
    }, {
      path: '/trash',
      name: 'Trash',
      component: () => import('@/components/Trash.vue')
    },
  ]
})
