import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import slidedemo from './views/slidedemo.vue'
// import navdemo from './views/navdemo.vue'
import griddemo from './views/griddemo.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'demo',
      component: griddemo
    }
  ]
})
