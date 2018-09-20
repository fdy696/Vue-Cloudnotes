import Trash from '@/apis/trash'
import { Message } from 'element-ui'
const state = {
  trashNotes: null,
  trashNoteId: null,
}
const getters = {
  trashNotes: state=> state.trashNotes || [],
  curTrashNote: (state,getters)=> {
    if (!state.trashNoteId) return getters.trashNotes[0] || {};
    return getters.trashNotes.find(note=> note.id==state.trashNoteId) || {}
  }
}
const mutations = {
  setTrashNotes(state,payload) {
    console.log(payload)
    state.trashNotes = payload.data;
  },
  deleteTrashNote(state,payload) {
    if(state.trashNoteId==null || state.trashNotes==null) state.trashNotes.shift();
    state.trashNotes = state.trashNotes.filter(note=> note.id != state.trashNoteId);
     state.trashNoteId = null;
  },
  revertNote(state,payload) {
    if(state.trashNotes===null) return;
    state.trashNotes.filter(note => note.id !== state.trashNoteId)
  },
  setTrashNoteId(state,payload) {
    state.trashNoteId = payload.noteId
  }


}
const actions = {
  getTrashNotes({state,commit}){
    return Trash.getAll().then(res=>{
      commit('setTrashNotes',res);
      if(state.trashNotes==null || state.trashNotes[0] == null) {
        Message.error('回收站为空');}
    })
  },
  deleteTrashNote({commit},{noteId}){
    return Trash.deleteNote({noteId}).then(res=>{
      commit('deleteTrashNote',{noteId})
      Message.success('删除成功')
    })
  },
  revertTrashNote({ commit }, { noteId }) {
    return Trash.revertNote({ noteId }).then(res => {
      commit('deleteTrashNote',{noteId})
      Message.success('恢复成功')
    })
  }
}
export default {
state,
getters,
mutations,
actions
}