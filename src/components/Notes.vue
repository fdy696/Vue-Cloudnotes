<template>
 <div class='notes'>
   <note-sidebar></note-sidebar>
   <h3>notes</h3>
 </div>
</template>

<script>
import noteSidebar from './NotesSidebar'
//import {mapStates,mapGetters,mapActions, mapMutations} from 'vuex'
 export default {
   data () {
     return {

     }
   },
   components: {
     noteSidebar
   }
 }
</script>

<style scoped>


</style>
