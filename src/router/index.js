import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/home/downTime',
    name:"DownTime",
    component:()=>import('../views/downTime.vue')
  },
  {
    path:"/home/elementTable",
    name:"ElementTable",
    component:()=>import("../views/ElementTable.vue")
  },
  {
    path:"/home/image",
    name:"Image",
    component:()=>import("../views/Image.vue")
  },
  {
    path:"/home/table",
    name:"Table",
    component:()=>import("../views/table/MultiTable.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
