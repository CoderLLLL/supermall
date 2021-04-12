<template>
  <div id="app">
    <maintab-bar></maintab-bar>
    <router-view></router-view>
  </div>
</template>

<script>

  import  maintabBar from './components/content/MainTabBar/maintabBar'

export default {
  name: 'App',
  components:{
    maintabBar,
  },
}
</script>

<style>
  @import url("assets/css/base.css");
</style>
