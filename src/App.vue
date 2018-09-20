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
html, body, #app {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eee;
}

</style>
