<template>
<div id="sidebar" class='sidebar'>
  <avatar></avatar>
  <p>{{username}}</p>
  <div class="icons">
      <router-link to='/notes' title='笔记' ><i class="iconfont icon-note"> 笔记本详情</i></router-link>
      <router-link to='/notebooks' title='笔记本' class='active'><i class="iconfont icon-notebook"> 笔记本列表</i></router-link>
      <router-link to='/trash' title='回收站'><i class="iconfont icon-trash"> 回收站页面</i></router-link>
  </div>
  <div class="logout">
     <i class="iconfont icon-logout" @click="logout">  注销</i>
  </div>
</div>
</template>

<script>
import avatar from '@/components/Avatar'
import Auth from '@/apis/auth'
import {mapGetters} from 'vuex'
 export default {
   data () {
     return {

     }
   },
  computed : {
     ...mapGetters(['username'])
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
    width: 120px;
    height: 100%;
    background: #2c333c;
    z-index: 0;
    padding: 18px 0;
    .iconfont {color: #68C864;font-size: 16px;
    &:hover {color:#36bc64}}
    p {
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 14px;
    margin-left: 5px
    }
    a {
      display: block;
      width: 120px;
      height: 35px;
      line-height: 35px;
      padding-left: 8px;
      margin-bottom: 5px;
      &:hover .iconfont{color: #36bc64}
    }
    .router-link-active {
      background-color: #5e6266;
    }
    .logout {
      position: absolute;
      width: 120px;
      bottom: 40px;
      text-align: center;
      cursor: pointer;
      i {color: #F56C6C}
    }

  }

</style>
