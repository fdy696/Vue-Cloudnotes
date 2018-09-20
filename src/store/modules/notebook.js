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
    console.log(notebook);
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