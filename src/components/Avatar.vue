<template>
 <div class="avator">
   <h2>{{sulg}}</h2>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

 export default {
   data () {
     return {

     }
   },
   created(){
     this.checkoutLogin()
   },
   computed : {
     ...mapGetters(['sulg'])
   },
   methods: {
     ...mapActions(['checkoutLogin'])
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>
  .avator {
    width: 33px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    border-radius: 50%;
    background: #F2B81C;
    z-index: 8;
    margin: 0 auto;
    margin-bottom: 15px;
    h2 {
      font-weight: 700px;
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
    }
  }

</style>

