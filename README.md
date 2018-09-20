### 在线云笔记
[预览地址](https://fdy111.gitee.io/vue-cloudnotes/#/)

一款风格简单的在线笔记本，用户注册登录后可以创建自己的笔记本进行记录，支持 Markdown 语法，支持预览和增删改查恢复等功能
#### 功能
- [x]  登陆注册
- [x] 笔记本和笔记的增删改查功能
- [x] 笔记可以使用Markdown书写
- [x] 笔记删除可以在废纸篓选择恢复或彻底删除
- [x] 友好的错误提示，简洁的界面

- 登录页
![登录页](https://upload-images.jianshu.io/upload_images/5548587-0d7fb873120c44e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 笔记本列表页
![笔记本列表页](https://upload-images.jianshu.io/upload_images/5548587-6e0eaa63a9292e0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 笔记详情页
![笔记详情页](https://upload-images.jianshu.io/upload_images/5548587-a954a13df02b45e8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```
使用方法：
# clone this repo
git clone

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev 或 npm start

# build for production with minification
npm run build

最后，star本repo :)  →_→
```





- `需求分析`
- `前后端接口约定`
- `创建远程仓库`
- `vue-cli初始化项目结构`
- `初始化样式`
- `引入图标`
- `安装less`
- `配置路由`
- `组件拆分`
- `划分模块,编写静态页面`
- `引入axios,封装接口api`
- `mock数据，测试接口api`
- `再次分析交互的实现细节`
- `交互实现`
- `打包上线`
--------------------------
### 交互分析
- 当用户访问任意页面，假如用户未登录，跳转到登录页面
- 用户此时可输入账号密码进行登录，也可点击注册账号显示【注册页面】
- 在注册页面用户可输入账号密码进行登录
- 登录成功后，跳转到【笔记本列表】页面，用户可以添加，删除、修改笔记本
- 用户点击某条笔记本，会跳转到【笔记页面】，【笔记】页面展示【当前笔记本下】的笔记列表，【笔记详情组件】展示笔记列表下的第一条笔记详情；如果笔记列表为空，【详情组件】提示请新建。
- 用户可切换笔记本，当切换后，【详情组件】默认展示第一条笔记
-------------------------------------
### 2.前后端接口约定

### 3.新建git仓库

### 4. Vue-cli建立项目结构
```
vue init webpack Vue-cloudnotes
```
### 5.项目代码初始化
`1.在src/assets/styles目录下添加reset.css文件`
`2.在main.js里面引入reset.css`
![项目代码初始化.png](https://upload-images.jianshu.io/upload_images/3680331-a691b9ce4bf289f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![在main.js引入reset.png](https://upload-images.jianshu.io/upload_images/3680331-e1b384856265521a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 6. 引入图标，初始化body
```
@import '//at.alicdn.com/t/font_496303_kqrjhri8l25d0a4i.css';
* {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}

body {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;  
  background-color: #eee;
}
```

### 7.配置路由
`在router-index.js里面配置路由`

```
export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/notebooks',
      name: 'Notebooks',
      component: Notebooks
    }, {
      path: '/notes',
      name: 'Notes',
      component: Notes
    }, {
      path: '/trash',
      name: 'Trash',
      component: Trash
    }
  ]
})
```
### 组件拆分及注入
![组件拆分.png](https://upload-images.jianshu.io/upload_images/3680331-60792f3c58b0c29a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![引入avatar组件1.png](https://upload-images.jianshu.io/upload_images/3680331-e3bf5ba169c15269.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![引入avatar组件.png](https://upload-images.jianshu.io/upload_images/3680331-6c9ebac456d7d7ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![使用avatar3.png](https://upload-images.jianshu.io/upload_images/3680331-066ace5e699639db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 书写静态页面


### 使用`?`传参，再次配置路由

### 交互实现
> 在MVVM中，交互实现主要就是对数据的操作，我们对各部分需要用的的数据进行分析。

**侧边栏**
  `data:{username,slug}`
**用户头像**
`data:{slug}`
`sulg随着用户的改变而改变`，初次进入为未登录，登录或注册后，用户发生改变；【slug】也要进行改变；
**笔记本列表页**
`data:{notebooks}`
每个用户状态下只有一个notebooks，随着用户改变而改变；
**笔记页**
`data:{notebooks,curnotebook,notes,curnote}`
notebooks通过getter获取，
curnotebook可以在笔记本列表点击导航改变；也可以在笔记侧边栏改变，依赖curbookId;
当用户改变notebook，notes随之改变
curnote,当用户在侧边栏点击可改变，未点击状态下为当前所有笔记中的第一个；点击后传入【curNoteId】改变；
### 使用Vuex管理数据
1.安装vuex
`
npm i vue-x --save
`
2.在src目录下新建store文件夹
![vuex项目结构.png](https://upload-images.jianshu.io/upload_images/3680331-a357abc2b4857d13.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3.在index中，引入相关模块
```
import Vue from 'vue'
import Vuex from 'vuex'
import note from './modules/notebook'
import notebook from './modules/note'
import user from './modules/user'
import trash from './modules/trash'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notebook,
    note,
    user,
    trash
  }
})

