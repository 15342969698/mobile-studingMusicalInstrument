import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import About from '../pages/about'
import Course from '../pages/course'
import Message from '../pages/Message'
import Music from '../pages/Music'
import FromSubmit from '../pages/From'
import item from '../pages/item'
import Music_show from '../pages/Music_show'
import Message_show from '../pages/Message_show'
import Message_list from '../pages/Message_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//分配的路由地址
      component: Home
    },
    {
      path: '/home',//分配的路由地址
      component: Home
    },
    {
      path: '/About',//分配的路由地址
      component: About
    },
    {
      path: '/Course',//分配的路由地址
      component: Course
    },
    {
      path: '/Message',//分配的路由地址
      component: Message
    },
    {
      path: '/Music',//分配的路由地址
      component: Music
    },
    {
      path: '/FromSubmit',//分配的路由地址
      component: FromSubmit
    },
    {
      name:'item',
      path: '/:id',//分配的路由地址
      component: item
    },
    {
      name:'Music_show',
      path: '/Music_show',//分配的路由地址
      component: Music_show
    },
    {
      name:'Message_show',
      path: '/Message_show',//分配的路由地址
      component: Message_show
    },
    {
      name:'Message_list',
      path: '/Message_list',//分配的路由地址
      component: Message_list
    }
  ]
})
