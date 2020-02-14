import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FileUser from './views/FileUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fileUser',
      name: 'fileUser',
      component: FileUser
    }
  ]
})