```
4.在main.js中引入并使用Store;
```
import store from ''./store"

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```
**user.js**
```
const state = {
    user:null
}
const getters = {
  sulg: state=>state.user?state.user.username.charAt(0):'未'

}
const mutations = {
  setUser(state,payload){
    state.user = payload
  }
}
const actions = {
checkoutLogin({commit}){
  return Auth.getInfo().then(res=>{
if(res.isLogin){
   commit('setUser',res.data)
    route.push('/notebooks')
  }else{
     route.push('/login')
  }
   
  })
},
  // 当login时改变user
  loginUser({commit},{username,password}) {
    return Auth.login({username,password}).then(res=>{
        commit('setUser',res.data);
        route.push('/notebooks')
    })
  },
  registerUser({commit},{username,password}) {
    return Auth.login({username,password}).then(res=>{
      commit('setUser',res.data);
      route.push('/notebooks')
      })
  }
}

export default {
state,
getters,
mutations,
actions
}

```
**notebooks**
```
import Notebook from '@/apis/notebooks'
import {Message} from 'element-ui'

const state = {
  notebooks:  [],
  curBookId: null,
}
const getters = {
  notebooks: state=>state.notebooks,
  curBook: state=> {
    if(!state.curBookId) return state.notebooks[0] || {};
    return state.notebooks.find(notebook=>notebook.id==state.curBookId);
  }
}
const mutations = {
  setNotebooks(state,{notebooks}){
    state.notebooks = notebooks
  },
  addNotebook(state,{notebook}){
    state.notebooks.unshift(notebook)
  },
  deleteNotebook(state,{notebookId}){
    state.notebooks = state.notebooks.filter(notebook=>notebook.id !==notebookId)
  },
  updateNotebook(state,{notebookId,title}){
    // 浅拷贝
    let notebook = state.notebooks.find(notebook=>notebook.id===notebookId);
    notebook.title = title;
  },
  setCurBookId(state,{notebookId}) {
    console.log(notebookId)
    state.curBookId = notebookId
  }
}
const actions = {
  getNotebooks({commit}){
    return Notebook.getAll().then(res=>{
      commit('setNotebooks',{notebooks:res.data});
    })
  },
  addNotebook({commit},{title}){
    return Notebook.addNotebook({title}).then(res=>{
      commit('addNotebook',{notebook:res.data})
    })
  },
  deleteNotebook({commit},{notebookId}){
    return Notebook.deleteNotebook(notebookId).then(res=>{
      commit('deleteNotebook',{notebookId})
      Message.success(res.msg)
    }).catch(res=>{
      Message.warning(res.msg)
    })
  },
  updateNotebook({commit},{notebookId,title}){
    return Notebook.updateNotebook(notebookId,{title}).then(res=>{
      commit('updateNotebook',{notebookId,title})
    })
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
```
**notes**
```
import Note from '@/apis/notes'
import {Message} from 'element-ui'
window.Note = Note;
const state = {
  notes: null,
  curNoteId:null
}
const getters = {
  notes: state=>state.notes || [],
  curNote: state=> {
    if(!Array.isArray(state.notes)) return {};
    // 假如没有传递参数，就获取第一个笔记
    if(!state.curNoteId) return state.notes[0] || {};
    return state.notes.find(note=>note.id==state.curNoteId) || {};
  }
}
const mutations = {
  setNotes(state,{notes}){
    state.notes = notes
  },
  setCurNoteId(state, { curnoteId }) {
    state.curNoteId = curnoteId;
  },
  addNotes(state,{note}){
    note.friendlyTime = '刚刚',
    note.updateFriendlyTime = '刚刚'
    state.notes.unshift(note)
  },
  deleteNote(state,{noteId}){

    state.notes = state.notes.filter(note=>note.id !==noteId) || {}
  },
  updateNote(state,{noteId,title,content}){
    // 浅拷贝
    let note = state.notes.find(note=>note.id===noteId);
    note.title = title;
    note.content = content;
  },

}
const actions = {
  getNotes({commit},{notebookId}){
    return Note.getAll({notebookId}).then(res=>{
      commit('setNotes',{notes:res.data});

    })
  },
  addNote({commit},{notebookId,title,content}){
    return new Promise((resolve,reject)=>{
      Note.addNote({notebookId},{title,content}).then(res=>{
        commit('addNotes',{note:res.data})
        Message.success('请在此处添加笔记内容')
        resolve(res.data)
      })
    })
  },
  deleteNote({commit},{noteId}){
    return Note.deleteNote({noteId}).then(res=>{
      commit('deleteNote',{noteId})
      Message.success(res.msg)
    }).catch(res=>{
      Message.warning(res.msg)
    })
  },
  updateNote({commit},{noteId,title,content}){
    return Note.updateNote({noteId,title,content}).then(res=>{
      commit('updateNote',{noteId,title,value})
    }).catch(()=>{})
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}

```
**trash**
xxx

具体交互









