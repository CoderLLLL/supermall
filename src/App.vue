<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <maintab-bar></maintab-bar>
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
