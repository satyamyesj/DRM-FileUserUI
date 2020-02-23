import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FileUserRegistration from './views/FileUserRegistration.vue'
import FileUserLogin from './views/FileUserLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fileUserLogin',
      component: FileUserLogin
    },
    {
      path: '/fileUserRegistration',
      name: 'fileUserRegistration',
      component: FileUserRegistration
    },
    {
      path: '/fileUserLogin',
      name: 'fileUserLogin',
      component: FileUserLogin
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
