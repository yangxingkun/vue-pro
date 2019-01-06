import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //redirect:'/about',重定向
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/about',
      component:About

    }
  ]
})
