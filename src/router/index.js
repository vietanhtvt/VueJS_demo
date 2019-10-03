import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/components/Tab'
import LifeCycle from '@/components/LifeCycle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
