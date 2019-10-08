import Vue from 'vue'
import Router from 'vue-router'
import TheLogin from '@/components/TheLogin'
import Tab from '@/components/Tab'
import LifeCycle from '@/components/LifeCycle'
import TheComputed from '@/components/TheComputed'
import TheWatch from '@/components/TheWatch'
import Theheader from '@/components/TheHeader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TheLogin',
      component: TheLogin
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/computed',
      name: 'TheComputed',
      component: TheComputed
    },
    {
      path: '/watch',
      name: 'TheWatch',
      component: TheWatch
    },
    {
      path: '/header',
      name: 'TheHeader',
      component: Theheader
    }
  ]
})
