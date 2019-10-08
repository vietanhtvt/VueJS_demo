<template>
  <div id="app">
    <app-header></app-header>
    <alert-message></alert-message>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/TheFooter'
import AppHeader from '@/components/TheHeader'
import AlertMessage from '@/components/AlertMessage'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    AlertMessage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
