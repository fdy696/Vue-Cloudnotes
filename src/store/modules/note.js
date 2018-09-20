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