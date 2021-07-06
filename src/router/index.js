/* 路由器对象模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/MSite',
      component: MSite,
      meta: {
        FooterGuideShow: true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta: {
        FooterGuideShow: true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        FooterGuideShow: true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta: {
        FooterGuideShow: true
      }
    },
    {
      path: '/',
      redirect: '/MSite'
    },
    {
      path: '/login',
      component: Login

    }
  ]
})
