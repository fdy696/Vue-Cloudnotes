<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
  sidebar
  }
}

</script>

<style>
@import '//at.alicdn.com/t/font_496303_kqrjhri8l25d0a4i.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
