<template>
 <div class="login-register">
   <!-- 遮罩层 -->
  <div class="mask">
    <!-- 容器 -->
    <div class="model-container">
      <div class="main">
        <img src="" alt="">
      </div>
      <div class="form">
        <h3 @click="showRegister">创建账户</h3>
        <div class="register" v-bind:class='{show:isShowRegister}'>
          <input type="text" placeholder="用户名" v-model="register.username">
          <input type="password" placeholder="密码" v-model="register.password">
          <p class="tips" v-bind:class="{error:register.iserror}">
            {{register.notice}}
          </p>
          <button type="button" @click="onRegister">创建账户</button>
        </div>
        <h3 @click="showLogin">登陆</h3>
        <div class="login" v-bind:class="{show: isShowLogin}">
          <input type="text" placeholder="用户名" v-model="login.username">
          <input type="password" placeholder="密码" v-model="login.password">
          <p class="tips" v-bind:class="{error:login.iserror}">
            {{login.notice}}
          </p>
          <button type="button" @click="onLogin">登陆</button>
        </div>
      </div>
    </div>
  <!-- 遮罩层结束 -->
  </div>
 </div>
</template>

<script>
import {mapActions} from 'vuex'

 export default {
   data () {
     return {
       isShowLogin:true,
       isShowRegister: false,
       register: {
         username:"",
         password:"",
         notice: ' 请牢记用户名和密码',
         iserror: false
       },
       login: {
         username:"",
         password:"",
         notice: '请输入用户名和密码',
         iserror: false
       }
    }
   },
  methods: {
    ...mapActions(['loginUser','registerUser']),
        showLogin(){
        this.isShowLogin = true;
        this.isShowRegister = false;
          },
        showRegister(){
          this.isShowLogin = false;
          this.isShowRegister = true;
        },
        onRegister(){
          if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)){
            this.register.iserror = true;
            this.register.notice = '用户名3~15个字符，仅限字母数字下划线中文';
            return;
          }
          if(!/^.{6,16}$/.test(this.register.password)){
            this.register.iserror = true;
            this.register.notice = '密码长度为6~16个字符';
            return
          }
          this.registerUser({username:this.register.username,password:this.register.password}
          ).then(()=>{

          }).catch(res=>{

          })

        },
        onLogin(){
          if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)){
            this.login.iserror = true;
            this.login.notice = '用户名3~15个字符，仅限字母数字下划线中文';
            return;
          }
          if(!/^.{6,16}$/.test(this.login.password)){
            this.login.iserror = true;
            this.login.notice = '密码长度为6~16个字符';
            return
          }

          this.loginUser({username:this.login.username,password:this.login.password}
          ).then(res=>{
            this.login.iserror = false;
            this.login.notice = '';
          }).catch(res=>{
            this.login.iserror = true;
            this.login.notice = res.msg;
          })
        },
        onRegister(){
          if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)){
            this.register.iserror = true;
            this.register.notice = '用户名3~15个字符，仅限字母数字下划线中文';
            return;
          }
          if(!/^.{6,16}$/.test(this.register.password)){
            this.register.iserror = true;
            this.register.notice = '密码长度为6~16个字符';
            return
          }

          this.registerUser({username:this.register.username,password:this.register.password}
          ).then(res=>{
            this.register.iserror = false;
            this.register.notice = '';
          }).catch(res=>{
            this.register.iserror = true;
            this.register.notice = res.msg;
          })
        },


       },
   components: {

   }
 }
</script>

<style lang='less' scoped>
  .login-register {
    display: flex;
    align-items: center;
    margin-left: 56px;
    .mask {position: absolute;margin: auto;left:0;right:0;top:0;bottom:0;background: rgba(0,0,0,.48);box-sizing: border-box;z-index:100}
    .model-container {position:absolute;top: 50%;left: 50%;background: #36BC64;width: 800px;height: 500px;transform: translate(-50%, -50%);box-shadow: 2px 1px 3px #333}
    .main {
      float: left;
      width: 530px;
      height: 100%;
      background: url(//cloud.hunger-valley.com/17-12-13/38476998.jpg-middle) no-repeat center center/100% 100%;
    }
    .form {
      height: 100%;
      float: right;
      width: 270px;
      background: #fff;
      h3 {
      height: 42px;
      line-height: 42px;
      border-bottom: 1px solid #eee;
      padding-left: 20px;
      }
      p {
      font-size: 12px;
      &.error {color: red}
      }
      input {
      display: block;
      width: 100%;
      height: 33px;
      border-radius: 3px;
      margin-bottom: 12px;
      border: 1px solid #C1C1C1;
      padding: 0 5px;
      margin-top: 15px;
      }
      button {
      display: block;
      width: 100%;
      height: 33px;
      background: #36bc64;
      margin-top: 18px;
      border-radius: 4px;
      color: #fff;
      font-weight: 700;
      letter-spacing: 4px;
      cursor: pointer;
      }
      .register,.login {
      box-sizing: border-box;
      padding: 0 20px;
      height: 0;
      overflow: hidden;
      transition: all .8s ease;
      opacity: 0;
      &.show {
        height: 180px;
        opacity: 1
      }
    }
    }
  }

</style>

