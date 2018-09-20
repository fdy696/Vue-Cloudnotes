import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Notebooks from '@/components/Notebooks'
import Notes from '@/components/Notes'
import Trash from '@/components/Trash'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:  Notebooks
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/notebooks',
      name: 'Notebooks',
      component: Notebooks
    }, {
      path: '/notes',
      name: 'NoteDetail',
      component: Notes
    }, {
      path: '/trash',
      name: 'Trash',
      component: Trash
    },
  ]
})
