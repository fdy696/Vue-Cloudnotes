<template>
<div id="sidebar" class='sidebar'>
  <avatar></avatar>
  <div class="icons">
      <router-link to='/notes' title='笔记' ><i class="iconfont icon-note"></i></router-link>
      <router-link to='/notebooks' title='笔记本' class='active'><i class="iconfont icon-notebook"></i></router-link>
      <router-link to='/trash' title='回收站'><i class="iconfont icon-trash"></i></router-link>
  </div>
  <div class="logout">
     <i class="iconfont icon-logout" @click="logout"></i>
  </div>
</div>
</template>

<script>
import avatar from '@/components/Avatar'
import Auth from '@/apis/auth'
 export default {
   data () {
     return {

     }
   },
   methods: {
     logout(){
       Auth.logout().then(res=>{
        this.$router.push('/login')
       })
     }
   },
   components: {
     avatar
   }
 }
</script>

<style scoped lang='less'>
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 55px;
    height: 100%;
    background: #2c333c;
    z-index: 0;
    padding: 18px 0;
    .iconfont {color: #fff;
    &:hover {color:#36bc64}}
    a {
      display: block;
      width: 55px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      &:hover .iconfont{color: #36bc64}
    }
    .router-link-active {
      background-color: #5e6266;
    }
    .logout {
      position: absolute;
      width: 55px;
      bottom: 40px;
      text-align: center;
      cursor: pointer;
    }

  }

</style>
