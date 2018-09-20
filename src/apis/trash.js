import request from '@/helper/request';
import { friendlyTime } from '@/utils/friendlyTime'

const URL = {
  GET: '/notes/trash',
  REVERT: '/notes/:noteId/revert',
  DELETE: '/notes/:noteId/confirm'
}

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      request(URL.GET).then(
        res => {
          res.data.sort((note1, note2) =>
            note1.createdAt < note2.createdAt)
          res.data.forEach(item => {
            item.createdFriendlyTime = friendlyTime(item.createdAt)
            item.updateFriendlyTime = friendlyTime(item.updatedAt)||'未更新'
          })
          resolve(res)
        }
      )
    })
  },
  revertNote({ noteId }) {
    return request(URL.REVERT.replace(':noteId', noteId),'PATCH')
  },

  deleteNote({ noteId }) {
    return request(URL.DELETE.replace(':noteId', noteId), 'DELETE')
  }
}
