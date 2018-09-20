<template>
 <div class='sidebar'>
   <avatar></avatar>
   <h3>131321321</h3>
 </div>
</template>

<script>
import avatar from './Avatar'
//import {mapStates,mapGetters,mapActions, mapMutations} from 'vuex'
 export default {
   data () {
     return {

     }
   },
   components: {
     avatar
   }
 }
</script>

<style lang='less' scoped>
  .sidebar {
    position: fixed;
    width: 56px;
    top: 0;
    bottom: 0;
    left: 0;
    background: #000;
  }

</style>
