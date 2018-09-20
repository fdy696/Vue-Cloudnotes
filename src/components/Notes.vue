<template>
 <div id='note-detail' class='notes'>
   <note-sidebar></note-sidebar>
   <div class="note-detail">
     <div class="note-bar">
       <span class="createdTime">创建日期:{{curNote.createdFriendlyTime}}</span>
       <span class="updateTime">创建日期:{{curNote.updateFriendlyTime}}</span>
       <span class='belong'>{{this.statusText}}</span>
       <button @click='onDelete'>删除</button>
       <button @click='onEdit'>编辑</button>
     </div>

     <div class="edit" v-if='showEdit'>
       <input class='title' type="text"  placeholder="请输入标题" v-model:value='curNote.title' @input='onupdateNote'>
       <textarea name="" id="" cols="30" rows="20" placeholder="  在此输入内容，支持markdown语法" v-model:value="curNote.content" @input='onupdateNote'></textarea>
     </div>
     <div class="content" v-if='showRead'>
       <h3 class="title">{{curNote.title}}</h3>
       <div class="note-content">{{curNote.content}}</div>
     </div>
   </div>
 </div>
</template>

<script>
import NoteSidebar from '@/components/NotesSidebar';
import _ from 'lodash';
import {mapStates,mapGetters,mapActions, mapMutations} from 'vuex';

 export default {
   data () {
     return {
       statusText: '已保存',
       showEdit : false,
       showRead : true
     }
   },
  computed: {
     ...mapGetters(['curNote','curBook'])
   },
  methods :{
    ...mapMutations([
      'setCurNoteId',

    ]),
    ...mapActions([
      'deleteNote',
      'updateNote',
      'checkoutLogin'
    ]),
    onupdateNote: _.debounce(function() {
      this.statusText = '正在编辑'
      this.updateNote({noteId:this.curNote.id,
      title:this.curNote.title,
      content:this.curNote.content}
      ).then(()=>{this.statusText = '保存完成'}
      ).catch(()=>{this.statusText = '保存出错'})
    },500),
    onDelete(){
      this.deleteNote({noteId:this.curNote.id}).then(()=>{
        this.setCurNoteId({});
        this.$router.replace({
          path: '/notes',
          query: {
            noteId: this.curNote.id,
            notebookId: this.curBook.id
          }
        })
      })
    },
    onEdit(e) {
      this.showEdit=!this.showEdit;
      this.showRead = !this.showRead;
      e.target.innerHTML = e.target.innerHTML==='编辑'?'阅读':'编辑'
    }
   },
  created(){
    this.checkoutLogin();
  },
  beforeRouteUpdate(to,from,next){
    if(to.query.noteId){
      this.setCurNoteId({curnoteId:to.query.noteId})
    }
     next();
   },
   components: {
     NoteSidebar
   }
 }

</script>

<style lang='less' scoped>
  .notes {
    .title {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
      height: 40px;
      line-height: 40px;

    }
    margin-left: 55px;
    display: flex;
    height: 100%;
    .note-detail {
      background: #fff;
      height: 100%;
      flex: 1;
      .note-bar {
        height: 32px;
        line-height: 30px;
        color: #ccc;
        font-size: 14px;
        border: 1px solid #eee;
        padding-left: 12px;
        padding-right: 20px;
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
      .note-title {
        padding-left: 12px;
        margin-bottom: 5px;
        input {
         font-weight: bold;
        }
      }
      .edit {
        padding: 20px 30px;
        input {
          width: 100%;
          border-bottom: 1px solid #E56149;
          font-size: 28px;
          font-weight: 500px;
          font-family: 'Microsoft Yahei';
          color: #a4a4a4
          }

        textarea {
          padding-top: 25px;
          padding-left: -20px;
          width: 100%;
        }
      }
      div.content {
        padding: 30px;
        text-indent: 2em;
        font-size: 14px;
        line-height: 25px;
        .title {
          text-align: center;
          font-weight: 500;
          font-size: 28px;
          height: 40px;
          line-height: 40px;
          letter-spacing: 1em
        }
        .note-content {
          text-indent: 2em;
          margin-top: 20px;
        }
      }
    }
  }

</style>
