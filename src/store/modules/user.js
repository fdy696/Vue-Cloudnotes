import Auth from '@/apis/auth';
import route from '@/router'

const state = {
  user:null
}
const getters = {
  username: state=> state.user?state.user.username:"未登录",
  sulg: state=> state.user?state.user.username.charAt(0):'未'
}
const mutations = {
  setUser(state,payload){
    state.user = payload.data
  }
}
const actions = {
  checkoutLogin({commit},payload){
    return Auth.getInfo().then(res=>{
      if(res.isLogin){
        commit('setUser',res);
        if (payload) { route.push(payload.path)}
      }else{
        route.push('/login')
      }

    })
  },
  loginUser({commit},{username,password}){
    return new Promise((resolve,reject)=>{
      Auth.login({ username, password }).then(res => {
        commit('setUser', res);
        route.push('/notebooks')
      }).catch(res=>{
        reject(res);
      });
    })

  },
  registerUser({commit},{username,password}){
    return new Promise((resolve, reject) => {
      Auth.register({ username, password }).then(res => {
        resolve();
        commit('setUser', res);
        route.push('/notebooks')
      }).catch(res => {
        reject(res);
      })
    })
  }
}


export default {
state,
getters,
mutations,
actions
}



