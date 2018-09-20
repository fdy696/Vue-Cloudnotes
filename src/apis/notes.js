import request from '@/helper/request';
import {friendlyTime} from '@/utils/friendlyTime'

const URL=  {
  GET: '/notes/from/:notebookId',
  ADD: '/notes/to/:notebookId',
  UPDATE: '/notes/:noteId',
  DELETE: '/notes/:noteId'
}

export default {
  getAll({notebookId}){
    return new Promise((resolve,reject)=>{
      request(URL.GET.replace(':notebookId',notebookId)).then(
        res=>{
          res.data = res.data.sort((note1,note2)=>
           note1.createdAt<note2.createdAt);
          res.data.forEach(item=>{
            item.friendlyTime = friendlyTime(item.createdAt)
            item.updateFriendlyTime = friendlyTime(item.updatedAt)
          })
          resolve(res)
       }
      )
    })
  },
  updateNote({noteId,title,content}){
      return request(URL.UPDATE.replace(':noteId',noteId),'PATCH',{title,content})
  },
  addNote({notebookId},{title="",content=""}){
    return request(URL.ADD.replace(':notebookId',notebookId),'POST',{title,content})
  },
  deleteNote({noteId}){
    return request(URL.DELETE.replace(':noteId',noteId),'DELETE')
  }
}
