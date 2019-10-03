<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    AppFooter
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
#app img {
  text-align: left;
  width: 60px;
  }
</style>
