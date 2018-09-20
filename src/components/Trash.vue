<template>
 <div class='trash'>
   <div class="trash-sidebar">
     <div class="trash-title">回收站</div>
     <ul class="trash-note-list">
       <li class="updata-title">
         <h5>更新时间</h5>
         <h5>标题</h5>
       </li>
       <li class="trash-note" v-for='trashnote in trashNotes' :key='trashnote.id'>
         <router-link :to="`/trash?noteId=${trashnote.id}`">
           <span class='fl'>{{trashnote.createdFriendlyTime}}</span>
           <span class='fr'>{{trashnote.title}}</span>
         </router-link>
       </li>
     </ul>
   </div>
   <div class="trash-detail">
     <div class="trash-detail-title">
       <span class="createdTime">创建日期:{{curTrashNote.createdFriendlyTime}}</span>
       <span class="updateTime">更新日期:{{curTrashNote.updateFriendlyTime}}</span>
       <span class='belong'>{{curTrashNote.belongNotebook}}</span>
       <button @click='onRevert'>恢复</button>
       <button @click='onDelete'>彻底删除</button>
     </div>
     <div class="content">
       <h3 class="note-title">{{curTrashNote.title}}</h3>
       <div class="note-content">{{curTrashNote.content}}</div>
     </div>
   </div>
 </div>
</template>

<script>
import Trash from '@/apis/trash'

window.trash = Trash;
import {mapGetters,mapActions, mapMutations} from 'vuex';

 export default {
   data () {
     return {
        }
   },
  created(){
    this.checkoutLogin();
    this.getTrashNotes().then(()=>{
      this.setTrashNoteId({noteId:this.$route.query.noteId})
    })
   },
  beforeRouteUpdate(to,from,next){
    if(to.query.noteId){
      this.setTrashNoteId({noteId:to.query.noteId})
    }
     next();
   },
  computed: {
    ...mapGetters([
      'trashNotes',
      'curTrashNote'
    ])
  },
  methods: {
    ...mapMutations([
      'setTrashNoteId'
    ]),
    ...mapActions([
      'checkoutLogin',
      'getTrashNotes',
      'deleteTrashNote',
      'revertTrashNote'
      ]),
    onDelete(){
      this.deleteTrashNote({noteId:this.curTrashNote.id}).then(()=>{
        this.setTrashNoteId({})
        this.$router.replace({
          path: '/trash',
          query: {
            noteId: this.curTrashNote.id
          }
        })
      })
    },
    onRevert({noteId}){
      this.revertTrashNote({noteId:this.curTrashNote.id})
    }
  },
   components: {

   }
 }
</script>

<style lang='less' scoped>
  .trash {
    display: flex;
    min-height: 100%;
    margin-left: 54px;
    background: #fff;
    .trash-sidebar {
      width: 290px;
      position: absolute;
      top: 0;
      bottom: 0;
      background: #eee;
      border-right: 1px solid #ccc;
      .trash-title {
        flex:1;
        color: #4A4A4A;
        background: #F7F7F7;
        height:45px;
        font-size: 18px;
        line-height: 45px;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
      .updata-title {
        height: 30px;
        h5 {
        width: 144px;
        float:left;
        text-align: center;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        }
      }
      .trash-note {
        width: 290px;
        height: 30px;
        border-bottom: 1px dashed #f6f6f6;
        span {
          display: inline-block;
          text-align: center;
          width: 142px;
          height: 28px;
          line-height: 28px;
        }
      }
    }
    .trash-detail {
       width: 100%;
      .trash-detail-title {
        user-select: none;
        margin-left: 290px;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        padding-right: 50px;
        color: #ccc;
        span {margin-right: 20px}
        button {
          background: #fff;
          border:1px solid #eee;
          margin-top: 4px;
          margin-right: 30px;
          padding: 0 5px;
          cursor: pointer;
          color: #E56149;
          float: right}
      }
      div.content {
        margin-left: 290px;
        padding: 30px;
        text-indent: 2em;
        font-size: 14px;
        line-height: 25px;
        margin-right: 150px;

        h3 {
          text-align: center;
          font-weight: 500;
          font-size: 22px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }

</style>
