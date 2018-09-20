import request from '@/helper/request';
import {friendlyTime} from '@/utils/friendlyTime'

const URL=  {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebooks/:notebookId',
  DELETE: '/notebooks/:notebookId'
}

export default {
  getAll(){
    return new Promise((resolve,reject)=>{
      request(URL.GET).then(
        res=>{
          res.data = res.data.sort((notebook1,notebook2)=>
           notebook1.createdAt<notebook2.createdAt);
          res.data.forEach(item=>{
            item.friendlyTime = friendlyTime(item.createdAt)
          })
          resolve(res)
       }
      )
    })
  },
  updateNotebook(notebookId,{title=" "}){
    return request(URL.UPDATE.replace(':notebookId',notebookId),'PATCH',{title})
  },
  addNotebook({title=""}={title:""}){
    return new Promise((resolve,reject)=>{
      request(URL.ADD,'POST',{title}).then(res=>{
        res.data.friendlyTime = '刚刚'
        res.data.noteCounts = 0
        resolve(res)
      })
    })
  },
  deleteNotebook(notebookId){
    return request(URL.DELETE.replace(':notebookId',notebookId),'DELETE')
  }
}